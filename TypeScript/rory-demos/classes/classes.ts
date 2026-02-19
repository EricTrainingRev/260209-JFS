// create a Person class with fields, methods, constructors:
class Person {
  // make the property readonly, similar to final in Java
  // We have to assign this in the constructor
  readonly name: string;

  private password?: string;

  // protected fields, can be accessed within the sub-class
  protected address?: string;
  
  // Getter/Setter for password, address
  getPassword() {
    return this.password;
  }
  setPassword(password: string) {
    this.password = password;
  }



  // constructor:
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

class Student extends Person {
  private school: string

  constructor(name: string, password: string, school: string) {
    super(name, password);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

let person = new Person("Leon", "raccoons");
console.log(person.getPassword());
person.setPassword("new password");
console.log(person.getPassword());

let student = new Student("Harry Potter", "hedwig123", "Hogwarts");
console.log(student.getSchool());
console.log(student.getPassword());

// person.name = "something else";