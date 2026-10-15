import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const modules = {};
function load(name) {
 if (modules[name]) return modules[name];
 const moduleRecord = { exports: {} };
 const code = ts.transpileModule(fs.readFileSync(new URL(`../src/lib/${name}.ts`, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
 vm.runInNewContext(code, { module: moduleRecord, exports: moduleRecord.exports, require: id => load(id.replace('./', '')) });
 modules[name] = moduleRecord.exports; return moduleRecord.exports;
}
const { filterCandidates } = load('candidate-search');
const { classifyCandidate } = load('explore-categories');
const rows=[
 {source_id:'1',name_ko:'두부김치',ingredients_original:'두부 김치 돼지고기',source_category:'반찬',name_en:'Tofu with Kimchi',ingredients_en:'Tofu, kimchi, pork'},
 {source_id:'2',name_ko:'김치국',ingredients_original:'김치 멸치',source_category:'국&찌개',name_en:'Kimchi Soup',ingredients_en:'Kimchi, anchovies'},
];
test('English and Korean ingredient searches find the same dish',()=>{
 assert.deepEqual(filterCandidates(rows,'TOFU pork','all').map(r=>r.source_id),['1']);
 assert.deepEqual(filterCandidates(rows,'두부 돼지고기','all').map(r=>r.source_id),['1']);
});
test('Category filtering uses stable Korean codes in either locale',()=>{
 assert.deepEqual(filterCandidates(rows,'kimchi','국&찌개').map(r=>r.source_id),['2']);
 assert.equal(filterCandidates(rows,'tofu','국&찌개').length,0);
});
test('Whitespace and absent translations preserve Korean search',()=>{
 assert.equal(filterCandidates(rows,'   ','all').length,2);
 assert.equal(filterCandidates([{...rows[0],name_en:undefined,ingredients_en:undefined}],'두부','all').length,1);
});
test('Compound dish names use meal type before the kimchi ingredient',()=>{
 assert.equal(classifyCandidate({name_ko:'김치볶음밥',source_category:'밥'}),'Rice');
 assert.equal(classifyCandidate({name_ko:'김치찌개',source_category:'국&찌개'}),'Soup & Stew');
 assert.equal(classifyCandidate({name_ko:'배추김치',source_category:'반찬'}),'Kimchi');
 assert.equal(classifyCandidate({name_ko:'단호박약식',source_category:'밥'}),'Dessert');
 assert.equal(filterCandidates(rows,'kimchi','Kimchi').length,1);
});
