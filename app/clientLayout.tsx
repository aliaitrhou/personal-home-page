"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { ImSpinner9 } from "react-icons/im";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main>
      <Navbar url={pathname} />
      <Suspense fallback={<ImSpinner9 className="animate-spin mx-auto" />}>
        {children}
      </Suspense>
      <Footer />
    </main>
  );
}
