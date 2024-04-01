"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}
export default function ModalWrapper({ children, closeModal }: Props) {
  const [startOutside, setStartOutside] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setStartOutside(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && startOutside) {
      closeModal();
    }
    setStartOutside(false);
  };

  return (
    <section
      className="fixed w-full h-full top-0 left-0 flex justify-center items-center bg-[rgb(0,0,0)]/60 z-[101]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="bg-white p-[32px] rounded-[8px]">
        <button onClick={closeModal} className="float-right">
          <Image
            src={"/assets/main/download/img-close.png"}
            alt="닫기버튼"
            width={30}
            height={30}
          />
        </button>
        {children}
      </div>
    </section>
  );
}
