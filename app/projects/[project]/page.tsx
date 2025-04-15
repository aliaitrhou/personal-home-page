import React from "react";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ p: string }>;
}) => {
  const { p } = await params;
  return <p>Project Name: {p}</p>;
};

export default ProjectDetails;
