import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Todo Creator App</h1>
      <p className="mt-4 text-gray-600">
        Create and organize your todo list easily.
      </p>
      <div className="mt-8">
        <Link
          href="/todos"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
