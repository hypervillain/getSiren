const getSiren = require('./index');

getSiren.requestDataFromSiren(process.argv[2] || '38347481400043')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`status : ${error.code}`);
    console.log(`log : ${error.log}`);
});
