Difference between normal function and arrow functions 

      Syntax: Arrow functions have a more concise syntax than normal functions. 
                They use a => syntax to separate the function parameters from the function body, 
                whereas normal functions use the function keyword to define the function.
                
                function add(a, b) {
                      return a + b;
                }
                
                const add = (a, b) => {
                     return a + b;
                }
                
      this keyword: The this keyword behaves differently in arrow functions compared to normal functions.
                    In arrow functions, this is lexically scoped, which means it takes on the value of this 
                    from the surrounding context,
                    whereas in normal functions, the value of this depends on how the function is called.
                    
                    const myObj = {
                          name: "John",
                          greet: function() {
                            console.log("Hello, my name is " + this.name);
                          }
                        };
                    myObj.greet(); // prints "Hello, my name is John"
                    
                    const myObj = {
                          name: "John",
                          greet: () => {
                            console.log("Hello, my name is " + this.name);
                          }
                        };
                    myObj.greet(); // prints "Hello, my name is undefined"
                    
                    In the arrow function example, this is not referring to the myObj object, 
                    but rather the global this context.
                    
       arguments keyword: Arrow functions do not have their own arguments object.
                          Instead, they can access the arguments object of their enclosing scope.
                          
                          function printArgs() {
                                  console.log(arguments);
                                }
                           printArgs(1, 2, 3); // prints {0: 1, 1: 2, 2: 3}
                           
                           const printArgs = () => {
                                  console.log(arguments); // throws ReferenceError: arguments is not defined
                                }
                           printArgs(1, 2, 3);
                           
                           In the arrow function example, arguments is not defined, so it throws a ReferenceError.
          
       Implicit return: Arrow functions can have an implicit return when the function body consists of a single expression.
                          In that case, the return keyword is not needed.
                          
                          function square(n) {
                                  return n * n;
                          }
                          
                          const square = n => n * n;


It's worth noting that arrow functions are not a replacement for normal functions, 
but rather a different way of defining functions that can be useful in certain situations.



             





