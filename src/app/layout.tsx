import "./globals.css";
import Provider from "./Provider";
import localFont from "next/font/local";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import DownloadModal from "./(components)/DownloadModal";
import type { Metadata } from "next";

export const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "꿋꿋",
  description: "IT 현대인들의 초간단 바른자세 알리미",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={Pretendard.className}>
        <Provider>
          <Header />
          {children}
          <DownloadModal />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
