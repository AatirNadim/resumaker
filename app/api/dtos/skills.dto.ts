export class SkillsDto {
  skillId: string;
  resumeId: string;
  skillName: string;
  skillLevel: string;
  skillExperience: string;

  constructor(
    skillId: string,
    resumeId: string,
    skillName: string,
    skillLevel: string,
    skillExperience: string
  ) {
    this.skillId = skillId;
    this.resumeId = resumeId;
    this.skillName = skillName;
    this.skillLevel = skillLevel;
    this.skillExperience = skillExperience;
  }
}
