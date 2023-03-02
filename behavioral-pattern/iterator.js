/* 
iterator pattern allows you to effectivelly loop over some collection of objects, it is common task to traverse and manuplate collection of objects
these collection may be stored as arrays, may be complex like tree or graph, in order to access those collection you may need
access individual items in certain order front to back, back to front, depth first bredth first, if you dealing with trees or graphs
may skip every two element may be three whats so ever, iterator pattern allows you to define yopur own rules on how to traverse some collection of objects
*/

/*
    Iterator Design Pattern -> https://www.youtube.com/watch?v=c85EStPZR8M
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

const items = [1, false, "Devsage", 3.14]

function Iterator(items)
{
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.items.length
  },
  next: function()
  {
    return this.items[this.index++]
  }
}

const iter = new Iterator(items)

console.log(iter.hasNext())

while(iter.hasNext())
  console.log(iter.next())

console.log(iter.hasNext())