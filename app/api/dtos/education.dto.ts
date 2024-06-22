export class EducationDto {
  educationId: string;
  resumeId: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  description: string;

  constructor(
    educationId: string,
    resumeId: string,
    school: string,
    degree: string,
    fieldOfStudy: string,
    startDate: Date,
    endDate: Date,
    description: string
  ) {
    this.educationId = educationId;
    this.resumeId = resumeId;
    this.school = school;
    this.degree = degree;
    this.fieldOfStudy = fieldOfStudy;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}
