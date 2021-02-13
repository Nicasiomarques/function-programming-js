import { path, pathOr } from 'ramda';

const bill = {
  nickname: 'Minguito Crazy',
  country: 'Angola',
  personal: {
    profile: {
      name: 'Miguito',
      surname: 'Minguiloy',
      age: 22,
    },
  },
};

const mike = {
  nickname: 'Mike Dude',
  country: 'Angola',
  personal: {},
};
// wrong way
// const getSurname = user => user.personal.profile.surname;

// solution
// const getSurname = user =>
//   user && user.personal && user.personal.profile && user.personal.profile.surname;

// improvement fp
// const getSurname = path(['personal', 'profile', 'surname']);

const getSurname = pathOr('not set', ['personal', 'profile', 'surname']);

console.log(getSurname(mike));
