import React from "react";
import SectionFaq from "./(components)/SectionFaq";
import QnaTitle from "./(components)/QnaTitle";
import QnaList from "./(components)/QnaList";

export default function Qna() {
  return (
    <main className="w-full mx-auto max-w-[1920px] bg-[url('/assets/review/bg-review.jpg')] bg-center flex flex-col justify-center items-center bg-fixed py-[140px]">
      <SectionFaq />
      <QnaTitle />
      <QnaList />
    </main>
  );
}
