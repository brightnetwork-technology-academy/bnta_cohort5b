const Car = require('./car.js');
const Customer = require('./customer.js');
const Dealership = require('./dealership.js');

test("Customer - access the properties", () => {
    let customer = new Customer("X", 1000); 
	
	expect(customer.car).toBe(null);
    expect(customer.dealer).toBe(null);
	expect(customer.name).toBe("X");
	expect(customer.wallet).toBe(1000);
})

test("Customer - buy - enough money", () => {
    // Given
    let name = "Test D";
    let maxNumberOfCars = 10;
    let carToBuy = new Car("BMW", 100, 1000);

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = [carToBuy];

    let customerWallet = 1000;
    let customer = new Customer("X", customerWallet); 
    customer.dealer = dealership;
    expect(customer.car).toBe(null);
    expect(dealership.cars.length).toBe(1);


    // When
    customer.buy(carToBuy);

    // Then
    expect(customer.car).toBe(carToBuy);
    expect(customer.wallet).toBe(customerWallet - carToBuy.price);
    expect(dealership.cars.length).toBe(0);   
	
})

test("Customer - buy - not enough money", () => {
    // Given
    let name = "Test D";
    let maxNumberOfCars = 10;
    let carToBuy = new Car("BMW", 10000, 1000);

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = [carToBuy];

    let customerWallet = 1000;
    let customer = new Customer("X", customerWallet); 
    customer.dealer = dealership;
    expect(customer.car).toBe(null);
    expect(dealership.cars.length).toBe(1);


    // When
    customer.buy(carToBuy);

    // Then
    expect(customer.car).toBe(null);
    expect(customer.wallet).toBe(customerWallet);
    expect(dealership.cars.length).toBe(1);   
	
})
