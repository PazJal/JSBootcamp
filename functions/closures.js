const createCounter  = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement(){
      count--;
    },
    get() {
      return count;
    }
  }
}

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

const createAdder = (a) => {
  return (b) => {
    return a+b;
  }
}

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(-90));

const createTipper = (baseTip) => {
  return (baseAmount) => {
    return baseAmount * baseTip;
  }
}

const cheapTipper = createTipper(.1);
const mediumTipper = createTipper(.2);
const maxTipper = createTipper(.3);

console.log(cheapTipper(100));
console.log(mediumTipper(100));
console.log(maxTipper(100));