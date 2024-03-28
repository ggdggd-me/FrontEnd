import { iReview } from "@/interface/interface";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "react-query";

const getReviews = async () => {
  const reviewSnap = await getDocs(collection(db, "reviews"));

  const reviews: iReview[] = [];

  reviewSnap.forEach(review => {
    const reviewData = review.data();
    const data = {
      title: reviewData.title,
      user: {
        name: reviewData.user.name,
        duration: reviewData.user.duration,
        job: reviewData.user.job,
      },
      reviewDescription: reviewData.reviewDescription,
    };

    reviews.push(data);
  });

  return reviews;
};

const useGetReviews = () => {
  return useQuery(["reviews"], async () => await getReviews(), {
    refetchOnWindowFocus: false,
  });
};

export default useGetReviews;
