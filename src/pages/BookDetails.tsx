// import ProductReview from "@/components/ProductReview";
// import { Button } from "@/components/ui/button";
// import { useSingleProductQuery } from "@/redux/features/products/productsApi";

import { Button } from "../components/ui/button";

// import { useParams } from "react-router-dom";

export default function BookDetails() {
  //   const { id } = useParams();

  //   const { data: product, isLoading } = useSingleProductQuery(id);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src="" alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Title: </h1>
          <p className="text-xl">Author: </p>
          <p className="text-xl">Genre: </p>
          <p className="text-xl">Publication Date: </p>
          <Button>Add to cart</Button>
        </div>
      </div>
      {/* reviews */}
      {/* <ProductReview id={id!} /> */}
    </>
  );
}
