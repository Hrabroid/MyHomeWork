function helloUser (name) {
    let message = 'Hello, ' + name
    console.log(message)
}
helloUser('Ann')
helloUser('John')
helloUser('Alex')

let numbers = [12, 43, 1, 7, 55]

function comparison () {
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] > 10)
        }
    }

comparison()

function calc (num1, num2,) {
    return num1 - num2
    }
    const result = calc(2, 4)
    console.log(result)