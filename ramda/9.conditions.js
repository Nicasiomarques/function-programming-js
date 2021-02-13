import { always, concat, equals, ifElse, propEq, __, pipe, prop } from 'ramda';

const isWorkTime = ifElse(
  equals(__, true),
  always('Is time o make money baby oh, yea!'),
  always('no yet bro, can you sleep more')
);

console.log(isWorkTime(false));

const video = {
  '720p': 'avengers-infinity-war-hd.mp4',
  '480p': 'avengers-infinity-war-480p.mp4',
  isHD: false,
};

const getVideoFilePath = pipe(
  ifElse(propEq('isHD', true), prop('720p'), prop('480p')),
  concat('/api/videos/')
);

console.log(getVideoFilePath(video));
