function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      func.apply(this, [...args, callback]);
    });
  };
}

/*
The 'promisify' function takes a callback-based function "func" as input and
returns a new function that returns a Promise. 
The returned function takes the same arguments as the original func.

Inside the returned function, we create a new Promise and pass a callback function as an argument to func.
The callback function checks if an error occurred and rejects the Promise if necessary, otherwise it resolves the Promise with the result.

We use apply to call func with the correct this context and the array of arguments.
*/

cconst newFunction = promisify(someFunction);
newFunction(1, 2, 3)
  .then(result => {
    // handle successful result
  })
  .catch(error => {
    // handle error
  });


/*
Here, someFunction is the original callback-based function that you want to convert to a Promise-based function.
The newFunction returned by 'promisify' takes the same arguments as 'someFunction' and returns a Promise 
that resolves or rejects based on the callback result. You can use then to handle successful results and catch to handle errors.
*/
