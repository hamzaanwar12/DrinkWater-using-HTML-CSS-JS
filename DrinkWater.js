let remaining = document.getElementById("remaining")
let filled = document.getElementById("filled")
let smallcups = Array.from(document.querySelectorAll(".smallCup"))
let bigCup = document.querySelector("#bigCup")
console.log(smallcups)
console.log(bigCup)

// console.log(remaining)
// console.log(filled)

let bigCupEffect = (x) => {
    let height = 12.5
    if (x != 8) {
        filled.style.bottom = "31px";
        if (x > 1)
            height = (height * x)

        remaining.style.height = `${100 - height}%`
        remaining.querySelector("h2").textContent = `${100 - height}L`
        filled.style.height = `${height}%`
        filled.querySelector("h1").textContent = `${height}%`
        filled.classList.add("filledActive")
        remaining.querySelector("h2").textContent = `${100 - height}L`
    }



    if (x == 8) 
    {
        height = 100;
        filled.style.bottom = "25px"
        remaining.style.height = `0%`
        filled.style.height = `100%`
        bigCup.classList.add ("bigCupActive")
    }
    filled.querySelector("h1").textContent = `${height}%`
    // filled.classList.add("filledActive")
}

let checkColorChange = (x) => {
    let i
    if (x < 7)
        i = x + 1
    for (i; i < smallcups.length; i++) {
        if (smallcups[i].classList.contains("smallCupActive"))
            smallcups[i].classList.remove("smallCupActive")
    }
}

let colorChange = (x) => {
    let i

    if (x > 0)
        i = x

    for (i; i >= 0; --i) {
        if (!(smallcups[i].classList.contains("smallCupActive")))
            smallcups[i].classList.add("smallCupActive")
    }
}

for (let i = 0; i < smallcups.length; i++) {
    smallcups[i].addEventListener("click", () => {
        smallcups[i].classList.add("smallCupActive")
        checkColorChange(i)
        colorChange(i)
        bigCupEffect(i + 1)
    })
}


