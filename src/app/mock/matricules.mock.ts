import { Collegue } from '../models/Collegue';

const listeMatricules: Collegue[] = [new Collegue('M01',
'Dupont', 'Paul', 'paul.dupont@gmail.com',
 new Date(1990, 4, 5), 'http://www.w3schools.com/bootstrap/img_avatar3.png'),
 new Collegue('M03',
 'Hugo', 'Victor', 'victor.hugo@gmail.com',
  new Date(1802, 8, 10), 'http://www.w3schools.com/bootstrap/img_avatar3.png'),
  new Collegue('M04',
  'Haddock', 'Archibal', 'archibal.haddock@gmail.com',
   new Date(1932, 12, 7), 'http://www.w3schools.com/bootstrap/img_avatar3.png')];

export {listeMatricules};
