import ContentBox from "@/components/content-box";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import preivew from "@/public/imgs/projects/note_book/preview.png";
import { saira } from "@/app/fonts";

const NoteBook = () => {
  return (
    <div className="">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            I built this app because I wanted a simple place to write and
            organize my notes using markdown. Most tools I tried had too many
            features I never used. I just wanted something clean, fast, and that
            works offline on my desktop.
          </p>
          <Image
            alt="exami thumnail"
            src={preivew}
            className="rounded-md w-full my-4"
          />
          <p className="text-justify">
            The editor is powered by CodeMirror with full Vim keybindings
            support. Both panes stay in sync as you scroll, and each panel can
            be maximized independently and notes persisted locally using SQLite.
          </p>
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default NoteBook;
