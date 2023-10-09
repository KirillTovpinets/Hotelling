export interface User {
  id: number;
  login: string;
  password: string;
  name: string;
  lastName: string;
}

export interface LoginCredentials {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string | null;
}

export interface CreateResidenceDTO {
  visitor: Visitor;
  residence: Omit<Residence, 'visitorId'>;
}

export interface CreatedResidenceDTO {
  residence: Residence;
}
export type MenuItem = {
  link: string;
  label: string;
  index: number;
};

export type Bed = {
  id: number;
  floor: number;
  segment: number;
  room: string;
  bed: number;
};

export type Residence = {
  id?: number;
  dateStart: Date;
  visitorId: number;
  bedId: number;
  dateFinish?: Date;
  isPayed: boolean;
  note?: string;
};

export type Visitor = {
  id: number;
  firstname: string;
  surname: string;
  middlename: string;
  birthdayDate: string;
  appointment: string;
  company: string;
  sex: string;
};

export type Floor = {
  index: number;
  label: string;
};

export type BedInfo = {
  id: number;
  residentId: number;
};
export type BedResidence = Bed & { residence: Residence[] };
export type FloorResidenceResponse = Array<BedResidence>;
