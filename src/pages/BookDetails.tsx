// import ProductReview from "@/components/ProductReview";
// import { Button } from "@/components/ui/button";
// import { useSingleProductQuery } from "@/redux/features/products/productsApi";

import { Button } from "../components/ui/button";

import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import BookReview from "../components/BookReview";

export default function BookDetails() {
  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);
  console.log(book, "data from book details page");

  return (
    <>
      <div className="flex w-10/12 mx-auto items-center pb-4 border-b-4 border-gray-300 gap-6">
        <div className="w-[50%]">
          <img src={book?.img} alt={book?.title} />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Title: {book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publication}</p>
          <div className="flex w-4/12 gap-4">
            <Button>Edit</Button>
            <Button className="bg-red-500 hover:bg-black">Delete</Button>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-xl font-medium pt-4">
          All Reviews about this Book
        </h1>
        <ul className="space-y-2 text-lg my-4">
          {book?.comment?.length ? (
            book?.comment?.map((comments: string, index: number) => (
              <li key={index}>
                {index + 1}. {comments}
              </li>
            ))
          ) : (
            <h1 className="mt-6 text-xl">No Reviews yet!</h1>
          )}
        </ul>
      </div>

      {<BookReview id={id!} />}
    </>
  );
}
