import { NodeProjects } from "./NodeProjects";
import { OtherProjects } from "./OtherProjects";
import { ReactProjects } from "./ReactProjects";
import { VanillaProjects } from "./VanillaJsProjects";

export const allProjects = [
  ...ReactProjects,
  ...OtherProjects,
  ...NodeProjects,
  ...VanillaProjects,
];
