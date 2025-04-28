let countEl = document.getElementById("count")
let reduceEl = document.getElementById("reduce")
let count = 0
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset")

function increment() {
    count += 1
    countEl.textContent = count
}

function reduction() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countSeperator = count + " - "
    saveEl.textContent += countSeperator
    console.log(count)
}

function reset() {
    countEl.textContent = 0
    count = 0
}