class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}

class NewEmployee extends Employee {
  constructor(position, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.position = position;
  }
  descriptionOfJob() {
    console.log(
      "Hi! My name is " +
        this.name +
        ", and I will be making" + " " +
        this.salary +
        ", as your new " + " " +
        this.position +
        "!"
    );
  }

  experience() {
    console.log(
      "Welcome, " +
        this.name +
        ", our new" + " " +
        this.position +
        ", who has been in the industry for 10 years!"
    );
  }
  degree() {
    console.log(
      "This is our newest " +
        this.position +
        ", " +
        this.name +
        ", who was hired because she has an Associates Degree in Business."
    );
  }
}

let employee1 = new NewEmployee(
  "Manager",
  "Legrecia Johnson",
  90000,
  "03/29/2023"
);
let employee2 = new NewEmployee(
  "Designer",
  "Lexus Lendhart",
  75000,
  "03/29/2023"
);
let employee3 = new NewEmployee(
  "Sales Associate",
  "Lyndsey Gerton",
  50000,
  "03/29/2023"
);

employee1.descriptionOfJob();
employee2.experience();
employee3.degree();
