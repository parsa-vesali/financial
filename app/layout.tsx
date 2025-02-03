import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای ارز و سکه | بازار مالی",
  description: "آخرین قیمت‌های لحظه‌ای ارز، سکه و طلا را در اینجا مشاهده کنید. بهترین منابع برای پیگیری بازار مالی."
};


import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-Dana bg-background text-foreground antialiased max-w-full overflow-x-hidden",)}
      >
          {children}
      </body>
    </html>
  );
}
