interface Props {
  data: {
    title: string;
    author: string;
    duration: string;
    job: string;
    description: string;
  };
}

export default function ReviewItem({ data }: Props) {
  return (
    <article className="w-[340px] h-[270px] bg-white rounded-[8px] p-[20px] relative">
      <h3 className="text-[16px] text-gray700 font-extrabold">{data.title}</h3>
      <div className="flex text-[12px] gap-[10px] font-semibold text-gray600 mt-[10px]">
        <span className="after:border after:ml-[10px]">{data.author}</span>
        <span className="after:border after:ml-[10px]">{data.duration}</span>
        <span>{data.job}</span>
      </div>
      <p className="mt-[20px]">{data.description}</p>
      <button className="absolute top-[20px] right-[24px] text-[14px] text-gray400">
        더보기 &gt;
      </button>
    </article>
  );
}
