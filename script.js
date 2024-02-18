let text = prompt("Введіть свій текст: "),
    sumbolIndex = 0,
    stopSumbol = "$@<>{}?/\|%&!#"

let textTransform = function (userText) {
    console.log(userText)
    // for (let j = 0; j < 50; j++) {
    //     if (userText[j] === " ") {
    //         userText.slice[j]
    //     }
    // }
    // while (userText[sumbolIndex] === " ") {
    //     // if (userText[sumbolIndex] !== " ") {
    //     //     break
    //     // }
    //     userText = userText.slice(sumbolIndex)
    //     sumbolIndex++
    //     // console.log(sumbolIndex)
    // }
    let startIndex = 0
    for (let j = 0; j <= userText.length; j++) {
        if (userText[j] !== " ") {
            console.log(userText.length)
            console.log(userText[j])
            console.log("Yes")
            startIndex = j
            break
        }
    }
    userText = userText.slice(startIndex)
    for (let i = 0; i <= userText.length; i++) {
        if (stopSumbol.includes(userText[i])) {
            let textCat1 = userText.slice(0, i),
                textCat2 = userText.slice(i + 1)
            userText = textCat1 + textCat2
            console.log(text)
        }
    }
    // let k = userText.length
    // console.log(k)
    // for (let k = userText.length; k >= 0; k--) {
    let wordIndex = 0
    for (let n = userText.length - 1; n >= 0; n--) {
        if (userText[n] !== " ") {
            console.log(userText.length)
            console.log(userText[n])
            console.log("Yes")
            wordIndex = n
            break
        }
    }
    console.log(wordIndex)
    userText = userText.slice(0, wordIndex + 1)
    // k--
    // }
    text = userText
    console.log(text)
}

textTransform(text)