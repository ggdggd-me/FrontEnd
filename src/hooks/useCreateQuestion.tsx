import { iQnaQuestion } from "@/interface/interface";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useMutation, useQueryClient } from "react-query";

const createQuestion = async (question: iQnaQuestion) => {
  try {
    const docRef = await addDoc(collection(db, "questions"), question);
    console.log(docRef.id);
  } catch (e) {
    console.log(e);
  }
};

const useCreateQuestion = (router: any) => {
  const queryClient = useQueryClient();

  return useMutation(createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
      router.push("/qna");
    },
    onError: error => {
      console.error(error);
    },
  });
};

export default useCreateQuestion;
