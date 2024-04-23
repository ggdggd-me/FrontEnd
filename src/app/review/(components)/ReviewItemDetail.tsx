import { iReview } from "@/interface/interface";
import React from "react";

interface Props {
  review: iReview;
}

export default function ReviewDetail({ review }: Props) {
  return (
    <div className="flex flex-col">
      <h2 className="text-[28px] font-extrabold">{review.title}</h2>
      <p className="text-gray600 font-medium">
        <span>
          {review.user.name} | {review.user.duration}개월차 꿋프렌즈 |{" "}
          {review.user.job}
        </span>
        {/* <span>{getDateFromTimeStamp(review.createdAt)}</span> */}
      </p>
      <p className="mt-[32px] w-[520px] font-[18px]">
        {review.reviewDescription}
      </p>
    </div>
  );
}
