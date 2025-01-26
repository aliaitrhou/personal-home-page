import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="font-Nunito text-gray-800  dark:text-gray-300 font-bold text-lg ml-2">
        Ali Ait Rahou
      </p>
    </Link>
  );
};

export default Logo;
