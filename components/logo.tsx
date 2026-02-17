import { lexend } from "@/app/fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1
        className={`${lexend.className} text-gray-800  dark:text-gray-300 font-semibold text-lg`}
      >
        Ali Ait Rahou
      </h1>
    </Link>
  );
};

export default Logo;
