/* 
mediator pattern allows you define object called mediator that encapsulate how some set of obeject interact with each other
, lets say we have three object these objects need to communicate with each other somehow to share information, instead of 
these object share information to and from each other these objects send information to just one medaitor object, and mediator
is resposible for handling those messages and decide where those mesages need to go
*/

/*
    Mediator Design Pattern -> https://youtu.be/ZuhgOu-DGA4
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/


function Member(name)
{
  this.name = name
  this.chatroom = null
}

Member.prototype = {
  send: function(message, toMember)
  {
    this.chatroom.send(message, this, toMember)
  },
  receive: function(message, fromMember)
  {
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

function Chatroom()
{
  this.members = {}
}

Chatroom.prototype = {
  addMember: function(member)
  {
    this.members[member.name] = member
    member.chatroom = this
  },
  send: function(message, fromMember, toMember)
  {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const bob = new Member("Bob")
const john = new Member("John")
const tim = new Member("Tim")

chat.addMember(bob)
chat.addMember(john)
chat.addMember(tim)

bob.send("Hey, John", john)
john.send("What's up, Bob", bob)
tim.send("John, are you ok?", john)