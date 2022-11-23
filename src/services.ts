//le services sert à faire une requête et renvoyer la réponse de la requête.

import BookModel from "./views/BookModel";
import type { GoogleResponseProxy } from "./types";

export async function getBooks(search: string): Promise<BookModel[]> {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}`
  ); //récupérer le fetch
  const responsejson: GoogleResponseProxy = await response.json();

  return (
    responsejson?.items?.map((bookFromApi) => new BookModel(bookFromApi)) ?? []
  ); // retourne l'array de bookModel
}

// il faut exporter la fonction (ligne 3 avec le export)

// l'input c'est les paramètres d'une fonction, l'output c'est le return.
