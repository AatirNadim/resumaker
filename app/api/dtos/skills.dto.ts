type SkillNode = {
  skill: string;
  rating: number;
};

export class SkillsDto {
  skillId: string;
  resumeId: string;
  skillNodes: SkillNode[];

  constructor(skillId: string, resumeId: string, skillNodes: SkillNode[] = []) {
    this.skillId = skillId;
    this.resumeId = resumeId;
    this.skillNodes = skillNodes;
  }
}
