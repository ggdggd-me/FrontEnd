"use client";

import React, { useState } from "react";
import ModalWrapper from "@/components/ModalWrapper";
import { iQnaQuestion } from "../../../interface/interface";
import getDateFromTimeStamp from "@/utils/getDateFromTimeStamp";

interface Props {
  question: iQnaQuestion;
}

export default function QnaItem({ question }: Props) {
  const [modal, setModal] = useState(false);

  const changeModalState = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <article
        onClick={changeModalState}
        className="px-[40px] py-[20px] bg-blue-100"
      >
        <div className="border-b border-black flex justify-between text-[28px]">
          <span>{question.title}</span>
          <span>{getDateFromTimeStamp(question.createdAt)}</span>
        </div>
      </article>
      {modal && (
        <ModalWrapper closeModal={changeModalState}>
          <div>
            <h2>{question.title}</h2>
            <p>{question.questionDescription}</p>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
