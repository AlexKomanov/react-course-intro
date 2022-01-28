'use strict';

class Car {
  constructor(brand, model) {
    this.model = model;
    this.brand = brand;
  }

  shoowCar(driverName) {
    console.log(
      `My name is ${driverName}, my car is ${this.brand} ${this.model}`
    );
  }
}

const mercedes = new Car('Mercedes-Benz', 'GLC');
mercedes.shoowCar('Alex');

class ElectricCar extends Car {
  constructor(brand, model, reserveOfPower) {
    super(brand, model);
    this.reserveOfPower = reserveOfPower;
  }
}

const tesla = new ElectricCar('Tesla', 'X', 500);

tesla.shoowCar('Alexander');
