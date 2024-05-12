"use client";

import React from "react";
import QnaItem from "./QnaItem";
import useGetQnaQuestions from "@/hooks/useGetQnaQuestions";
import { iQnaQuestion } from "@/interface/interface";

export default function QnaList() {
  const { isLoading, data } = useGetQnaQuestions();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="w-[1060px] flex flex-wrap gap-[20px] bg-white p-[40px] mt-[-120px]">
          {data?.map((question: iQnaQuestion, index) => (
            <li key={index} className="w-full">
              <QnaItem question={question} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
