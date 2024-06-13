
import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Header = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center p-4">
        <div className="nav-brand">
          <Link href="/">
            {/* <Image
              src="/images/logo.svg"
              alt="Eventry"
              width={135}
              height={135} /> */}
            <p className="text-3xl font-bold text-blue-500">Eventry</p>
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <SignInOut />
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;