export interface IUser {
  id: number;
  name: string;
  password: string;
  role: string;
  results: Array<any>;
}

export interface IExam {
  id: number;
  title: string;
  examDate: string;
  results: Array<any>;
}
