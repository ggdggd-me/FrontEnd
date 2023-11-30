import Image from "next/image";
import Link from "next/link";

export default function Gnb() {
  return (
    <nav className="w-full max-w-[1920px] px-4 py-2 flex justify-between text-white">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/header/icn-ggdggd-main.svg"}
          width={36}
          height={36}
          alt="꿋꿋 로고"
        />
        <span className="text-xl font-extrabold">꿋꿋</span>
      </Link>
      <ul className="flex gap-8 items-center">
        <li>
          <Link href={"/"}>맞춤 모니터 높이 찾기</Link>
        </li>
        <li>
          <Link href={"/"}>공지사항</Link>
        </li>
        <li>
          <Link href={"/"}>문의하기</Link>
        </li>
        <li>
          <Link href={"/"}>팀 소개</Link>
        </li>
        <li>
          <button className="text-white bg-[#242D41] px-5 py-2 rounded-full hover:bg-[#61697A]">
            앱 다운로드
          </button>
        </li>
      </ul>
    </nav>
  );
}
