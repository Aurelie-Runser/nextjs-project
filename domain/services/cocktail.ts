import { cocktailType, cocktailsType, cocktailNewType } from "@/domain/models/cocktail";
import { apiClient } from "@/domain/apiClient";

export async function getCocktails(): Promise<cocktailsType> {
  return apiClient<cocktailsType>("cocktails");
}

export async function getCocktailById(cocktailId: number): Promise<cocktailType> {
  return apiClient<cocktailType>(`cocktails/${cocktailId}`);
}

export async function addCocktail(cocktail: cocktailNewType): Promise<cocktailType> {
  return apiClient<cocktailType>("cocktails", {
    method: "POST",
    body: JSON.stringify(cocktail),
  });
}

export async function updateCocktail(cocktail: cocktailType): Promise<cocktailType> {
  return apiClient<cocktailType>(`cocktails/${cocktail.id}`, {
    method: "PUT",
    body: JSON.stringify(cocktail),
  });
}

export async function deleteCocktail(cocktailId: number): Promise<null> {
  return apiClient<null>(`cocktails/${cocktailId}`, {
    method: "DELETE"
  });
}