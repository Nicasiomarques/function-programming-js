import { split, toLower, map, join } from 'ramda';
import { compose } from 'ramda';

// const toSlug = text =>
//   encodeURIComponent(
//     text
//       .split(' ')
//       .map(w => w.toLowerCase())
//       .join('-')
//   );

const toSlug = compose(encodeURIComponent, join('-'), map(toLower), split(' '));

console.log(toSlug('branca de neve e os 6 anoes'));
