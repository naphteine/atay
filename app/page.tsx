import Link from "next/link";
import Logo from "@/app/components/Logo";

export default function Home() {
  return (
    <>
      <header></header>

      <main className="flex h-screen flex-col">
        <div className="m-auto">
          <Logo className="dark:fill-white" />
          <p>Under development. Please check later.</p>
          <p>
            by{" "}
            <Link className="underline" href="https://gokay.works">
              gokay.works
            </Link>
            {" | "}
            <Link
              className="underline"
              href="https://github.com/naphteine/cyperus"
            >
              Source code
            </Link>
          </p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
