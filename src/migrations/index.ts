import * as migration_20260105_201440_initial from './20260105_201440_initial';
import * as migration_20261024_141148 from './20261024_141148';

export const migrations = [
  {
    up: migration_20260105_201440_initial.up,
    down: migration_20260105_201440_initial.down,
    name: '20260105_201440_initial',
  },
  {
    up: migration_20261024_141148.up,
    down: migration_20261024_141148.down,
    name: '20261024_141148'
  },
];
