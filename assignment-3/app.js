function circleCircumference(num) {
  const sum = 3.14 * (num * 2);
  console.log('Circumference of the circle:', sum);
}

function circleArea(num) {
  const sum = 3.14 * num * num;
  console.log('Area of the circle:', sum);
}

module.exports = { circleCircumference, circleArea };
