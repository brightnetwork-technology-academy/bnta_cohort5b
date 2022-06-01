/*
	Extesion2:
	add a Customer class with:
	- a name, 
	- a wallet representing the amount of money they have and 
	- a car property which is initialised to be null. 
	
	Give them a buyCar method which:
	- removes a Car from a Dealership and 
	- updates their car property.
	
	Write tests to ensure all possible conditions are met, e.g.,
	the customer can afford the car.
*/
class Customer {

	constructor(name, wallet) {
		this.name = name
		this.wallet = wallet
		this.car = null
		this.dealer = null
	}
	
	buy(car) {
		if(car.price <= this.wallet && this.dealer != null) {
			this.car = car
			this.wallet -= car.price
			this.dealer.remove(car)
		}
	}
}

module.exports = Customer;