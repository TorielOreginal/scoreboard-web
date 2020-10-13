var score1
var score2

document.getElementById("increment1").addEventListener('click', () => {
    score1++
    document.getElementById("score1").innerText = `${score1}`
})