let num = process.argv.slice(2);

function calc(num) {
  let sum = 3.14 * (num * 2);
  console.log('Area of the circle:', sum);
}

calc(num);
