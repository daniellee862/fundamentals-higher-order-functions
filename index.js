function identity(iden) {
  return iden;
}

function identityF(idenF) {
  let idenFNum = idenF;
  function newIdentity() {
    return idenFNum;
  }
  console.log(newIdentity);
  return newIdentity;
}

//
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// const increment = ___; // <-- function definition
// increment(5); // 6
// increment(increment(5)); // 7

function increment(num) {
  return num + 1;
}
//

// const add3 = addF(3);
// const result = add3(4);
// console.log(result); // 7

// const result2 = addF(5)(6);
// console.log(result2); // 11

function addF(num1) {
  function newIncrement(num2) {
    return num1 + num2;
  }

  return newIncrement;
}

function curry(func, num) {
  function curryTwo(num2) {
    return func(num, num2);
  }
  console.log(num);
  return curryTwo;
}

function liftF(func) {
  function liftFTwo(num) {
    return function liftfThree(num2) {
      return func(num, num2);
    };
  }
  return liftFTwo;
}

// 8. Write a function `twice` that takes a binary function and returns a unary function (_a function that takes one argument_) that passes its argument to the binary function twice.

// ```js
// const double = twice(add);
// const result = double(11);
// console.log(result); // 22

function twice(func) {
  function twiceTwo(num) {
    return func(num, num);
  }
  return twiceTwo;
}

function once(restrictFunc) {
  let count = 0;
  const oneInvoke = () => {
    if (count === 0) {
      count += 1;
      return [restrictFunc(), count];
    }
    count += 1;
    return count;
  };
  return oneInvoke;
}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  once,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
