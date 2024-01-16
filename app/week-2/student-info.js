import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1 className="text-green-200 font-bold">Ko Kawaguchi</h1>
      <div>
        <Link href="https://github.com/kokawaguchi">https://github.com</Link>
      </div>
    </main>
  );
}
