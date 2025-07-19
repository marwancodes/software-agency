import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Nav/ResponsiveNav";
import Provider from "@/components/HOC/Provider";

const font = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});



export const metadata: Metadata = {
  title: "Software Agency",
  description: "Software Agency Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
