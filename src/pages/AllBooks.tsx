/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  getSearchBooks,
  setPublicationRange,
} from "../redux/features/books/booksSlice";
import { useGetAllBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import BookCard from "../components/BookCard";
import { Slider } from "../components/ui/Slider";

export default function AllBooks() {
  const { data } = useGetAllBooksQuery(undefined);
  const { publicationRange } = useAppSelector((state) => state.books);
  const { searchBooks } = useAppSelector((state) => state.books);

  const dispatch = useAppDispatch();
  const handleSlider = (value: number[]) => {
    dispatch(setPublicationRange(value[0]));
  };

  const handleSearchBooks = (event: any) => {
    dispatch(getSearchBooks(event.target.value));
  };

  let books;
  let searchData;
  if (publicationRange > 1800 && publicationRange < 2023) {
    books = data?.data?.filter(
      (item: { publication: number }) => item.publication <= publicationRange
    );
    if (searchBooks) {
      searchData = books?.filter(
        (item: { genre: string }) => item.genre == searchBooks
      );
    } else {
      searchData = books;
    }
  } else {
    books = data?.data;
    if (searchBooks) {
      searchData = books?.filter(
        (item: { genre: string }) => item.genre == searchBooks
      );
    } else {
      searchData = books;
    }
  }

  return (
    <>
      <div className="w-full mx-auto">
        <h1 className="text-center text-4xl font-black text-primary mb-4">
          All Books Are Here
        </h1>

        <div className="grid grid-cols-5 max-w-7xl mx-auto relative ">
          <div className="col-span-1 z mr-6 space-y-5 border rounded-2xl border-gray-200/80 p-3 self-start sticky top-16 h-[calc(100vh-80px)]">
            <div>
              <div className="space-y-3 ">
                <h1 className="text-xl uppercase mb-2">Publication Range</h1>
                <div className="max-w-xl">
                  <Slider
                    defaultValue={[2023]}
                    max={2023}
                    min={1800}
                    step={1}
                    onValueChange={(value) => handleSlider(value)}
                  />
                </div>
                <div>From 1800 To {publicationRange}</div>
              </div>

              <div className="my-4">
                <h1 className="text-xl uppercase mb-2">
                  Type Genre to get specific types books
                </h1>
                <input
                  type="text"
                  placeholder="Type Genre"
                  onChange={handleSearchBooks}
                />
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-wrap items-center justify-evenly">
            {searchData?.map((book: IBook) => (
              <BookCard book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
