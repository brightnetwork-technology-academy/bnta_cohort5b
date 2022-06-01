# Exercise - Constructors & Prototypes

In this exercise we will explore some of the differences between how classes are defined in Java and JavaScript. We're going to revisit the car dealership and recreate the classes, including their properties and behaviours, using JavaScript.

## Task

- Create ` Car` class. The car should have properties representing manufacturer, price and engine type.
- Set up Jest and write tests to make sure you can access each of those properties in a `Car` object.
- Create a `Dealership` class. It should have properties representing its name, maximum number of cars it can have and the cars currently in stock.
- Add methods to `Dealership` to:
	- Count the number of cars in stock
	- Add a car to stock
	- Return an array containing each car's manufacturer
	- Find all the cars from a given manufacturer
	- Find the total value of all the cars in stock
- Write tests for `Dealership`'s methods.

## Extensions

- Modify and test the method for adding a car to stock to ensure we can't add more cars than we have space for.
- Add a `Customer` class with a name, a wallet representing the amount of money they have and a `car` property which is initialised to be `null`. Give them a `buyCar` method which removes a `Car` from a `Dealership` and updates their `car` property. Write tests to ensure all possible conditions are met, eg. the customer can afford the car.
- Modify the method which searches for cars by manufacturer to let the user search by price or engine type instead.