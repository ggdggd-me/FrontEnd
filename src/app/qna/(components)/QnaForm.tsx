"use client";

import useCreateQuestion from "@/hooks/useCreateQuestion";
import { iQnaQuestion } from "@/interface/interface";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const boxStyle = "flex flex-col gap-[8px]";
const labelStyle = "text-[20px] font-bold";
const inputStyle =
  "text-[16px] pl-[12px] py-[8px] rounded-[8px] border border-gray400";

export default function QnaForm() {
  const [qna, setQna] = useState<iQnaQuestion>({
    email: "",
    title: "",
    questionDescription: "",
    consertPersonalInfo: false,
    receiveAnswerByEmail: false,
    createdAt: Timestamp.now(),
    modifiedAt: Timestamp.now(),
  });
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const domainRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { mutate, isLoading } = useCreateQuestion(router);

  useEffect(() => {
    setQna((prev: iQnaQuestion) => {
      return {
        ...prev,
        email: email + "@" + domain,
      };
    });
  }, [email, domain]);

  const onSubmit = () => {
    mutate(qna);
  };

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setQna((prev: iQnaQuestion) => {
      return {
        ...prev,
        [target.id]: target.checked ? target.checked : target.value,
      };
    });
  };

  const onEmailChange = (e: ChangeEvent) => {
    const selectedTarget = e.target as HTMLSelectElement;
    setEmail(selectedTarget.value);
  };

  const onDomainChange = (e: ChangeEvent) => {
    const selectedTarget = e.target as HTMLSelectElement;
    if (domainRef.current) {
      if (selectedTarget.value.includes(".")) {
        domainRef.current.value = selectedTarget.value;
        domainRef.current.disabled = true;
        setDomain(selectedTarget.value);
      } else {
        domainRef.current.value = "";
        domainRef.current.disabled = false;
        setDomain((e.target as HTMLInputElement).value);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="flex justify-center items-center">
          <form className="flex flex-col bg-gray-100 p-[40px] gap-[48px] rounded-[8px]">
            <div>
              <h2 className="font-extrabold text-[42px]">QnA</h2>
              <p className="text-[#767676]">
                척추요정 핀에게 바라는 점을 적어주세요!
              </p>
            </div>

            <div className={`${boxStyle}`}>
              <label htmlFor="email" className={labelStyle}>
                답변 이메일
              </label>
              <div className="flex items-center gap-[8px]">
                <input
                  type="text"
                  id="email"
                  placeholder="이메일 입력하기"
                  className={inputStyle}
                  onChange={onEmailChange}
                />
                <span>@</span>
                <input
                  type="text"
                  id="domain"
                  className={inputStyle}
                  ref={domainRef}
                  onChange={onDomainChange}
                />
                <select
                  className={`${inputStyle} w-[200px]`}
                  onChange={onDomainChange}
                >
                  <option defaultValue="" value="">
                    선택
                  </option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="etc">직접 입력</option>
                </select>
                <div className="flex ml-[32px] gap-[16px]">
                  <label htmlFor="receiveAnswerByEmail" className={labelStyle}>
                    이메일로 답변받기
                  </label>
                  <input
                    type="checkbox"
                    id="receiveAnswerByEmail"
                    name="receiveAnswerByEmail"
                    className="order-first"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <div className={boxStyle}>
              <label htmlFor="title" className={labelStyle}>
                문의제목
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={`${inputStyle} w-[620px]`}
                placeholder="제목을 입력해주세요"
                onChange={onChange}
              />
            </div>

            <div className={boxStyle}>
              <label htmlFor="questionDescription" className={labelStyle}>
                문의내용
              </label>
              <textarea
                name="questionDescription"
                id="questionDescription"
                cols={30}
                rows={5}
                className="p-[20px] w-[1060px] rounded-[8px] border border-gray400"
                onChange={onChange}
              />
            </div>

            <div>
              <div className="flex gap-[16px]">
                <label htmlFor="consertPersonalInfo" className={labelStyle}>
                  개인정보 동의
                </label>
                <input
                  className="order-first"
                  type="checkbox"
                  id="consertPersonalInfo"
                  onChange={onChange}
                />
              </div>
              <p className="text-medium text-gray400">
                위와 같이 개인정보를 제공하는데 동의를 거부할 권리가 있습니다.{" "}
                <br />
                그러나 동의를 거부할 경우 일부 서비스를 제한 받으실 수 없습니다.{" "}
                <br />
                위와 같이 개인정보를 제공하는데 동의하십니까?
              </p>
            </div>

            <button
              className="px-[34px] py-[8px] bg-blue600 rounded-[4px] text-white ml-auto font-semibold"
              onClick={onSubmit}
            >
              제출 완료
            </button>
          </form>
        </div>
      )}
    </>
  );
}
