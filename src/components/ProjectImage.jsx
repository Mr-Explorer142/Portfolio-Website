import React from "react";

export function ProjectImage({ project }) {
  return (
    <div className="aspect-[2.1/1] w-full overflow-hidden bg-background">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
