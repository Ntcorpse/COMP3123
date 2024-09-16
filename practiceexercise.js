//1
const greeter = (myArray, counter) => {
    let greetText = 'Hello';
  
    for (const element of myArray) {
      console.log(`${greetText} ${element}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//2
const capitalize = (str) => {
    const [firstalpha, ...rest] = str;

    return `${firstalpha.toUpperCase()}${rest.join('')}`;
  }

console.log(capitalize('fooBar'));  
console.log(capitalize('nodejs')); 

//3
const colors  = ['red', 'green', 'blue'];
const capitalizedcolors  = colors.map(color => capitalize(color));
console.log(capitalizedcolors);

//4 
const values = [1,60,34, 30, 20, 5];
const filterLessThan20 =  values.filter(value => value < 20);
console.log(filterLessThan20);

//5
const array = [1, 2, 3, 4];
const calculateSum =  array.reduce((acc, current) => acc + current, 0);
const calculateProduct =  array.reduce((acc, current) => acc * current, 1);

console.log(calculateSum);
console.log(calculateProduct);

//6

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
     }
     details() {
        return `Model: ${this.model} Engine ${this.year}`;
     }
}

class Sedan extends  Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
       }
       info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
       }
    }

    const car2 = new Car('Pontiac Firebird', 1976);
    console.log(car2.details());

    const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
