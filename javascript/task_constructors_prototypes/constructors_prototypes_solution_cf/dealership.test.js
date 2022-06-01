const Car = require('./car.js');
const Dealership = require('./dealership.js');

test("Dealership - access the properties", () => {
    let name = "Test D";
    let maxNumberOfCars = 10;
    let dealership = new Dealership(name, maxNumberOfCars);

    expect(dealership.name).toBe(name);
    expect(dealership.maxNumberOfCars).toBe(maxNumberOfCars);
    expect(dealership.currentCar).toBe(null);
    expect(dealership.cars.length).toBe(0);
})

test("Dealership - count()", () => {
    let name = "Test D";
    let maxNumberOfCars = 10;
    let cars = [new Car("", 100, ""), new Car("", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;

    expect(dealership.count()).toBe(2);
})

test("Dealership - add() - success", () => {
    let name = "Test D";
    let maxNumberOfCars = 3;
    let cars = [new Car("", 100, ""), new Car("", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.count()).toBe(2);

    dealership.add(new Car("", 100, ""));
    expect(dealership.count()).toBe(3);
})

test("Dealership - add() - fail", () => {
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("", 100, ""), new Car("", 100, "")]

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.count()).toBe(2);

    dealership.add(new Car("", 100, ""));
    expect(dealership.count()).toBe(2);
})

test("Dealership - manufacturers()", () => {
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 100, ""), new Car("BMW", 100, ""), new Car("Tesla", 100, ""), new Car("Nissan", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.manufacturers()).toStrictEqual(["Ford", "BMW", "Tesla", "Nissan"]);
})

test("Dealership - carsWithManufacturer()", () => {
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 100, ""), new Car("BMW", 100, ""), new Car("Tesla", 100, "X"), new Car("Tesla", 100, "Y")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.carsWithManufacturer("Tesla").length).toBe(2);
})

test("Dealership - total()", () => {
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 100, 1000), new Car("BMW", 100, 1000), new Car("Tesla", 100, "X"), new Car("Tesla", 100, "Y")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.total()).toBe(400);
})

test("Dealership - total()", () => {
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 100, 1000), new Car("BMW", 100, 1000), new Car("Tesla", 100, 1000), new Car("Tesla", 100, 1000)];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.total()).toBe(400);
})

test("Dealership - find() - by manufacture", () => {
    let findByManufacture = "manufacture";
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 100, 1000), new Car("BMW", 100, 1000), new Car("Tesla", 100, 1000), new Car("Tesla", 100, 1000)];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.find(findByManufacture, "Tesla").length).toBe(2);
})

test("Dealership - find() - by price", () => {
    let findByPrice = "price";
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 111, 1000), new Car("BMW", 100, 1000), new Car("Tesla", 100, 1000), new Car("Tesla", 100, 1000)];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.find(findByPrice, 111).length).toBe(1);
})

test("Dealership - find() - by engine", () => {
    let findByEngine = "engine";
    let name = "Test D";
    let maxNumberOfCars = 2;
    let cars = [new Car("Ford", 111, 999), new Car("BMW", 100, 4000), new Car("Tesla", 100, 2000), new Car("Tesla", 100, 1500)];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.find(findByEngine, 999).length).toBe(1);
})