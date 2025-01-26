import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: "Ali Aitrahou - Website",
  description: "My personal home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-3xl font-Nunito mx-auto pt-14 bg-black text-white border-2 border-blue-500">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
