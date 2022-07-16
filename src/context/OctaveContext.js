import { createContext } from 'react';

const octaves = new Array(1, 2, 3, 4, 5);

export const OctaveContext = createContext(octaves);