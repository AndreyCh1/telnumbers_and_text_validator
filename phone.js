let stopSumbol = " $@<>{}?/\|%&!()№#+"

function phoneNum() {
    let number = prompt("Введіть свій номер: ", "Ваш номер")
    numberTransform(number)
}

const numbersLog = []

let numberTransform = function (userNumber) {
    // console.log(userNumber)
    for (let i = 0; i <= userNumber.length; i++) {
        // console.log("work")
        if (isNaN(userNumber)) {
            alert("Введіть коректний номер телефона! Номер телефона може складатись тільки з 10 цифр! ")
            console.log(userNumber)
            userNumber = prompt("Введіть свій номер: ")
            phoneNum()
        } else if (stopSumbol.includes(userNumber[i])) {
            let numberCut1 = userNumber.slice(0, i),
                numberCut2 = userNumber.slice(i + 1)
            userNumber = numberCut1 + numberCut2
            console.log(i + "." + userNumber) // перевірка першого символа
            console.log("Hello")
        }
    }
    let phoneCut1 = userNumber.slice(0, 3) + "-",
        phoneCut2 = userNumber.slice(3)
    if (userNumber.length === 10) {
        number = phoneCut1 + phoneCut2
        numbersLog.push(number)
        console.log(number)
        console.log(numbersLog)
    } else {
        alert("Введіть коректний номер телефона! Номер телефона може складатись тільки з 10 цифр! ")
        userNumber = false
        console.log(userNumber)
        userNumber = prompt("Введіть свій номер: ")
        phoneNum()
    }
}