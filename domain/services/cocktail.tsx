import { cocktailsType } from "@/domain/models/cocktail";

export async function getCocktails(): Promise<cocktailsType> {
  const response = await fetch("/data/cocktails.json");

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des cocktails");
  }

  return response.json();
}