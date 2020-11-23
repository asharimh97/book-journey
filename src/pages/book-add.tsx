import Layout from "components/Layout";
import CardAddBook from "components/organisms/CardAddBook";
import React from "react";
import { useToasts } from "react-toast-notifications";
import { db, storage } from "service/firebase";

const AddBook: React.FC = () => {
  const { addToast } = useToasts();

  const handleUploadCover = async (image: File) => {
    const storageRef = storage().ref();

    try {
      const imageName = `${Date.now()}-${image.name}`;
      const imageRef = await storageRef.child(imageName).put(image);
      const url = await imageRef.ref.getDownloadURL();

      return url;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const handleAddBook = async (val: any, e: any) => {
    // construct data file
    const { cover, ...rest } = val;
    const data = {
      ...rest
    };

    if (cover?.length > 0) {
      data.cover = await handleUploadCover(cover[0]);
    }

    // add book cover to firebase storage
    const addBook = await db.collection("books").add(data);

    // reset form if success
    if (addBook.id) {
      e.target.reset();
      addToast("Success add new book!", {
        appearance: "success",
        autoDismiss: true
      });
    }
  };

  return (
    <Layout title="Add Book">
      <CardAddBook onSubmit={handleAddBook} />
    </Layout>
  );
};

export default AddBook;
