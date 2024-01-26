const student = {
    name: 'Alex',
    age: 36,
    education: 'higher',
    maritalStatus: 'married'
}

console.log(student)
console.log('Hello, ' + student.name + '!')

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

let notAdmins =  0

    for (i = 0; i < users.length; i++) {
        let status = users[i].isAdmin
        if (status === false) {
            notAdmins++
        }
    }
    console.log(notAdmins)



