import { selector } from "recoil";
import { db } from "service/firebase";
import { bookDetailId } from "stores/states";

export const bookDetailState = selector({
  key: "bookDetailState",
  get: async ({ get }) => {
    let res: any = null;

    const id: any = get(bookDetailId);
    const bookRef = db.collection("books").doc(id);
    const detail = await bookRef.get();

    if (!detail.exists) {
      console.error("404! Data book not found");
      return null;
    }

    res = detail.data();

    return res;
  }
});
