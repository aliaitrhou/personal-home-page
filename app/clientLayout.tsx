"use client";

import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main>
      <Navbar url={pathname} />
      {children}
    </main>
  );
}
