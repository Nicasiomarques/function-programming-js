import { concat, gt, pipe, prop, take, when, __ } from 'ramda';

//const truncate = text => (text.length >= 10 ? text.substring(0, 10).concat('...') : text);
const hasMoreThanTenLetters = pipe(prop('length'), gt(__, 10));
const takesFirstTenLetters = pipe(take(10), concat(__, '...'));

const truncate = when(hasMoreThanTenLetters, takesFirstTenLetters);

console.log(truncate('Nicasio Marques'));
