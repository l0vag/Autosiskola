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
    title: 'kresz',
    startDate: new Date('2021-05-30'),
    finishDate: new Date('2021-06-30'),
    users: [],
  },
  {
    id: 1,
    title: 'kresz',
    startDate: new Date('2021-06-15'),
    finishDate: new Date('2021-06-30'),
    users: [],
  },
  {
    id: 2,
    title: 'elsősegély',
    startDate: new Date('2021-06-20'),
    finishDate: new Date('2021-06-30'),
    users: [],
  },
];

export const exams = [
  {
    id: 0,
    title: 'forgalmi',
    examDate: new Date('2021-10-11 14:00'),
    results: [],
    users: [],
  },
  {
    id: 1,
    title: 'forgalmi',
    examDate: new Date('2021-12-11 10:00'),
    results: [],
    users: [],
  },
  {
    id: 2,
    title: 'kresz',
    examDate: new Date('2021-06-13 14:00'),
    results: [],
    users: [],
  },
];
