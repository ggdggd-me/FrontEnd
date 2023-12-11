import Image from "next/image";

interface Props {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = "text-[26px] flex flex-col gap-[16px]";
const inputStyle = "py-[6px] border border-[#A1A1A1] rounded-[8px]";

export default function ReviewForm({ setModalState }: Props) {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <section className="fixed w-full h-full top-0 left-0 flex justify-center items-center bg-[rgb(0,0,0)]/60 z-[100]">
      <div className="bg-white p-[40px] rounded-[8px]">
        <button onClick={closeModal}>
          <Image
            src={"/assets/main/download/img-close.png"}
            alt="닫기버튼"
            width={30}
            height={30}
            className="mb-[42px]"
          />
        </button>
        <form className="text-black flex flex-col gap-[28px]">
          <div>
            <h2 className="text-[28px] font-extrabold mb-[16px]">
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
            <label className="text-[24px] font-bold" htmlFor="reviewTitle">
              제목
            </label>
            <input
              className={` w-[1012px] pl-[16px] ${inputStyle}`}
              type="text"
              id="reviewTitle"
              placeholder="제목을 입력해주세요."
            />
          </div>

          <div className={style}>
            <label className="text-[24px] font-bold" htmlFor="reviewAuthor">
              작성자
            </label>
            <div className="flex gap-[24px] ">
              <input
                className={`w-[230px] pl-[16px] ${inputStyle}`}
                type="text"
                id="reviewAuthor"
                placeholder="닉네임"
              />
              <input
                className={`w-[380px] pl-[16px] ${inputStyle}`}
                type="number"
                min="0"
                id="reviewAuthor"
                placeholder="서비스 이용 개월 수"
              />
              <input
                className={`w-[230px] pl-[16px] ${inputStyle}`}
                type="select"
                id="reviewAuthor"
                placeholder="직업"
              />
            </div>
          </div>

          <div className={style}>
            <label
              className="text-[24px] font-bold"
              htmlFor="reviewDescription"
            >
              자유롭게 후기를 남겨주세요.
            </label>
            <textarea
              className={`p-[16px] ${inputStyle}`}
              id="reviewDescription"
              cols={30}
              rows={5}
              placeholder="후기를 입력해주세요."
            ></textarea>
          </div>

          <button className="bg-blue600 text-white px-[30px] py-[16px] rounded-full mx-auto text-[24px] font-semibold">
            작성 완료
          </button>
        </form>
      </div>
    </section>
  );
}
