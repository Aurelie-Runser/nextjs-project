"use client";

import { useEffect, useState } from "react";
import { cocktailsType, cocktailType } from "@/domain/models/cocktail";
import { getCocktails } from "@/domain/services/cocktail";

export default function CocktailsEdit() {

  const [cocktails, setCocktails] = useState<cocktailsType>([]);

  useEffect(() => {
    getCocktails().then(setCocktails);
  }, []);

  
  return (
    <>
      <h1>Page d&apos;edition des cocktails.</h1>

      <hr/>

      <table className="w-full text-left">
        <thead>
          <tr className="">
            <th scope="col">Id</th>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {cocktails.map((cocktail: cocktailType) => (
            <tr key={cocktail.id} className="border p-2">
              <th scope="row">{cocktail.id}</th>
              <th>{cocktail.name}</th>
              <th>{cocktail.description}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}