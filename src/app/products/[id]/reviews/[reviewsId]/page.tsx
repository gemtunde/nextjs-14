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
  return (
    <div>
      Review {params.reviewsId} for product id {params.id}
    </div>
  );
};

export default ReviewsSingle;
