import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12">
        {children}
      </div>
      <Footer />
    </main>
  );
}
