import { CourseType, ExamType } from './enums.enum';
import { IUser } from './models.model';

export const users: IUser[] = [
  {
    id: 0,
    name: 'Pisti',
    password: 'százhét',
    role: 'ROLE_INSTRUCTOR',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 1,
    name: 'Béla',
    password: 'százhat',
    role: 'ROLE_INSTRUCTOR',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 2,
    name: 'Dalma',
    password: 'százhárom',
    role: 'ROLE_ADMIN',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 3,
    name: 'Géza',
    password: 'tréning',
    role: 'ROLE_STUDENT',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 4,
    name: 'Géza2',
    password: 'tréning2',
    role: 'ROLE_STUDENT',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 5,
    name: 'Géza3',
    password: 'tréning3',
    role: 'ROLE_STUDENT',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 6,
    name: 'Géza4',
    password: 'tréning4',
    role: 'ROLE_GUEST',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 7,
    name: 'Géza5',
    password: 'tréning5',
    role: 'ROLE_GUEST',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 8,
    name: 'guest',
    password: 'guest',
    role: 'ROLE_GUEST',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 9,
    name: 'admin',
    password: 'admin',
    role: 'ROLE_ADMIN',
    results: [],
    courses: [],
    weeks: [],
  },
  {
    id: 9,
    name: 'student',
    password: 'student',
    role: 'ROLE_STUDENT',
    results: [],
    courses: [],
    weeks: [],
  },
];

export const freeWorkWeek = [
  {
    name: 'hétfő',
    classes: [
      {
        id: 0,
        isFree: true,
        student: null,
      },
      {
        id: 1,
        isFree: true,
        student: null,
      },
      {
        id: 2,
        isFree: true,
        student: null,
      },
      {
        id: 3,
        isFree: true,
        student: null,
      },
    ],
  },
  {
    name: 'kedd',
    classes: [
      {
        id: 0,
        isFree: true,
        student: null,
      },
      {
        id: 1,
        isFree: true,
        student: null,
      },
      {
        id: 2,
        isFree: true,
        student: null,
      },
      {
        id: 3,
        isFree: true,
        student: null,
      },
    ],
  },
  {
    name: 'szerda',
    classes: [
      {
        id: 0,
        isFree: true,
        student: null,
      },
      {
        id: 1,
        isFree: true,
        student: null,
      },
      {
        id: 2,
        isFree: true,
        student: null,
      },
      {
        id: 3,
        isFree: true,
        student: null,
      },
    ],
  },
  {
    name: 'csütörtök',
    classes: [
      {
        id: 0,
        isFree: true,
        student: null,
      },
      {
        id: 1,
        isFree: true,
        student: null,
      },
      {
        id: 2,
        isFree: true,
        student: null,
      },
      {
        id: 3,
        isFree: true,
        student: null,
      },
    ],
  },
  {
    name: 'péntek',
    classes: [
      {
        id: 0,
        isFree: true,
        student: null,
      },
      {
        id: 1,
        isFree: true,
        student: null,
      },
      {
        id: 2,
        isFree: true,
        student: null,
      },
      {
        id: 3,
        isFree: true,
        student: null,
      },
    ],
  },
];

export const courses = [
  {
    id: 0,
    title: CourseType.ROAD_RULES_COURSE,
    startDate: new Date('2021-05-30'),
    finishDate: new Date('2021-06-30'),
    users: [],
    maxNum: 1,
  },
  {
    id: 1,
    title: CourseType.ROAD_RULES_COURSE,
    startDate: new Date('2021-06-15'),
    finishDate: new Date('2021-06-30'),
    users: [],
    maxNum: 10,
  },
  {
    id: 2,
    title: CourseType.FIRST_AID_COURSE,
    startDate: new Date('2021-06-20'),
    finishDate: new Date('2021-06-30'),
    users: [],
    maxNum: 10,
  },
];

export const exams = [
  {
    id: 0,
    title: ExamType.DRIVING_TEST,
    examDate: new Date('2021-10-11 14:00'),
    results: [],
    users: [],
    maxNum: 1,
  },
  {
    id: 1,
    title: ExamType.DRIVING_TEST,
    examDate: new Date('2021-12-11 10:00'),
    results: [],
    users: [],
    maxNum: 10,
  },
  {
    id: 2,
    title: ExamType.ROAD_RULES_TEST,
    examDate: new Date('2021-06-13 14:00'),
    results: [],
    users: [],
    maxNum: 10,
  },
];
