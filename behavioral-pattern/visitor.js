/* 
The visitor design pattern is a way of separating an algorithm from an object structure on which it operates. 
It allows you to add new operations to existing objects without modifying them (en.wikipedia.org). 
The visitor pattern involves two types of classes: a visitor class that defines a method for each type of 
element in the object structure, and an element class that accepts a visitor object and calls its method according 
to its own type (geeksforgeeks.org). For example, you can use the visitor pattern to implement different actions 
on a collection of shapes, such as drawing, resizing, or calculating area (baeldung.com).
*/

/*
    Visitor Design Pattern -> https://youtu.be/x-Gx0Ym1Di0
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const devsage = new Employee("DevSage", 10000)
console.log(devsage.getSalary())

function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)
console.log(devsage.getSalary())