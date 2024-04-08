import Link from "next/link";

export default function SectionFaq() {
  return (
    <section className="text-center">
      <h2 className="text-[24px] font-bold mb-[24px]">
        문의하고 싶은 내용이 있나요?
      </h2>
      <Link
        href={"/qna"}
        className="text-[26px] font-semibold rounded-full bg-blue600 text-white py-[30px] px-[140px]"
      >
        1:1 고객문의 바로가기
      </Link>
    </section>
  );
}
