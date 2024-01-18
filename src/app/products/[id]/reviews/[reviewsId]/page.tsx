import { notFound } from "next/navigation";
import React from "react";

type Props = {};

const ReviewsSingle = ({
  params,
}: {
  params: {
    reviewsId: string;
    id: string;
  };
}) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewsId} for product id {params.id}
    </div>
  );
};

export default ReviewsSingle;
