const Car = require('./Car.js');

test("Car - access the properties", () => {
	let car = new Car("m1", 0, "e1");
	
	expect(car.manufacture).toBe("m1");
	expect(car.price).toBe(0);
	expect(car.engine).toBe("e1");
})