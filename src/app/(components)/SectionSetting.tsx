import Image from "next/image";

export default function SectionSetting() {
  return (
    <section className="w-full max-w-[1920px] flex justify-center">
      <article className="mt-[186px] ml-[160px] mb-[280px]">
        <h2 className="font-bold text-[42px]">
          일하는 시간 동안
          <br />
          바른자세 유지할 수 있게
          <br />
          <span className="text-[#6199D1]">맞춤 알림 설정</span>
        </h2>
        <p className="mt-[138px] text-[26px]">
          핀은 꿋프렌즈들의 스마트폰에 입주한 거북이에요.
          <br />
          항상 바쁘게 키보드를 치는 것은 꿋프렌즈들에게 보낼
          <br />
          바른자세 알림 메시지를 작성하고 있기 때문!
        </p>
        <p className="mt-[32px] text-[26px]">
          거북이는 말을 할 수 없기에 의사소통을 위해 키보드를
          <br />
          두드리게 되었다는 숨은 이야기가 있어요.
        </p>
      </article>
      <article className="mt-[132px] ml-[60px]">
        <Image
          src={"/assets/main/sectionSet/img-section2-table.png"}
          width={424}
          height={363}
          alt=""
        />
        <Image
          className="mt-[-176px] ml-[-60px]"
          src={"/assets/main/sectionSet/img-section2-fynn.png"}
          width={693}
          height={793}
          alt=""
        />
      </article>
    </section>
  );
}
