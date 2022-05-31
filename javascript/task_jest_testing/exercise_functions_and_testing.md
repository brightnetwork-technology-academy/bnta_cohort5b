# Exercise - Writing Functions & Tests

In this exercise we're going to write the bare-bones functionality for a calculator along with some tests to verify that things are behaving the way they should.

## Before You Start...

- Pull the start point from GitHub and copy it to your coursework directory
- Initialise your own Git repository in the **copied** folder
- Install the dependencies using `npm install`

## Task

The start point contains two files for you to edit: `calculator.js` and `calculator.test.js`. There is also a `package.json` file listing the dependencies with the testing scripts already defined. 

In `calculator.js`:

- Define the missing functions. 
- `odd` and `even` should take a single number as an argument and return a boolean to say if the number is odd/even or not. 
- The other functions should take two numbers as arguments and return the result of the appropriate operation, eg. `sum` takes two numbers and returns their sum
- `sum` is already defined as an example
- You can use named, anonymous or arrow functions

In `calculator.test.js`:

- Complete the missing tests for `sum`. Delete `.skip` from the definitions in order to let them run.
- Write tests for the other functions you have defined. We want to see **at least two** tests for each function.

## Extensions

- Think about different the different arguments you could pass to your functions and write tests to make sure nothing breaks in those scenarios, eg. passing two large numbers, passing negative numbers, one argument being zero.
- Are there any places in your code where you could reuse a function you have already written? Refactor to keep things DRY - remember to re-run your tests to make sure everything still works!
- Check the test coverage and make sure every possibility is covered by your tests. 
- Explore [other assertion methods](https://jestjs.io/docs/expect) - could any of them be useful in your tests?