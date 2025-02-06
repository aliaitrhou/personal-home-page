import React from "react";
import Logo from "./logo";
import LinkBox from "./linkbox";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobileMenu";

interface NavProps {
  url: string;
  classNames?: string;
}

const Navbar: React.FC<NavProps> = ({ url, classNames }) => {
  return (
    // TODO: change the bg leter:
    <nav
      className={`fixed top-0 left-0 right-0 z-20 w-full bg-[#ffffff40] dark:bg-[#20202380] backdrop-blur-sm ${classNames}`}
    >
      <div className="relative flex p-2 max-w-4xl flex-wrap mx-auto justify-between">
        <div className="flex items-center mr-5">
          <h1 className="tracking-tight px-2">
            <Logo />
          </h1>
        </div>
        <ul className="hidden flex-grow sm:flex flex-col sm:flex-row w-full sm:w-auto items-center mt-4 sm:mt-0">
          <LinkBox url={url} href="/projects">
            Projects
          </LinkBox>
          <LinkBox url={url} href="/certificates">
            Certificates
          </LinkBox>
          <LinkBox url={url} href="/contact">
            Contact
          </LinkBox>
        </ul>
        <div className="flex-1 text-end self-center">
          <ToggleTheme />
          <div className="ml-2 inline-block sm:hidden">
            <MobileMenu path={url} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
