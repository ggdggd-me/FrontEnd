import Image from "next/image";
import Link from "next/link";

const SOURCE = [
  {
    id: "인스타그램",
    imgSrc: "/assets/footer/icn-instagram.svg",
    link: "https://www.instagram.com/ggood_ggood_/",
  },
  {
    id: "깃허브",
    imgSrc: "/assets/footer/icn-github.svg",
    link: "https://github.com/DeveloperAcademy-POSTECH/MC3-Team10-CenterWatch",
  },
  {
    id: "애플디벨로퍼아카데미",
    imgSrc: "/assets/footer/icn-apple.svg",
    link: "https://developeracademy.postech.ac.kr/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] flex justify-center">
      <div className="w-full max-w-[1920px] pt-[20px] pl-[50px] pb-[68px] text-[#dddddd]">
        <Image
          src={"/assets/footer/icn-ggdggd-footer.svg"}
          alt="꿋꿋 푸터 이미지"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-[24px] ml-[10px] mt-[12px]">
          <ul className="flex gap-[12px]">
            <li>
              <Link href={"/review"}>문의하기 ↗</Link>
            </li>
            <li>
              <Link
                href={
                  "https://github.com/DeveloperAcademy-POSTECH/MC3-Team10-CenterWatch"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                팀소개 ↗
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://lateral-donkey-cf6.notion.site/f0ab47f2691a4a85b978999174b0a4b6?pvs=4"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                개인정보처리방침 ↗
              </Link>
            </li>
          </ul>
          <p>
            CDD (Chuckchu Driven Development)
            <br />
            Apple Developer Academy @ POSTECH
          </p>
          <p>© 2023 Watchda Team. All rights reserved.</p>
        </div>
        <ul className="flex gap-[4px] mt-[24px] ml-[4px]">
          {SOURCE.map(key => {
            return (
              <li
                className="w-[36px] h-[36px] rounded-full bg-[#6B7684]/[70%] hover:bg-[#6B7684]"
                key={key.id}
              >
                <Link href={key.link} rel="noopener noreferrer" target="_blank">
                  <Image src={key.imgSrc} width={36} height={36} alt={key.id} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
