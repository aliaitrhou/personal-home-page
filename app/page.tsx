import BlurTextChunk from "@/components/blur-text-chunk";

const Home = () => {
  return (
    <div className="w-full px-4 mx-auto border-dashed">
      <section className="px-2 py-4 sm:p-6 md:p-8 leading-6 font-mono tracking-tighter space-y-20">
        <p className="text-justify indent-5">
          Hey, I&apos;m{" "}
          <BlurTextChunk
            toggleLabel="Ali"
            text=" a computer science student  "
          />
          <BlurTextChunk
            toggleLabel="and"
            text=" aspiring software developer based in Morocco. "
          >
            I have a{" "}
            <BlurTextChunk
              toggleLabel="passion"
              text=" for building services/stuff i want. "
              noHover={true}
            />
          </BlurTextChunk>
          I enjoy{" "}
          <BlurTextChunk
            toggleLabel="exploring"
            text=" all aspects of creating products, from brainstorming and designing to 
        bringing ideas to life. "
          ></BlurTextChunk>
          I’m enjoying the process of{" "}
          <BlurTextChunk
            toggleLabel="learning"
            text=", experimenting, and creating things that feel meaningful "
          />
          and i have a{" "}
          <BlurTextChunk
            toggleLabel="plan"
            text=" to code until AI rips software from my speedy Vim fingers."
          />
        </p>
      </section>
    </div>
  );
};

export default Home;
