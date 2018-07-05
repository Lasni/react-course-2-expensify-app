

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Grega',
      age: 29
    })
  }, 5000)
});

console.log('before');

promise.then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((str) => { // success case for the above promise
  console.log('Does this run?', str)
})
  .catch((error) => {
    console.log('Error: ', error)
  });

console.log('after');