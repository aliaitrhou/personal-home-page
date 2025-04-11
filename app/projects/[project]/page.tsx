import React from "react";

type Props = {
  params: {
    project: string;
  };
};

const ProjectDetails = ({ params }: Props) => {
  return <p> Project Name: {params.project}</p>;
};

export default ProjectDetails;
