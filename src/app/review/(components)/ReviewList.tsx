"use client";

import useGetReviews from "@/hooks/useGetReviews";
import ReviewItem from "./ReviewItem";
import ReviewRegister from "./ReviewRegister";
import { mockup } from "./mockupdata";

export default function ReviewList() {
  const { data } = useGetReviews();

  return (
    <ul className="w-[1060px] flex flex-wrap gap-[20px]">
      <li>
        <ReviewRegister />
      </li>
      {data?.map((data, index) => (
        <li key={index}>
          <ReviewItem data={data} />
        </li>
      ))}
    </ul>
  );
}
