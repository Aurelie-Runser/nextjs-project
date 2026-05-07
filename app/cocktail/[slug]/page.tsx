import { cocktailType } from "@/domain/models/cocktail";
import { getCocktailById } from "@/domain/services/cocktail";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Cocktail({ params }: Props) {
  const { slug } = await params;

  const cocktail: cocktailType|undefined = await getCocktailById(Number(slug));

  if (!cocktail) {
    return <div>Cocktail introuvable</div>;
  }

  return (
    <>
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
    </>
  );
}