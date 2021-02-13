import { equals, filter, lt, pipe, pluck, __, where } from 'ramda';

const products = [
  { name: 'Casaco de pele', category: 'Casacos', price: 150, quantity: 10 },
  { name: 'Zanoti eay', category: 'sapatos', price: 50, quantity: 43 },
  { name: 'nike', category: 'chapeus', price: 160, quantity: 65 },
  { name: 'Alcatel 670', category: 'Telemoveis', price: 20000, quantity: 12 },
];

const getProductNames = pipe(
  filter(
    where({
      category: equals('Casacos'),
      quantity: lt(__, 20),
      price: lt(__, 160),
    })
  ),
  pluck('name')
);

console.log(getProductNames(products));
