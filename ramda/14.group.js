import { groupBy } from 'ramda';

const students = [
  { name: 'Asdruba Venancio', score: 76, isActive: true },
  { name: 'Mario Gomes', score: 80, isActive: false },
  { name: 'Edmilson Cardoso', score: 46, isActive: true },
];

const groupByScores = groupBy(student => (student.score > 50 ? 'positive' : 'negative'));

console.log(groupByScores(students));
