"use client";

import { useEffect, useState } from "react";

import {
  cocktailsType,
  cocktailType,
} from "@/domain/models/cocktail";

import {
  getCocktails,
} from "@/domain/services/cocktail";

import EditIcon from "@/components/icons/edit-icon";
import TrashIcon from "@/components/icons/trash-icon";

import CocktailForm from "@/components/cocktail-form/cocktail-form";

export default function CocktailsEdit() {
  const [cocktails, setCocktails] = useState<cocktailsType>([]);

  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  function loadCocktails() {
    getCocktails().then(setCocktails);
  }

  useEffect(() => {
    loadCocktails();
  }, []);

  function showForm() {
    setIsShowForm(true);
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
        onClick={showForm}
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
                <td>{cocktail.id}</td>

                <td>{cocktail.name}</td>

                <td>
                  {cocktail.description}
                </td>

                <td className="flex gap-1">
                  <button
                    aria-label="modifier"
                    className="bg-amber-500"
                  >
                    <EditIcon />
                  </button>

                  <button
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
        />
      )}
    </>
  );
}