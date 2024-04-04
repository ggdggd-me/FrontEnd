import { iQnaQuestion } from "@/interface/interface";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "react-query";

const getInqueries = async () => {
  const questionSnap = await getDocs(collection(db, "questions"));

  const questions: iQnaQuestion[] = [];

  questionSnap.forEach(question => {
    const questionData = question.data();
    const data = {
      email: questionData.email,
      title: questionData.title,
      questionDescription: questionData.questionDescription,
      consertPersonalInfo: questionData.consertPersonalInfo,
      createdAt: questionData.createdAt,
      modifiedAt: questionData.modifiedAt,
    };

    questions.push(data);
  });

  return questions;
};

const useGetQnaQuestions = () => {
  return useQuery(["questions"], async () => await getInqueries(), {
    refetchOnWindowFocus: false,
  });
};

export default useGetQnaQuestions;
