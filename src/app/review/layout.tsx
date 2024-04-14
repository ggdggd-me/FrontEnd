import React from "react";

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full mx-auto max-w-[1920px] bg-[url('/assets/review/bg-review.jpg')] bg-center flex flex-col justify-center items-center bg-fixed py-[140px]">
      {children}
    </main>
  );
}
