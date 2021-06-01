export interface IUser {
  id: number;
  name: string;
  password: string;
  role: string;
  results: Array<any>;
  courses: Array<any>;
}

export interface IExam {
  id: number;
  title: string;
  examDate: Date;
  users: Array<IUser>;
  results: Array<any>;
}

export interface ICourse {
  id: number;
  title: string;
  startDate: Date;
  finishDate: Date;
  users: Array<IUser>;
}
