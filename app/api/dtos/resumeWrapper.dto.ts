export class ResumeWrapperDto {
  resumeId: string;
  resumeName: string;
  userEmail: string;
  createdAt: Date;
  updatedAt: Date;
  summary: string;
  themeColor: string;

  constructor(
    resumeId: string,
    resumeName: string,
    userEmail: string,
    createdAt: Date,
    updatedAt: Date,
    summary: string,
    themeColor: string
  ) {
    this.resumeId = resumeId;
    this.resumeName = resumeName;
    this.userEmail = userEmail;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.summary = summary;
    this.themeColor = themeColor;
  }
}
