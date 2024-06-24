type PersonalDetailNode = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
};

export class PersonalDetailsDto {
  personalDetailsId: string;
  resumeId: string;

  constructor(personalDetailsId: string, resumeId: string) {
    this.personalDetailsId = personalDetailsId;
    this.resumeId = resumeId;
  }
}
