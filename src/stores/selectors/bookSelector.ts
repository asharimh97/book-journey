import { selector } from "recoil";
import { db } from "service/firebase";
import { booksState } from "stores/states";

export const booksQuery = selector({
  key: "booksCollection",
  get: async ({ get }) => {
    const res: Array<any> = get(booksState);

    const bookRef = db.collection("books");
    const snapshot = await bookRef.get();

    if (snapshot.empty) return res;

    snapshot.forEach(book => {
      const bookData = {
        ...book.data(),
        id: book.id
      };
      res.push(bookData);
    });

    return res;
  }
});
