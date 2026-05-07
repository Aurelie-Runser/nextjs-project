"use client";

import "./asset.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  cocktailNewType,
} from "@/domain/models/cocktail";

import {
  addCocktail,
} from "@/domain/services/cocktail";

type Props = {
  onSuccess: () => void;
  onClose: () => void;
};

export default function CocktailForm({
  onSuccess,
  onClose,
}: Props) {
  const dialogRef =
    useRef<HTMLDialogElement>(null);

  const [newCocktail, setNewCocktail] =
    useState<cocktailNewType>({
      name: "",
      description: "",
    });

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await addCocktail(newCocktail);

    setNewCocktail({
      name: "",
      description: "",
    });

    dialogRef.current?.close();

    onSuccess();
  }

  function handleClose() {
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      id="cocktailForm"
      onClose={handleClose}
    >
      <h2>
        Formulaire de création de Cocktail
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">
            Nom
          </label>

          <input
            type="text"
            name="name"
            value={newCocktail.name}
            onChange={(e) =>
              setNewCocktail({
                ...newCocktail,
                name: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="description">
            Description
          </label>

          <textarea
            name="description"
            value={
              newCocktail.description
            }
            onChange={(e) =>
              setNewCocktail({
                ...newCocktail,
                description:
                  e.target.value,
              })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-700"
        >
          Ajouter
        </button>
      </form>
    </dialog>
  );
}