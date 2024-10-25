import { Search } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex flex-row justify-between items-center px-4 lg:px-72 py-4 bg-blue-500 text-white">
      <Link href="/">
        <h1 className="font-bold text-3xl">webinfo</h1>
      </Link>
      <div className="flex gap-6 font-semibold">
        <Link href="/sobre-nos">
          <p>Sobre nós</p>
        </Link>
        <Search />
      </div>
    </nav>
  );
}

export default Header;
