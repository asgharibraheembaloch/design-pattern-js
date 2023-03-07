/* 
Builder is a creational design pattern that lets you construct complex objects step by step. 
The pattern allows you to produce different types and representations of an object using the same 
construction code
*/

function Person(name, weight, height, gender)
{
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
}

function PersonBuilder(name, gender)
{
    this.name = name
    this.gender = gender

    // adding setter method on the personbuilder
    this.setWeight = function(weight)
    {
        this.weight = weight
        return this;
    }

    this.setHeight = function(height)
    {
        this.height = height;
        return this;
    }

    // we are seprating object construction from its representation
    this.build = function()
    {
        return new Person(this.name, this.weight, this.height, this.gender)
    }

}

// ......................

// const patrick = new Person('Patrick',5, 2.2, 'male');

const devsage = new PersonBuilder('Devsage', 'male').setWeight(20).setHeight(100).build()
console.log(devsage)
