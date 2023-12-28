import IEducation from "../IEducation";
import IHeaderImg from "../IHeaderImg";
import IMyProfile from "../IMyProfile";
import IProjectImages from "../IProjectImages";
import IProjects from "../IProjects";
import ISkillFile from "../ISkillFile";

export default interface IEveryOne {
  myProfile : IMyProfile,
  projects : IProjects,
  projectImages : Array<IProjectImages>
  education : IEducation,
  headerImg : IHeaderImg,
  skillFile : ISkillFile
}