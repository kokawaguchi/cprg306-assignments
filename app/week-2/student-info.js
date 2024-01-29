import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1 className="font-bold text-xl">Ko Kawaguchi</h1>
      <div>
        <Link href="https://github.com/kokawaguchi">https://github.com</Link>
      </div>
    </main>
  );
}
