import { curry } from 'ramda';

const sum = (a, b) => a + b;

const curriedSum = curry(sum);

console.log(curriedSum(10)(20));
