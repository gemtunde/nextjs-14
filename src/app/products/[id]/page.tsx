import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.id}`,
  };
};

const ProductSingle = ({ params }: { params: { id: string } }) => {
  return <div>ProductSingle {params.id} </div>;
};

export default ProductSingle;
