type EducationNode = {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
};

export class EducationDto {
  educationId: string;
  resumeId: string;
  educationNodes: EducationNode[];

  constructor(
    educationId: string,
    resumeId: string,
    educationNodes: EducationNode[] = []
  ) {
    this.educationId = educationId;
    this.resumeId = resumeId;
    this.educationNodes = educationNodes;
  }
}
