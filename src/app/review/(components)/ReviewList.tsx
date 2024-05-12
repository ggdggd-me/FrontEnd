"use client";

import useGetReviews from "@/hooks/useGetReviews";
import ReviewItem from "./ReviewItem";
import ReviewRegister from "./ReviewRegister";

export default function ReviewList() {
  const { isLoading, data } = useGetReviews();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </>
  );
}
