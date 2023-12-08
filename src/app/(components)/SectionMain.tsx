"use client";

import Image from "next/image";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

export default function SectionMain() {
  const [modalState, setModalState] = useState(false);

  const openDownloadModal = () => {
    setModalState(true);
  };

  return (
    <section className="w-full max-w-[1920px] h-[1080px] bg-[url('/assets/main/home/bg-main.jpg')] bg-no-repeat relative">
      <article className="flex justify-center items-start">
        <Image
          className="mt-[380px] z-50"
          src={"/assets/main/home/icn-fynn.svg"}
          alt=""
          width={540}
          height={540}
        />
        <Image
          className="ml-[-400px] mt-[12px]"
          src={"/assets/main/home/img-mockup.png"}
          alt=""
          width={900}
          height={900}
        />
      </article>
      <button
        className="absolute py-[28px] px-[55px] text-[26px] text-white bg-[#242D41] hover:bg-[#61697A] left-2/4 translate-x-[-50%] bottom-[64px] rounded-full"
        onClick={openDownloadModal}
      >
        당신을 위한 ‘바른자세 요정’ 만나기 →
      </button>
      {modalState && <DownloadModal setModalState={setModalState} />}
    </section>
  );
}
