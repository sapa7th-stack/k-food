import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import ts from "typescript";

function loadTypeScript(fileUrl, dependencies = {}) {
  const source = fs.readFileSync(fileUrl, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const moduleRecord = { exports: {} };

  new Function("require", "exports", "module", output)(
    (name) => {
      if (!(name in dependencies)) throw new Error(`Unexpected dependency: ${name}`);
      return dependencies[name];
    },
    moduleRecord.exports,
    moduleRecord,
  );

  return moduleRecord.exports;
}

const recipeDataUrl = new URL("../src/data/recipes.ts", import.meta.url);
const { recipes } = loadTypeScript(recipeDataUrl);
const repositoryUrl = new URL("../src/lib/recipes.ts", import.meta.url);
const repository = loadTypeScript(repositoryUrl, {
  "server-only": {},
  "@supabase/supabase-js": { createClient: () => { throw new Error("Supabase should not be used without environment variables"); } },
  "@/data/recipes": { recipes },
  "@/lib/recipe-mapper": { mapRecipe: (row) => row },
});

test("repository falls back to bundled recipes when Supabase is not configured", async () => {
  assert.deepEqual(await repository.getRecipes(), { recipes, status: "sample" });
});

test("featured recipes have unique identifiers and complete bilingual fields", () => {
  assert.equal(new Set(recipes.map((recipe) => recipe.id)).size, recipes.length);
  assert.equal(new Set(recipes.map((recipe) => recipe.slug)).size, recipes.length);

  for (const recipe of recipes) {
    assert.ok(recipe.nameKo);
    assert.ok(recipe.nameEn);
    assert.ok(recipe.descriptionKo);
    assert.ok(recipe.descriptionEn);
    assert.ok(recipe.image.startsWith("/images/"));
    assert.ok(recipe.cookingTime > 0);
    assert.ok(recipe.spicyLevel >= 0 && recipe.spicyLevel <= 5);

    const imageUrl = new URL(`../public${recipe.image}`, import.meta.url);
    assert.ok(fs.existsSync(imageUrl), `Missing image for ${recipe.slug}`);
  }
});
