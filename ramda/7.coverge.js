import { converge, descend, equals, head, identity, sort, pipe } from 'ramda';

const [validArr, invalidArr] = [
  [19, 3, 6, 7, 9, 2],
  [5, 7, 91, 6, 4, 2],
];

// const firstElementIsBiggest = elements => elements[0] === elements.sort((a, b) => b - a)[0];
const firstElementIsBiggest = converge(equals, [head, pipe(sort(descend(identity)), head)]);

console.log(firstElementIsBiggest(validArr));
console.log(firstElementIsBiggest(invalidArr));
