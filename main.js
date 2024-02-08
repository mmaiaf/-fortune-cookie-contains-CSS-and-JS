const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const textLucky = document.querySelector("#phraseLucky")
const clickCookie = document.querySelector("#clickCookie")
const clickAgain = document.querySelector("#clickAgain")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]

function luckyButton(){
    let randomPhrase = Math.floor(Math.random()*fortune.length)
    toggleScreen()

    screen2.querySelector("p").innerText = fortune[randomPhrase]
}

function gameAgain(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterPress(e){
    if(e.key == "Enter" && screen1.classList.contains("hide")){
        gameAgain()
    } else if(e.key == "Enter" && screen2.classList.contains("hide")){
        luckyButton()
    }
}


clickCookie.addEventListener('click', luckyButton)
clickAgain.addEventListener('click', gameAgain)
document.addEventListener("keypress", enterPress)