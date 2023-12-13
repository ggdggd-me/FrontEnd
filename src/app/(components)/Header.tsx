import Gnb from "./Gnb";

export default function Header() {
  return (
    <header className="bg-black/[.16] flex justify-center fixed left-[50%] translate-x-[-50%] w-full z-[9999]">
      <Gnb />
    </header>
  );
}
