var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// create a Person class with fields, methods, constructors:
var Person = /** @class */ (function () {
    // constructor:
    function Person(name, password) {
        this.name = name;
        this.password = password;
    }
    // Getter/Setter for password, address
    Person.prototype.getPassword = function () {
        return this.password;
    };
    Person.prototype.setPassword = function (password) {
        this.password = password;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, password, school) {
        var _this = _super.call(this, name, password) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.getSchool = function () {
        return this.school;
    };
    return Student;
}(Person));
var person = new Person("Leon", "raccoons");
console.log(person.getPassword());
person.setPassword("new password");
console.log(person.getPassword());
var student = new Student("Harry Potter", "hedwig123", "Hogwarts");
console.log(student.getSchool());
console.log(student.getPassword());
// person.name = "something else";
