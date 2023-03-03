/* 
observer pattern is a design pattern on which you define one to many depedency realtionships from one object known as subjects
to many other obejcts known as observers these observers can be just function which watch subject and wait for some signal or
trigger from the subject before they run kind remind an event listner, they useful for creating event handling systems 
*/

/*
    Observer Design Pattern -> https://www.youtube.com/watch?v=45TeJEmcqk8
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Subject()
{
  this.observers = [] // array of observer functions
}

Subject.prototype = {
  subscribe: function(fn)
  {
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove)
  {
    this.observers = this.observers.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  fire: function()
  {
    this.observers.forEach( fn => {
      fn.call()
    })
  }
}

const subject = new Subject()

function Observer1()
{
  console.log("Observer 1 Firing!")
}

function Observer2()
{
  console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire() 

subject.unsubscribe(Observer1)
subject.fire()