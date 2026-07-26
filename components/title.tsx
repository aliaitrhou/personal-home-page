import { lexend } from "@/app/fonts";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

interface Props {
  children: React.ReactNode;
  year: string;
}

export const Title = ({ children, year }: Props) => (
  <div className={`flex items-center gap-1 font-light text-[13px]`}>
    <span>
      <CgChevronRight />{" "}
    </span>
    <Link
      href="/projects"
      className="font-medium text-orange-500 dark:text-NeonLime-500 hover:underline underline-offset-2  underline-orange-500 dark:underline-NeonLime-500 font-light mb-[0.3px]"
    >
      Projects
    </Link>
    <span>
      <CgChevronRight />{" "}
    </span>
    <h3 className="inline-block mb-[0.3px]">{children}</h3>
    <span className="ml-2 font-light text-xs px-1 rounded-sm bg-neutral-700/20 dark:bg-neutral-500/30">
      {year}
    </span>
  </div>
);
