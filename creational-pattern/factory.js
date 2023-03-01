// developer object constructor

function Developer(name)
{
    this.name = name;
    this.type = "Developer"
}

// tester object constructor

function Tester(name)
{
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory(){
    // we have used this.create in order to use 'create' as property of function
    this.create = (e_name, type) => {
        switch (type) {
            case 1:
                return new Developer(e_name)
                break;
            case 2:
                return new Tester(e_name)
                break;
        }
    }
}

function say()
{
    console.log(`Hi i am ${this.name} and i am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("asghar", 1))
employees.push(employeeFactory.create("ibraheem", 2))
employees.push(employeeFactory.create("qasim", 1))
employees.push(employeeFactory.create("zia", 2))

employees.forEach(emp => {
    say.call(emp)
})