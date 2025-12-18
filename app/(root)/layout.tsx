import Header from "@/components/Pages/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      {/* Header */}
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;
