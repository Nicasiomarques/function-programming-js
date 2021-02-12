export const curry = fn => {
  const totalArgs = fn.length;
  return function f1(...args) {
    if (args.length >= totalArgs) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        return f1(...args, ...moreArgs);
      };
    }
  };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const result = curriedAdd(21)(3)(6);
console.log(result);
