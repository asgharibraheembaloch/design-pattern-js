# Design Pattern
 A design pattern is a general and reusable solution for a common problem that occurs in software design (geeksforgeeks.org). Design patterns are not specific to any programming language, but rather represent an idea or a principle that can be applied in different contexts (geeksforgeeks.org). Design patterns can help you make your code more flexible, reusable, and maintainable by providing well-tested and proven development paradigms (geeksforgeeks.org). There are three main types of design patterns: creational, structural, and behavioral (freecodecamp.org). Creational patterns deal with how objects are created and initialized. Structural patterns deal with how objects are composed and related. Behavioral patterns deal with how objects communicate and interact (en.wikipedia.org). 

- ## Behavioral Patterns
Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

1. ### Chain of Responsibility

> Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

2. ### Command

> Turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request's execution, and support undoable operations.

3. ### Iterator

> Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

4. ### Mediator

> Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

5. ### Memento

> Lets you save and restore the previous state of an object without revealing the details of its implementation.

6. ### Observer

> Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.


7. ### State

> Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.


8. ### Strategy

> Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.


9. ### Template Method

> Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

10. ### Visitor

> Lets you separate algorithms from the objects on which they operate.

- ## Creational Patterns
Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

1. ### Factory Method

> Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will  be created.

2. ### Abstract Factory

> Lets you produce families of related objects without specifying their concrete classes.

3. ### Builder

> Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

4. ### Prototype

> Lets you copy existing objects without making your code dependent on their classes.

5. ### Singleton

> Lets you ensure that a class has only one instance, while providing a global access point to this instance.

- ## Structural Patterns
Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

1. ### Adapter

> Allows objects with incompatible interfaces to collaborate.

2. ### Bridge

> Lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

3. ### Composite

> Lets you compose objects into tree structures and then work with these structures as if they were individual objects.

4. ### Decorator

> Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

5. ### Facade

> Provides a simplified interface to a library, a framework, or any other complex set of classes.

6. ### Flyweight

> Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

7. ### Proxy

> Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing  you to perform something either before or after the request gets through to the original object.