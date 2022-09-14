var Developer = /** @class */ (function () {
    function Developer(name, position) {
        this.name = name;
        this.position = position;
    }
    Developer.prototype.develop = function () {
        console.log('develop an app');
    };
    return Developer;
}());
var a = new Developer('sagheer', '27');
console.log(a.develop());
var title = "sagheer";
var flag = true;
console.log(title, flag);
var b = new Developer("raja", "29");
var Car = /** @class */ (function () {
    function Car(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    return Car;
}());
var car = new Car("hyundai", 2000);
console.log(car.brand, car.price + 100);
