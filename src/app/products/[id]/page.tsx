import React from "react";

const ProductSingle = ({ params }: { params: { id: string } }) => {
  return <div>ProductSingle {params.id} </div>;
};

export default ProductSingle;
