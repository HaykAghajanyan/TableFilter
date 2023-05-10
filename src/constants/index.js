export const ALL = 'all';
export const NAME = 'name';
export const AREA = 'area';
export const FLAG = 'flag';
export const REGION = 'region';
export const POPULATION = 'population';

export const TABLE_HEADER = [
  {
    title: 'country',
    dataKey: NAME,
    isSortable: false,
  },
  {
    title: 'region',
    dataKey: REGION,
    isSortable: false,
  },
  {
    title: 'population (2023)',
    dataKey: POPULATION,
    isSortable: true,
  },
  {
    title: 'area',
    dataKey: AREA,
    isSortable: true,
  },
  {
    title: 'flag',
    dataKey: FLAG,
    isSortable: false,
  },
];

export const REGIONS = [
  {
    title: 'Africa',
    dataKey: 'Africa'
  },
  {
    title: 'Europe',
    dataKey: 'Europe'
  },
  {
    title: 'Asia',
    dataKey: 'Asia'
  },
  {
    title: 'Oceania',
    dataKey: 'Oceania'
  },
  {
    title: 'Australia',
    dataKey: 'Australia'
  },
  {
    title: 'North America',
    dataKey: 'northAmerica'
  },
  {
    title: 'South America',
    dataKey: 'southAmerica'
  },
];
