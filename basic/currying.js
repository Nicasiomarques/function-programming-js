import { curry } from 'ramda';

// const sum = (a, b) => a + b;

// const curriedSum = curry(sum);

// console.log(curriedSum(10)(20));

const arrayObjects = [{ id: 1 }, { id: 6 }, { id: 12 }, { id: 449 }];

// 1ª way:
const ids = arrayObjects.map(item => item.id);
console.log(ids);