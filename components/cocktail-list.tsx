import Link from 'next/link'
import { cocktailsType, cocktailType } from "@/domain/models/cocktail";
import { getCocktails } from "@/domain/services/cocktail";

export default async function CocktailList() {

  const cocktails: cocktailsType|undefined = await getCocktails();

  return (
    <ul className="flex flex-wrap gap-5">
      {cocktails.map((cocktail: cocktailType) => (
        <li key={cocktail.id} className="border p-2">
          <p>{cocktail.name}</p>
          <p>{cocktail.description}</p>

          <Link href={`cocktail/${cocktail.id}`}>Voir plus</Link>
        </li>
      ))}
    </ul>
  );
}