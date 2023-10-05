import { MenuItem } from './interfaces';

export const NUMBER_OF_FLOORS = 4;
export const FLOORS = Array.from({ length: NUMBER_OF_FLOORS });
export const NUMBER_OF_BEDS_IN_BLOCK = 6;
export const MENU_ITEMS: MenuItem[] = [
  {
    link: 'plan',
    label: 'Hotel Plan',
    index: 1,
  },
  {
    link: 'reports',
    label: 'Reports',
    index: 4,
  },
  {
    link: 'residents',
    label: 'Residents',
    index: 2,
  },
  {
    link: 'database',
    label: 'Database',
    index: 3,
  },
  {
    link: '',
    label: 'Dashboard',
    index: 0,
  },
];
