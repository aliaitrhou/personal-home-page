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
      <body className="selection:bg-orange-500/40 dark:selection:bg-NeonLime-600/45 dark:selection:text-black max-w-3xl font-Nunito mx-auto pt-14 bg-amber-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
        <ClientLayout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
