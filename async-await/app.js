// async function myFunc() {
//   // return 'Hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;
//   // ^ fabricating an error

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   }
//   await Promise.reject(new Error('Something went wrong'));
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it's resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
