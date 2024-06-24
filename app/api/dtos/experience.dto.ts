type ExperienceNode = {
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  workSummery: string;
};

export class ExperienceDto {
  experienceId: string;
  resumeId: string;
  experienceNodes: ExperienceNode[];

  constructor(
    experienceId: string,
    resumeId: string,
    experienceNodes: ExperienceNode[] = []
  ) {
    this.experienceId = experienceId;
    this.resumeId = resumeId;
    this.experienceNodes = experienceNodes;
  }
}
