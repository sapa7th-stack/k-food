import HomeContent from "@/components/HomeContent";
import { getRecipes } from "@/lib/recipes";
export default async function Home() {
  const result = await getRecipes();
  return <HomeContent {...result} />;
}
