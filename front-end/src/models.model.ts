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
  examDate: string;
  results: Array<any>;
}

export interface ICourse {
  id: number;
  title: string;
  startDate: string;
  finishDate: string;
}
