import React from "react";
import { ModalProvider } from "@/Context/ModalContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
