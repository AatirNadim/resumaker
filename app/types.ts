export class ExperienceNode {
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  workSummery: string;

  constructor() {
    this.title = "";
    this.companyName = "";
    this.city = "";
    this.state = "";
    this.startDate = "";
    this.endDate = "";
    this.workSummery = "";
  }
}

export class EducationNode {
  universityName: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description: string;

  constructor() {
    this.universityName = "";
    this.degree = "";
    this.major = "";
    this.startDate = "";
    this.endDate = "";
    this.description = "";
  }
}

export class PersonNode {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.jobTitle = "";
    this.address = "";
    this.phone = "";
    this.email = "";
  }
}

export class SkillNode {
  skill: string;
  rating: number;

  constructor() {
    this.skill = "";
    this.rating = 0;
  }
}

export class ResumeNode {
  resumeId: string;
  resumeName: string;
  createdAt: Date;
  updatedAt: Date;
  experience: ExperienceNode[];
  education: EducationNode[];
  personDetails: PersonNode;
  skills: SkillNode[];
  summary: string;
  themeColor: string;

  constructor() {
    this.resumeId = "";
    this.resumeName = "";
    this.experience = [];
    this.education = [];
    this.personDetails = new PersonNode();
    this.skills = [];
    this.summary = "";
    this.themeColor = "";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const enum ResumeComponentType {
  PersonDetails = "PersonDetails",
  Experience = "Experience",
  Education = "Education",
  Skills = "Skills",
}
