import { iQnaQuestion } from "@/interface/interface";
import React from "react";
import getDateFromTimeStamp from "@/utils/getDateFromTimeStamp";

interface Props {
  question: iQnaQuestion;
}

export default function QnaItemDetail({ question }: Props) {
  return (
    <div className="flex flex-col gap-[48px]">
      <div className="flex flex-col">
        <h2 className="text-[28px] font-extrabold">{question.title}</h2>
        <p className="text-gray600 font-medium">
          <span>{question.email} / </span>
          <span>{getDateFromTimeStamp(question.createdAt)}</span>
        </p>
        <p className="mt-[32px] w-[712px]">{question.questionDescription}</p>
      </div>
      <div>
        <h2 className="text-[28px] font-extrabold">문의 답변</h2>
        <p className="text-gray600 font-medium">
          답변 내용이 아직 준비되지 않았어요.
        </p>
      </div>
    </div>
  );
}
