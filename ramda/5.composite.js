const toSlug = text =>
  encodeURIComponent(
    text
      .split(' ')
      .map(w => w.toLowerCase())
      .join('-')
  );

console.log(toSlug('branca de neve e os 6 anoes'));
