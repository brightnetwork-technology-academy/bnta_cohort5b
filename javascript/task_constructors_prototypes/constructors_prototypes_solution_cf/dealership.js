
function Dealership(name, maxNumberOfCars) {
    this.name = name
    this.maxNumberOfCars = maxNumberOfCars
    this.currentCar = null
    this.cars = []

}

Dealership.prototype.count = function () {
    return this.cars.length;
}

Dealership.prototype.add = function (car) {
    if (this.count() < this.maxNumberOfCars) { this.cars.push(car) }
}


Dealership.prototype.manufacturers = function () {
    let result = []
    this.cars.forEach(car => {
        result.push(car.manufacture)
    })

    return result
}



Dealership.prototype.carsWithManufacturer = function (manufacture) {
    return this.cars.filter(car => car.manufacture == manufacture)
}


Dealership.prototype.total = function () {
    return this.cars
        .map(car => car.price)
        .reduce((total, price) => total + price)
}


Dealership.prototype.find = function (by, value) {
    let result = []
    switch (by) {
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

Dealership.prototype.remove = function (car) {
    let filtered = this.cars.filter(item => item != car)
    this.cars = filtered
}

module.exports = Dealership;