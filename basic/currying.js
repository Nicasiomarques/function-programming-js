import { curry } from 'ramda';

// const sum = (a, b) => a + b;

// const curriedSum = curry(sum);

// console.log(curriedSum(10)(20));

const arrayObjects = [{ id: 1 }, { id: 6 }, { id: 12 }, { id: 449 }];

// 1ª way:
// const ids = arrayObjects.map(item => item.id);

// 2ª currying improvement
// const get = curry((property, object) => object[property]);
// const ids = arrayObjects.map(get('id'));

// 3ª currying improvement
// const get = curry((property, object) => object[property]);
// const getIds = object => object.map(get('id'));

// 4ª currying improvement
const get = curry((prop, obj) => obj[prop]);
const map = curry((fn, values) => values.map(fn));
const getIds = map(get('id'));

// console.log(getIds(arrayObjects));

// Real world code
const fetchFromServer = new Promise(resolve => {
  resolve({
    user: 'Nicasio Silva',
    stars: 18,
    posts: [
      { title: 'Why use fp?' },
      { title: 'Microservices is future?' },
      { title: 'Why haskell?' },
    ],
  });
});

// with normal with js
fetchFromServer
  .then(user => user.posts)
  .then(posts => posts.map(post => post.title))
  .then(console.log);

// with currying
fetchFromServer
  .then(get('posts'))
  .then(map(get('title')))
  .then(console.log);
