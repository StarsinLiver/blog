import IProjectImages from "../IProjectImages";
import IProjects from "../IProjects";

export default interface IProjectsDto {
  projects : IProjects,
  projectImages : Array<IProjectImages>
}