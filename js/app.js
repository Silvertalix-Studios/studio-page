function $(element) {
    return document.querySelector(element)
}

function typeWriter(text, element, delay = 100, startAfter = 0) {
    let i = 0
    let textArray = text.split("\n")
    setTimeout(function() {
        let typeWriterInterval = setInterval(() => {
            if (i < textArray.length && textArray[i] === "") {
                element.innerHTML += "<br>"
                i++
            }
            else if (i < textArray.length) {
                element.innerHTML += textArray[i].charAt(0)
                textArray[i] = textArray[i].slice(1)
            }
            else {
                clearInterval(typeWriterInterval)
            }
        }, delay)
    }, startAfter)
}

let FOVPASSED = false

function checkFOV() {
    if (window.innerHeight >= window.innerWidth) {
        $("#content").innerHTML = ""
        let text = document.createElement("p")
        text.id = "text"
        text.innerHTML = "Please rotate your device and refresh the page!"
        text.style.width = "100vw"
        text.style.height = "100vh"
        text.style.position = "fixed"
        text.style.textAlign = "center"
        text.style.color = "red"
        text.style.fontSize = "2vh"
        text.style.textShadow = "1vh 1vh 1vh darkred"
        document.body.appendChild(text)
        document.body.onclick = () => {
            location.reload()
        }
    }
    else {
        if (FOVPASSED === false) {
            typeWriter("Agenticy \n Casual \n Delphi \n Featherwisker \n Galactic Dreams \n Jay \n Mds \n Shoma \n Rose \n Taseen \n The Apparation", $("#info"), 100, 3000)
            FOVPASSED = true
        }
    }
}

setInterval(checkFOV, 1000)
checkFOV()
