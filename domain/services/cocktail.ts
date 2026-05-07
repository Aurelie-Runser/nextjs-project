import { cocktailType, cocktailsType } from "@/domain/models/cocktail";
import { apiClient } from "@/domain/apiClient";

export async function getCocktails(): Promise<cocktailsType> {
  return apiClient<cocktailsType>("cocktails.json");
}

export async function getCocktailById(cocktailId: number): Promise<cocktailType | undefined> {
  const cocktails = await getCocktails();

  return cocktails.find(
    (cocktail) => cocktail.id === cocktailId
  );
}