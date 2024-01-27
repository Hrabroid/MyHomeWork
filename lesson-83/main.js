const students = {
    Student_1: {
        name: 'Alex',
        age: 36,
        education: 'higher',
        maritalStatus: 'married',
        sayHello(name) {
            console.log(`Hello, ${name}`)
        }
    }
}

console.log(students.Student_1)
students.Student_1.sayHello(`John`)

const users = [
    {
        name: 'Alex',
        age: 36,
        isAdmin: false
    },
    {
        name: 'John',
        age: 43,
        isAdmin: true
    },
    {
        name: 'Ann',
        age: 20,
        isAdmin: false
    }
]

let notAdmins = 0

for (i = 0; i < users.length; i++) {
    let status = users[i].isAdmin
    if (status === false) {
        notAdmins++
    }
}
console.log(notAdmins)



