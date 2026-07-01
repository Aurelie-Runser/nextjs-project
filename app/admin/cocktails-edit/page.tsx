"use client";

import { useEffect, useState } from "react";

import {
  cocktailsType,
  cocktailType,
} from "@/domain/models/cocktail";

import {
  getCocktails,
  deleteCocktail,
} from "@/domain/services/cocktail";

import EditIcon from "@/components/icons/edit-icon";
import TrashIcon from "@/components/icons/trash-icon";

import CocktailForm from "@/components/cocktail-form/cocktail-form";

export default function CocktailsEdit() {
  const [cocktails, setCocktails] = useState<cocktailsType>([]);
  
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [cocktailSelected, setCocktailSelected] = useState<cocktailType | undefined>();

  function loadCocktails() {
    getCocktails().then(setCocktails);
  }

  useEffect(() => {
    loadCocktails();
  }, []);

  function showForm(cocktail?: cocktailType) {
    setCocktailSelected(cocktail); 
    setIsShowForm(true);
  }

  async function deleteCocktailGestion(cocktailId:number) {
    await deleteCocktail(cocktailId)

    setCocktails((prev) =>
      prev.filter((cocktail) => cocktail.id !== cocktailId)
    );
  }
  
  function handleSuccess() {
    setIsShowForm(false);

    loadCocktails();
  }

  return (
    <>
      <h1>
        Page d&apos;édition des cocktails.
      </h1>

      <hr />

      <button
        onClick={() => showForm()}
        className="bg-green-700 mb-8"
      >
        Ajouter un Cocktail
      </button>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {cocktails.map(
            (cocktail: cocktailType) => (
              <tr
                key={cocktail.id}
                className="border"
              >
                <td className="p-1">{cocktail.id}</td>

                <td className="p-1">{cocktail.name}</td>

                <td className="p-1">
                  {cocktail.description}
                </td>

                <td className="p-1 flex gap-1">
                  <button
                    onClick={() => showForm(cocktail)}
                    aria-label="modifier"
                    className="bg-amber-500"
                  >
                    <EditIcon />
                  </button>

                  <button
                    onClick={() => deleteCocktailGestion(cocktail.id)}
                    aria-label="supprimer"
                    className="bg-red-700"
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {isShowForm && (
        <CocktailForm
          onSuccess={handleSuccess}
          onClose={() => setIsShowForm(false)}
          cocktail={cocktailSelected}
        />
      )}
    </>
  );
}