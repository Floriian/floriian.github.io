export type Roadmap = {
  startDate: number;
  endDate: number;

  name: string;
  description: string;

  type: 'WORK' | 'SCHOOL';
};

export const roadmap: Roadmap[] = [
  {
    startDate: 2017,
    endDate: 2021,
    name: 'II. Rákóczi Ferenc Katolikus Gimnázium és Technikum',
    description: 'Graduation. I also got ECDL',
    type: 'SCHOOL',
  },
  {
    startDate: 2021,
    endDate: 2023,
    name: 'II. Rákóczi Ferenc Katolikus Gimnázium és Technikum',
    description:
      'IT System Administrator. I also got Cisco CCNA & ITE modules.',
    type: 'SCHOOL',
  },
];
