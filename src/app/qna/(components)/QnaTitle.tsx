import React from "react";
import Image from "next/image";

export default function QnaTitle() {
  return (
    <div className="flex items-center justify-around gap-[120px] ml-[120px]">
      <div>
        <h2 className="text-[28px] font-medium mb-[16px]">
          꿋프렌즈들이 남겨주신
          <br />
          <span className="font-extrabold">’바른자세’로 함께하는 길!</span>
        </h2>
        <p className="text-gray600 font-medium">
          척추요정 핀에게 바라는 점을 남겨주세요!
        </p>
      </div>
      <Image
        src={"/assets/qna/img-qna-fynn.png"}
        alt="키보드 치고 있는 핀"
        width={500}
        height={500}
      />
    </div>
  );
}
