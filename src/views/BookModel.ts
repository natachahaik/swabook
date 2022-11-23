import type { ItemsEntityProxy } from "@/types";

export default class BookModel {
  title: string;
  author: string;
  image: string;

  constructor(bookFromApi: ItemsEntityProxy) {
    console.log(bookFromApi);
    this.title = bookFromApi.volumeInfo.title;
    this.author = bookFromApi.volumeInfo.authors?.[0] ?? "";
    this.image = bookFromApi.volumeInfo.imageLinks?.thumbnail ?? "";
  }
}
