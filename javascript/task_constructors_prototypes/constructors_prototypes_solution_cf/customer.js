function Customer(name, wallet) {
    this.name = name
    this.wallet = wallet
    this.car = null
    this.dealer = null
}

Customer.prototype.buy = function(car) {
    if(car.price <= this.wallet && this.dealer != null) {
        this.car = car
        this.wallet -= car.price
        this.dealer.remove(car)
    }
}

Customer.prototype.buy = function(car) {
    if(car.price <= this.wallet && this.dealer != null) {
        this.car = car
        this.wallet -= car.price
        this.dealer.remove(car)
    }
}

module.exports = Customer;