"use client";

import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function ReviewRegister() {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  return (
    <article className="w-[340px] h-[270px] bg-blue600 text-white relative rounded-[8px]">
      <h3 className="text-[32px] pl-[26px] pt-[26px] font-extrabold">
        꿋꿋을 사용하며
        <br />
        느낀 점들을
        <br />
        자유롭게 남겨주세요
      </h3>
      <button
        className="w-[96px] h-[28px] absolute bottom-[16px] right-[16px] bg-blue500 text-[12px] rounded-[4px] font-semibold"
        onClick={openModal}
      >
        꿋꿋 후기 쓰기 →
      </button>
      {modalState && <ReviewForm setModalState={setModalState} />}
    </article>
  );
}
