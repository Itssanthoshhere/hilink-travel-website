import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="relative z-30 py-5 flexBetween max-container padding-container">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        type="button"
        aria-label="Open navigation menu"
        className="inline-block lg:hidden"
      >
        <Image
          src="/menu.svg"
          alt=""
          width={32}
          height={32}
          aria-hidden="true"
          className="cursor-pointer"
        />
      </button>
    </nav>
  );
};

export default Navbar;
