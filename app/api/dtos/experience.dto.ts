export class ExperienceDto {
  experienceId: string;
  resumeId: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;

  constructor(
    experienceId: string,
    resumeId: string,
    title: string,
    company: string,
    location: string,
    startDate: Date,
    endDate: Date,
    description: string
  ) {
    this.experienceId = experienceId;
    this.resumeId = resumeId;
    this.title = title;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}
