import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Footer from "../layouts/Footer";
import banner from "../assets/images/banner-image.jpg";

export default function Home() {
  return (
    <>
      <div className="w-100vw px-10">
        <div className="flex justify-between items-center h-[100vh] max-w-7xl mx-auto mb-12">
          <div>
            <h1 className="text-6xl font-black text-primary mb-2">
              BOOK <br /> STORE
            </h1>
            <p className="text-secondary font-semibold text-xl">
              Your Gateway to a World of Books
            </p>
            <div className="text-primary mt-20">
              <p>
                Bangladesh's most famous bookstore. Shop new, used, and
                hard-to-find books online or in-store.
              </p>
            </div>
          </div>
          <div className="relative -right-14">
            <img src={banner} alt="banner" />
          </div>
        </div>
        <div className="mb-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-black text-primary uppercase my-10">
              Top 10 Recently Added Books
            </h1>
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/3 lg:w-1/4 px-4 py-4 mb-4 mx-4 my-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                  <div className="flex flex-col space-y-1">
                    <h2 className="mb-1 text-xl font-semibold">Title</h2>
                  </div>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random/100x100/?5"
                    alt=""
                    className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                  />
                  <h2 className="mb-1 text-xl font-normal">
                    Author: Author Name
                  </h2>
                  <p className="text-sm dark:text-gray-400">
                    Genre: Genre Name
                  </p>
                  <p className="text-sm dark:text-gray-400">
                    Publication: Publication Date
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-10" asChild>
              <Link to="/all-books">All Books</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}