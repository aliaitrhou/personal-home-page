import ContentBox from "@/components/content-box";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import sketchybar from "@/public/imgs/projects/sketchybar/skb.png";
import { SiHomebrew } from "react-icons/si";
import { RiTerminalBoxFill } from "react-icons/ri";
import { saira } from "@/app/fonts";
import { PiTerminalWindowFill } from "react-icons/pi";

const SketchyBar = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            A custom <strong>SketchyBar</strong> configuration built to
            transform the macOS menu bar into a clean, modern productivity
            dashboard. Every widget is carefully designed to provide useful
            information at a glance while maintaining a minimal aesthetic that
            blends naturally with macOS.
          </p>

          <Image
            alt="SketchyBar Preview"
            src={sketchybar}
            className="rounded-md my-4"
          />

          <p className="text-justify">
            The setup features workspace indicators, the active application
            icon, system monitoring with a live CPU usage graph, battery, Wi-Fi,
            memory and volume controls, calendar and clock widgets, as well as
            an integrated Islamic prayer time indicator showing the current
            prayer and the remaining time until the next one. Built with modular
            Bash scripts, every component is lightweight, customizable, and easy
            to extend.
          </p>
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default SketchyBar;
