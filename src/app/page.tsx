import SectionMain from "./(components)/SectionMain";
import SectionNotify from "./(components)/SectionNotify";
import SectionSetting from "./(components)/SectionSetting";
import SectionTurnOff from "./(components)/SectionTurnOff";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#ecf3f9] text-[#242D41] min-w-[1024px]">
      <SectionMain />
      <SectionNotify />
      <SectionSetting />
      <SectionTurnOff />
    </main>
  );
}
