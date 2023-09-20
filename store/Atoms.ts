import { atom } from 'jotai';
import json from '@/data/Items.json';

const initialData = Object.entries(json);

export const itemsAtom = atom(initialData);
export const initAtom = atom(initialData.concat());
