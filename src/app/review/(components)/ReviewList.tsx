import ReviewItem from "./ReviewItem";
import ReviewRegister from "./ReviewRegister";
import { mockup } from "./mockupdata";

export default function ReviewList() {
  return (
    <ul className="w-[1060px] flex flex-wrap gap-[20px]">
      <li>
        <ReviewRegister />
      </li>
      {mockup.map((data, index) => (
        <li key={index}>
          <ReviewItem data={data} />
        </li>
      ))}
    </ul>
  );
}
