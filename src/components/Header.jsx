
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center p-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Eventry"
              width={135}
              height={135} />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <Link href={"/login"}>Login</Link>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;