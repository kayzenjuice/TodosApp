import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-gray-800">
      <div className="text-white text-xl font-semibold">
        <Link href="/">Todo Creator</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
