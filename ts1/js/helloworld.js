function greeting(person) {
    console.log(person.name + ', Hello, you are ' + person.age);
}
var user = { name: 'tom', age: 11 };
greeting(user);
var Student = (function () {
    function Student(name, className) {
        this.name = name;
        this.className = className;
    }
    Student.prototype.say = function () {
        console.log("Hi, I'm " + this.name + ", I'm in " + this.className);
    };
    return Student;
}());
var stu = new Student('tom', 'class one');
stu.say();
//# sourceMappingURL=helloworld.js.map