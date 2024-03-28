"use client";

import React from "react";
import { ModalProvider } from "@/Context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
    </QueryClientProvider>
  );
}
