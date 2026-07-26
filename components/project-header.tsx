import Link from "next/link";
import ProjectMetaData from "./project-meta-data";
import { ProjectMeta } from "@/data/projects";
import ContentBox from "./content-box";

export const ProjectHeader = ({ project }: { project: ProjectMeta }) => (
  <ContentBox
    title="Project Info"
    styles={`font-light leading-7 w-full flex flex-col gap-1 pt-2 pb-1`}
  >
    <ProjectMetaData title="Platform">{project.platform}</ProjectMetaData>
    {/* <ProjectMetaData title="Project Status">{project.status}</ProjectMetaData> */}
    <ProjectMetaData title="Hosting">{project.hosting}</ProjectMetaData>
    {project?.website && (
      <ProjectMetaData title="Website">
        <Link
          href={project?.website}
          target="_blank"
          className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
        >
          {project?.website}
        </Link>
      </ProjectMetaData>
    )}

    {project.sourceCode && (
      <ProjectMetaData title="Source Code">
        <Link
          href={project?.sourceCode}
          target="_blank"
          className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
        >
          {project?.sourceCode}
        </Link>
      </ProjectMetaData>
    )}
  </ContentBox>
);
