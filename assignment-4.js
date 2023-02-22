const fs = require('fs');

fs.appendFileSync(
  'employees.json',
  '{"name": "Employee 1 Name", "salary": 2000},',
  'utf8',
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('File written!');
  }
);

fs.readFileSync('employees.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFileSync(
  'employees.json',
  '{"name": "Employee 2 Name", "salary": 3000},',
  'utf8',
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('File written!');
  }
);

fs.unlinkSync('employees.json', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File deleted!');
});
