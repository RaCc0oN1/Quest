const input = document.querySelector(".pswd"),
    button = document.querySelector(".check"),
    answer = document.querySelector(".answer");

button.addEventListener("click", () => {
    let inputValue = input.value;
    if (inputValue == 143) {
        answer.href = "https://imgur.com/9FBZxPX"
        answer.innerHTML = "Жми на меня"
        answer.style.display = "block"
    }

    if (inputValue == "Серебряный"){
        answer.href = "https://youtu.be/whxsX9UsGos"
        answer.innerHTML = "Жми на меня"
        answer.style.display = "block"
    }

    if (inputValue == "Шен"){
        answer.href = "https://youtu.be/uhLv3DtUr1M"
        answer.innerHTML = "Жми на меня"
        answer.style.display = "block"
    }

    if (inputValue == "Molly"){
        answer.href = "https://imgur.com/VffZoMY"
        answer.innerHTML = "Жми на меня"
        answer.style.display = "block"
    }
})
