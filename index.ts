class Developer {
    name: string;
    position: string;
  
    constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
    }
  
    develop(): void {
      console.log('develop an app');
    }
  }

  const a = new Developer('sagheer', '27');
  console.log(a.develop())

  let title:string = "sagheer";
  let flag:boolean = true;
  console.log(title, flag);
  let b: Developer = new Developer("raja", "29")

  class Car {
      brand: string;
      price: number;

      constructor(brand: string, price:number){
          this.brand = brand;
          this.price = price

      }
  }

  let car = new Car("hyundai", 2000)
  console.log(car.brand, car.price+100)
