import { __, pipe, join, map, split, toLower, includes, reduce, replace } from 'ramda';

const [text, backList, p] = [
  'Nicasio você é um idiota porque ontem tiveste a aldácia de programar em php',
  ['idiota', 'php'],
  '*',
];
/* 1ª  */
const getWords = split(' ');
const getSentence = join(' ');
const isCensured = pipe(toLower, includes(__, backList));
const hideWords = map(w => (isCensured(w) ? p.repeat(w.length) : w));
const censurator1 = pipe(getWords, hideWords, getSentence);

/* 2ª  */
const censurator2 = reduce(
  (text, w) => replace(new RegExp(w, 'i'), p.repeat(w.length), text),
  __,
  backList
);

[censurator1, censurator2].forEach(censurator => console.log(censurator(text)));
