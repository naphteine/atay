import { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Atay",
  description: "Book Tracking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
