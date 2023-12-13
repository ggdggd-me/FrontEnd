import Image from "next/image";
import ReviewList from "./ReviewList";
import ReviewTitle from "./ReviewTitle";
import ReviewButton from "./ReviewButton";

export default function SectionReview() {
  return (
    <section className="w-[1060px] flex flex-wrap justify-between">
      <ReviewTitle />
      <Image
        src={"/assets/review/img-review-fynn.png"}
        alt="손 흔들고 있는 핀"
        width={350}
        height={220}
      />
      <ReviewList />
      <ReviewButton />
    </section>
  );
}
