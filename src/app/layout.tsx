import { Metadata } from "next";
import "@/styles/globals.css";

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
      <body>{children}</body>
      <script
        defer
        src="https://umi.gokay.works/script.js"
        data-website-id="57f1e17c-9a77-400c-aaf4-1e69414da2b9"
      ></script>
    </html>
  );
}
