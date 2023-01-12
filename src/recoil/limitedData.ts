import { atom } from 'recoil';
import { Sick } from '../types';

const dataState = atom<Sick[]>({
  key: 'dataState',
  default: [],
});

export default dataState;
