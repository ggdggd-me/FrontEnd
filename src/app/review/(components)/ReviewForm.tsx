"use client";

import ModalWrapper from "@/components/ModalWrapper";
import useCreateReview from "@/hooks/useCreateReview";
import { iReview } from "@/interface/interface";
import { ChangeEvent, useState } from "react";

interface Props {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = "flex flex-col gap-[8px]";
const inputStyle = "py-[8px] border border-[#ececec] rounded-[8px]";

export default function ReviewForm({ setModalState }: Props) {
  const [review, setReview] = useState<iReview>({
    title: "",
    user: {
      name: "",
      duration: 0,
      job: "",
    },
    reviewDescription: "",
  });

  const closeModal = () => {
    setModalState(false);
  };

  const { mutate, isLoading } = useCreateReview(closeModal);

  const onFormChange = (e: ChangeEvent) => {
    const reviewKey = e.target.id;
    const reviewName = (e.target as HTMLInputElement).name;
    const reviewValue = (e.target as HTMLInputElement).value;

    setReview((prev: iReview) => {
      return {
        ...prev,
        [reviewKey]: reviewName
          ? { ...prev.user, [reviewName]: reviewValue }
          : reviewValue,
      };
    });
  };

  const onSubmit = () => {
    mutate(review);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <ModalWrapper closeModal={closeModal}>
          <form className="text-black flex flex-col gap-[28px]">
            <div>
              <h2 className="text-[28px] font-extrabold">
                꿋꿋을 사용하며 느낀 점들을
                <br />
                자유롭게 남겨주세요
              </h2>
              <p className="text-gray600 font-medium">
                귀여운 핀의 매력에 빠져들었나요? 꿋꿋을 사용하면서 느낀점을
                적어주세요!
              </p>
            </div>

            <div className={style}>
              <label className="text-[20px] font-bold" htmlFor="title">
                제목
              </label>
              <input
                className={`w-[712px] pl-[12px] ${inputStyle}`}
                type="text"
                id="title"
                placeholder="제목을 입력해주세요."
                onChange={onFormChange}
              />
            </div>

            <div className={style}>
              <label className="text-[20px] font-bold" htmlFor="user">
                작성자
              </label>
              <div className="flex gap-[8px] grow-0">
                <input
                  className={`w-[180px] pl-[12px] ${inputStyle}`}
                  type="text"
                  id="user"
                  name="name"
                  placeholder="닉네임"
                  onChange={onFormChange}
                />
                <input
                  className={`w-[180px] pl-[12px] pr-[8px] ${inputStyle}`}
                  type="number"
                  min="0"
                  id="user"
                  name="duration"
                  placeholder="서비스 이용 개월 수"
                  onChange={onFormChange}
                />
                <select
                  className={`w-[180px] px-[12px] ${inputStyle}`}
                  id="user"
                  name="job"
                  onChange={onFormChange}
                >
                  <option value={"직장인"}>직장인</option>
                  <option value={"자영업"}>자영업</option>
                  <option value={"학생"}>학생</option>
                  <option value={"주부"}>주부</option>
                  <option value={"기타"}>기타</option>
                </select>
              </div>
            </div>

            <div className={style}>
              <label
                className="text-[20px] font-bold"
                htmlFor="reviewDescription"
              >
                자유롭게 후기를 남겨주세요.
              </label>
              <textarea
                className={`p-[12px] ${inputStyle}`}
                id="reviewDescription"
                cols={30}
                rows={4}
                placeholder="후기를 입력해주세요."
                onChange={onFormChange}
              ></textarea>
            </div>

            <button
              className="bg-blue600 text-white px-[24px] py-[8px] rounded-full mx-auto text-[16px] font-semibold"
              onClick={onSubmit}
            >
              작성 완료
            </button>
          </form>
        </ModalWrapper>
      )}
    </>
  );
}
