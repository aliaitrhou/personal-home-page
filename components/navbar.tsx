import React from "react";
import Logo from "./logo";
import LinkBox from "./linkbox";
import { CiMenuFries } from "react-icons/ci";

interface NavProps {
  url: string;
  classNames?: string;
}

const Navbar: React.FC<NavProps> = ({ url, classNames }) => {
  return (
    // TODO: change the bg leter:
    <nav
      className={`fixed top-0 left-0 right-0 z-2 w-full bg-[#fffff40] dark:bg-[#20202380]  backdrop-blur-sm ${classNames}`}
    >
      <div className="flex p-2 max-w-4xl flex-wrap mx-auto justify-between">
        <div className="flex items-center mr-5">
          <h1 className="tracking-tight px-2">
            <Logo />
          </h1>
        </div>
        <ul className="hidden flex-grow md:flex flex-col md:flex-row w-full md:w-auto items-center mt-4 md:mt-0">
          <LinkBox url={url} href="/work">
            work
          </LinkBox>
          <LinkBox url={url} href="/certificat">
            certificates
          </LinkBox>
          <LinkBox url={url} href="/contact">
            contact
          </LinkBox>
        </ul>
        <div className="flex-1 text-right">
          <div className="ml-2 inline-block md:hidden">
            <div className="relative">
              <button
                className="p-2 border rounded-md focus:outline-none focus:ring"
                aria-label="Options"
              >
                <CiMenuFries />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
