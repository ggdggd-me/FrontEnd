import Image from "next/image";

export default function SectionNotify() {
  return (
    <section className="w-full max-w-[1920px] bg-white flex justify-center">
      <Image
        className=" mb-[152px] mt-[112px]"
        src={"/assets/main/sectionNoti/img-section1.png"}
        alt="예시 알림 이미지"
        width={600}
        height={936}
      />
      <article className="mt-[260px] ml-[8px] pr-[80px]">
        <h2 className="font-bold text-[42px]">
          꿋프렌즈를 위해
          <br />
          거북이 요정 ‘핀<sup>Fynn</sup>’이 전하는
          <br />
          정성 담긴 <span className="text-[#6199D1]">바른자세 알림</span>
        </h2>
        <div>
          <p className="mt-[138px] text-[26px]">
            핀은 꿋프렌즈들의 스마트폰에 입주한 거북이에요.
            <br />
            항상 바쁘게 키보드를 치는 것은 꿋프렌즈들에게 보낼
            <br />
            바른자세 알림 메시지를 작성하고 있기 때문!
          </p>
          <p className="mt-[32px] text-[26px]">
            이 동그랗고 귀여운 거북이가 당신을 위해 보내주는
            <br />
            진심 담긴 알림, 단순히 귀찮다고만 생각할 수 있을까요?
          </p>
        </div>
      </article>
    </section>
  );
}
