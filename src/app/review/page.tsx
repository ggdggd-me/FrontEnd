import SectionReview from "./(components)/SectionReview";
import SectionFaq from "./(components)/SectionFaq";

export default function Review() {
  return (
    <main className="w-full mx-auto max-w-[1920px] bg-[url('/assets/review/bg-review.jpg')] bg-center flex flex-col justify-center items-center gap-[100px] bg-fixed py-[140px]">
      <SectionFaq />
      <SectionReview />
    </main>
  );
}
