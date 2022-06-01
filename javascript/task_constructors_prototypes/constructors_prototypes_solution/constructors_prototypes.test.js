/*
	TODO 2
	Set up Jest and 
	write tests to make sure 
	you can access each of those properties in a Car object.

*/
const Car = require('./Car.js');
const Dealership = require('./Dealership.js');
const Customer = require('./Customer.js')

test("Car - access the properties", () => {
	let car = new Car("m1", 0, "e1");
	
	expect(car.manufacture).toBe("m1");
	expect(car.price).toBe(0);
	expect(car.engine).toBe("e1");
})

/*
	TODO 5
	Write tests for Dealership's methods.
*/

test("Dealership - add a car", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	
	expect(dealer.manufacturers()).toEqual(["m1", "m2"])
	
})

test("Dealership - capacity", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))

	expect(dealer.count()).toBe(4)
})

test("Dealership - manufacturers", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	
	expect(dealer.manufacturers()).toEqual(["m1", "m2"])
})

test("Dealership - carsWithManufacturer", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m1", 14, "e2"))
	dealer.add(new Car("m2", 14, "e2"))
	
	let cars = dealer.carsWithManufacturer("m1")
	
	expect(cars.length).toBe(2)
})

test("Dealership - total", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 2, "e1"))
	dealer.add(new Car("m1", 2, "e2"))
	dealer.add(new Car("m2", 4, "e2"))
	
	let cars = dealer.total()
	
	expect(dealer.total()).toBe(8)
})

test("Dealership - find by", () => {
	let dealer = new Dealership("D", 10)
	dealer.add(new Car("m1", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	dealer.add(new Car("m2", 12, "e1"))
	dealer.add(new Car("m4", 12, "e4"))
	dealer.add(new Car("m1", 10, "e2"))
	
	let m1 = dealer.find("manufacture", "m1")
	let e1 = dealer.find("engine", "e1")
	let price12 = dealer.find("price", 12)
	let price8 = dealer.find("price", 8)
	expect(m1).toHaveLength(2)
	expect(e1).toHaveLength(3)
	expect(price12).toHaveLength(4)
	expect(price8).toHaveLength(0)
})

test("Customer - buy", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 2, "e1"))
	dealer.add(new Car("m1", 2, "e2"))
	dealer.add(new Car("m2", 4, "e2"))
	
	let customer = new Customer("c", 8)
	customer.dealer = dealer
	
	customer.buy(dealer.cars[0])

	expect(customer.car).not.toBe(null)
	expect(customer.wallet).toBe(6)
	expect(dealer.count()).toBe(2)
})

test("Customer - can't buy, not enough money", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 2, "e1"))
	dealer.add(new Car("m1", 2, "e2"))
	dealer.add(new Car("m2", 10, "e2"))
	
	let customer = new Customer("c", 8)
	customer.dealer = dealer
	
	customer.buy(dealer.cars[2])

	expect(customer.car).toBe(null)
	expect(customer.wallet).toBe(8)
	expect(dealer.count()).toBe(3)
})

test("Customer - can't buy, dealer is null", () => {
	let dealer = new Dealership("D", 4)
	dealer.add(new Car("m1", 2, "e1"))
	
	let customer = new Customer("c", 8)
	
	customer.buy(dealer.cars[0])

	expect(customer.car).toBe(null)
	expect(customer.wallet).toBe(8)
	expect(dealer.count()).toBe(1)
})

