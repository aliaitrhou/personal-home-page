import ContentBox from "@/components/content-box";
import Link from "next/link";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import terminal from "@/public/imgs/projects/shell_agent/shell_agent_terminal.png";
import overview from "@/public/imgs/projects/shell_agent/overview.png";
import user_guide from "@/public/imgs/projects/shell_agent/user-guide.png";
import { saira } from "@/app/fonts";

const ShellAgent = () => {
  return (
    <div className="space-y-6 md:space-y-8 text-sm font-thin">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            I built this app during a time when I was struggling to remember
            terminal commands. A friend once shared a simple .txt file full of
            command explanations which is helpful but static. That got me
            thinking: what if instead of reading a file, I could talk to it?
            That thought sparked the idea for this AI-powered assistant.
          </p>
          <Image
            alt="shell agent terminal"
            className="my-4 rounded-lg border-4  border-zinc-700 dark:border-zinc-900"
            src={terminal}
          />
          <p className="text-justify">
            Over time, I expanded it so users can now learn and run terminal
            commands directly in the browser, and even interact with real course
            material from my university.
          </p>
          <Image
            alt="shell agent landing"
            src={overview}
            className="my-4 rounded-md"
          />
          <p className="mb-1">User Guide :</p>

          <Link href="https://shellagent.ai/user-guide" target="_blank">
            <Image
              alt="shell agent workspace"
              src={user_guide}
              className="mb-4 rounded-md"
            />
          </Link>
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
