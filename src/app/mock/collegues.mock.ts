
import { Collegue } from '../models/Collegue';

const collegueMock: Collegue = new Collegue('M01',
  'Dupont', 'Paul', 'paul.dupont@gmail.com',
   new Date(1990, 4, 5), 'http://www.w3schools.com/bootstrap/img_avatar3.png');

export { collegueMock };
