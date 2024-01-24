const numbers = [1, 2, 3, 5, 8, 13]

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0)
        alert(numbers[i])
}

let color = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый']

for (let j = color.length - 1; j >= 0; j--) {
    console.log(color[j])
}