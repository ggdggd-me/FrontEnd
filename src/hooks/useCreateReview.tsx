import { iReview } from "@/interface/interface";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useMutation, useQueryClient } from "react-query";

const createReview = async (review: iReview) => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), review);
    console.log(docRef.id);
  } catch (e) {
    console.log(e);
  }
};

const useCreateReview = (closeModal: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      closeModal();
    },
    onError: error => {
      console.error(error);
    },
  });
};

export default useCreateReview;
