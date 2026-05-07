import { cocktailType, cocktailsType } from "@/domain/models/cocktail";
import { apiClient } from "@/domain/apiClient";

export async function getCocktails(): Promise<cocktailsType> {
  return apiClient<cocktailsType>("cocktails");
}

export async function getCocktailById(cocktailId: number): Promise<cocktailType> {
  return apiClient<cocktailType>(`cocktails/${cocktailId}`);
}