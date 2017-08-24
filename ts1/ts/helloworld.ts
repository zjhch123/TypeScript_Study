interface Person {
  name: string;
  age: number;
}

function greeting(person: Person): void {
  console.log(person.name + ', Hello, you are ' + person.age);
}

let user = {name: 'tom', age: 11};

greeting(user);

class Student {
  name: string;
  className: string;
  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }
  say() {
    console.log(`Hi, I'm ${this.name}, I'm in ${this.className}`)
  }
}

let stu:Student = new Student('tom', 'class one');
stu.say();

