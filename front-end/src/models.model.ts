export interface IUser {
  id: number;
  name: string;
  password: string;
  role: string;
  results: Array<any>;
  courses: Array<any>;
  weeks: Array<IWorkWeek>;
}

export interface IExam {
  id: number;
  title: string;
  examDate: Date;
  users: Array<IUser>;
  results: Array<any>;
  maxNum: number;
}

export interface ICourse {
  id: number;
  title: string;
  startDate: Date;
  finishDate: Date;
  users: Array<IUser>;
  maxNum: number;
}

export interface IDriveClass {
  id: number;
  isFree: boolean;
  student: string;
}

export interface IWorkDay {
  name: string;
  classes: IDriveClass[];
}

export interface IWorkWeek {
  number: number;
  workDays: Array<IWorkDay>;
}

export interface IUserWeek {
  selectedUser: IUser;
  weekNumber: number;
}
