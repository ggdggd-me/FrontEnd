import Image from "next/image";

export default function SectionTurnOff() {
  return (
    <section className="w-full max-w-[1920px] bg-white flex justify-center">
      <article className="relative flex flex-col items-center">
        <div className="flex w-[560px] mt-[206px] pl-[58px] py-[30px] bg-[#ECF3F9] rounded-[26px] items-center relative left-[200px]">
          <Image
            src={"/assets/main/sectionOff/icn-moon.svg"}
            width={38}
            height={35}
            alt="달 아이콘"
          />
          <span className="ml-[12px] text-[34px] text-[#242D41]/[60%]">
            하루만 알림 끄기
          </span>
          <div className="w-[104px] h-[64px] bg-[#3596FF] rounded-full relative ml-[68px]">
            <div className="w-[55px] h-[55px] bg-white rounded-full absolute top-[50%] translate-y-[-50%] right-[4px]"></div>
          </div>
        </div>
        <div className="bg-[#232323] pt-[70px] pb-[90px] mt-[80px] flex flex-col items-center w-[342px] rounded-xl shadow-[-15px_10px_24px_0px_rgba(36,45,65,0.40)]">
          <Image
            src={"/assets/main/sectionOff/icn-DayOffActive.svg"}
            alt=""
            width={40}
            height={40}
          />
          <p className="text-white text-[20px] font-bold mt-[24px] text-center inline">
            현재 알림이 꺼져 있어요.
            <br />
            다음 날, 핀이 다시 돌아올거에요.
          </p>
        </div>
        <Image
          className="ml-[-60px] mt-[-240px]"
          src={"/assets/main/sectionOff/img-section3-fynn.png"}
          alt=""
          width={657}
          height={699}
        />
      </article>
      <article className="mt-[440px] ml-[12px] mb-[242px] pr-[80px]">
        <h2 className="font-bold text-[42px]">
          집중이 필요할 땐<br />
          잠시 안녕,
          <br />
          <span className="text-[#6199D1]">하루만 알림 끄기</span>
        </h2>
        <p className="mt-[138px] text-[26px]">
          꿋프렌즈 분들이 집중하는 시간을 방해하지 않도록
          <br />
          바른자세 알림을 하루동안 쉴 수 있는 기능이 있어요.
        </p>
        <p className="mt-[32px] text-[26px]">
          각자의 자리에서 열심히 살아가는 꿋프렌즈 분들을 위한
          <br />
          바른자세 요정 핀의 작은 배려, 귀엽게 봐주세요.
        </p>
      </article>
    </section>
  );
}
