import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Minimalist portfolio for a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
