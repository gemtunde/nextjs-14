"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const OrderProduct = (props: Props) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/products");
  };
  return (
    <div>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default OrderProduct;
