// import { propEq, find } from 'ramda';

// const users = [
//   {
//     id: 3,
//     name: 'Miguel',
//   },
//   {
//     id: 5,
//     name: 'Marco',
//   },
//   {
//     id: 7,
//     name: 'Adilson',
//   },
//   {
//     id: 10,
//     name: 'Delcio',
//   },
// ];

// const miguel = find(propEq('id', 3), users);
// console.log(miguel);

const wasBornInCountry = person => person.country === 'Angola';
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);
const isEligibleToVote = person => isOver18(person) && isCitizen(person);

const userTest = {
  name: 'nicasio marques',
  age: 22,
  country: 'Congo',
  naturalizationDate: Date.now(),
};

console.log(isEligibleToVote(userTest));
