import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computer Science | NIS PM Almaty",
  description: "Декада Информатики НИШ ФМН г. Алматы",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen px-8 lg:px-24 py-4")}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
