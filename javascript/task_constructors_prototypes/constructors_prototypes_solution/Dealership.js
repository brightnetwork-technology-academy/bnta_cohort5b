/*
		TODO 3
		Create a Dealership class. 
		It should have properties representing:
		- its name, 
		- maximum number of cars it can have and 
		- the cars currently in stock.
*/
class Dealership {

	constructor(name, maxNumberOfCars) {
		this.name = name
		this.maxNumberOfCars = maxNumberOfCars
		this.currentCar = null
		this.cars = []
	}
	
	/*
	  	TODO 4a
	  	Add a method to Dealership to:
	  	count the number of cars in stock
	*/
	count() { return this.cars.length }

	/*
	  	TODO 4b
		Add a method to Dealership to:
	  	add a car to stock

		Extension 1:
		Modify and test the method for adding a car to stock to ensure 
		we can't add more cars than we have space for.  
	*/
	add(car) {
		if(this.count() < this.maxNumberOfCars) { this.cars.push(car) }
	}

	/*
		TODO 4c
		Add a method to Dealership to:
		return an array containing each car's manufacturer
	*/

	manufacturers() {
		let result = [] 
		this.cars.forEach( car => {
			result.push(car.manufacture)
		})
		
		return result
	}

	/*
		TODO 4d
		Add a method to Dealership to:
		find all the cars from a given manufacturer
	*/

	carsWithManufacturer(manufacture) {
		return this.cars.filter( car => car.manufacture == manufacture)
 	}

	 /*
	 	TODO 4e
		Add a method to Dealership to:
	 	find the total value of all the cars in stock
	 */

	total() {
		return this.cars
			.map( car => car.price)
			.reduce((total, price) => total + price)
	}	

	/*
		Extension:
		modify the method which searches for cars by manufacturer 
		to let the user search by price or engine type instead.
	*/
	find(by, value) {
		let result = []
		switch(by) {
			case "manufacture":
				result = this.cars.filter(car => car.manufacture == value)
			break
			case "price":
				result = this.cars.filter(car => car.price == value)
			break
			case "engine":
				result = this.cars.filter(car => car.engine == value)
			break
			default:
				result = []
			break
		}
		
		return result
	}

	 remove(car) {
		let filtered = this.cars.filter( item => item != car)
		this.cars = filtered
	}
}

module.exports = Dealership