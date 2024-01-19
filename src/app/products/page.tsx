import Link from "next/link";
import React from "react";

type Props = {};

//static metadata
export const metadata = {
  title: "About Products Page",
};

const ProductDetails = (props: Props) => {
  return (
    <div>
      Product Details
      <h2>
        <Link href="products/1"> Product 1 </Link>
      </h2>
      <h2>
        {" "}
        <Link href="products/2"> Product 2 </Link>
      </h2>
      <h2>
        <Link href="products/3"> Product 3 </Link>
      </h2>
    </div>
  );
};

export default ProductDetails;
