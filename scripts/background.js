document.querySelector("#bg-button").addEventListener("click", function (e) {
    const backgroundClass = document.querySelector("body").classList.value
    
    console.log(e)

    if (backgroundClass === "purple-bg") {
        document.querySelector("body").classList.replace("purple-bg", "yellow-bg")
        document.querySelector("#bg-button").classList.toggle("yellow-text")
        document.querySelector("#footer-link").classList.toggle("yellow-text")
    } else if (backgroundClass === "yellow-bg") {
        document.querySelector("body").classList.replace("yellow-bg", "purple-bg")
        document.querySelector("#bg-button").classList.toggle("yellow-text")
        document.querySelector("#footer-link").classList.toggle("yellow-text")
    }
})