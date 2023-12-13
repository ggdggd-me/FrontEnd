"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "@/Context/ModalContext";

export default function DownloadModal() {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <>
      {isModalOpen && (
        <section className="fixed w-full h-full top-0 left-0 flex justify-center items-end bg-[rgb(0,0,0)]/60 z-[100]">
          <article className="w-full max-w-[1920px] flex flex-col items-center bg-white gap-[52px] relative animate-[modalOpen_250ms_ease-in]">
            <h2 className="text-[48px] font-bold mt-[94px]">
              지금 바로 <span className="text-blue300">꿋꿋</span>을 다운로드
              해보세요
            </h2>
            <div className="flex text-gray500 gap-[64px] mb-[70px]">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[26px] mb-[26px]">스토어 다운로드</h3>
                <div className="w-[208px] h-[180px] mb-[30px] flex items-center">
                  <Link href={"https://apple.co/3QE04pC"}>
                    <Image
                      src={"/assets/main/download/img-download-link.png"}
                      alt="꿋꿋 다운로드 링크"
                      width={267}
                      height={83}
                    />
                  </Link>
                </div>
                <p>앱스토어에서 꿋꿋을 만나보세요</p>
              </div>
              <div className="w-[2px] h-[322px] bg-gray300"></div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[26px] mb-[24px]">QR코드 다운로드</h3>
                <Image
                  className="px-[14px] py-[15px] bg-blue200 mb-[30px] rounded-xl"
                  src={"/assets/main/download/img-download-QR.png"}
                  alt="꿋꿋 다운로드 QR코드"
                  width={180}
                  height={178}
                />
                <p>스마트폰 카메라로 코드를 스캔하세요</p>
              </div>
            </div>
            <button
              className="absolute top-[36px] right-[360px]"
              onClick={closeModal}
            >
              <Image
                src={"/assets/main/download/img-close.png"}
                alt="모달 닫기"
                width={30}
                height={30}
              />
            </button>
          </article>
        </section>
      )}
    </>
  );
}
