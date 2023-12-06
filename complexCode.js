/* 
   Filename: complexCode.js
   Description: This code demonstrates a complex and sophisticated implementation of a hierarchical organizational structure in JavaScript.
*/

// Class representing an Employee
class Employee {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    this.subordinates = [];
  }

  addSubordinate(employee) {
    this.subordinates.push(employee);
  }

  removeSubordinate(employee) {
    const index = this.subordinates.findIndex(emp => emp === employee);
    if (index !== -1) {
      this.subordinates.splice(index, 1);
    }
  }

  getSubordinates() {
    return this.subordinates;
  }

  printHierarchy(indentLevel = 0) {
    const indent = "    ".repeat(indentLevel);
    console.log(indent, "- ", this.name, "(", this.title, ")");

    for (const subordinate of this.subordinates) {
      subordinate.printHierarchy(indentLevel + 1);
    }
  }
}

// Usage example of the hierarchical organizational structure
const ceo = new Employee("John Doe", "CEO");

const cfo = new Employee("Alice Smith", "CFO");
const cto = new Employee("Bob Johnson", "CTO");
const coo = new Employee("Eva Williams", "COO");

const manager1 = new Employee("Man1", "Manager");
const manager2 = new Employee("Man2", "Manager");
const manager3 = new Employee("Man3", "Manager");

const employee1 = new Employee("Emp1", "Employee");
const employee2 = new Employee("Emp2", "Employee");
const employee3 = new Employee("Emp3", "Employee");
const employee4 = new Employee("Emp4", "Employee");
const employee5 = new Employee("Emp5", "Employee");
const employee6 = new Employee("Emp6", "Employee");

ceo.addSubordinate(cfo);
ceo.addSubordinate(cto);
ceo.addSubordinate(coo);

cfo.addSubordinate(manager1);
cfo.addSubordinate(manager2);

cto.addSubordinate(manager3);

manager1.addSubordinate(employee1);
manager1.addSubordinate(employee2);

manager2.addSubordinate(employee3);
manager2.addSubordinate(employee4);

manager3.addSubordinate(employee5);
manager3.addSubordinate(employee6);

ceo.printHierarchy();
