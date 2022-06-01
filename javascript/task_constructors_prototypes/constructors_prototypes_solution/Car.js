
/*
	TODO 1
	Create Car class. 
	The car should have properties representing:
	- manufacturer, 
	- price and 
	- engine type.
*/
class Car {
	constructor(manufacture, price, engine) {
		this.manufacture = manufacture
		this.price = price
		this.engine = engine
	}
	
	get manufacture() {
		return this._manufacture
	}
	
	set manufacture(manufacture) {
		this._manufacture = manufacture
		this.setup()
	}
	
	get price() { return this._price }
	
	set price(price) { this._price = price }
	
	setup() { }
}

module.exports = Car;