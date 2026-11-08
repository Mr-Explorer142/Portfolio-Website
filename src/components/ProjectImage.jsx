import React from "react";

export function ProjectImage({ project }) {
  return (
    <img
      src={project.image}
      alt={project.imageAlt}
      loading="lazy"
      className="block h-auto w-full"
    />
  );
}
