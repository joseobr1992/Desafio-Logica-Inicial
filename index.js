/*
Desafio Classificador de nível de Herói
*/

let nomeHeroi = "José"
let fase = 1
let repeteFase = 1000
let XP = fase * repeteFase
const eloHeroi = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]


if (XP < 1000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[0]}`)
} else if (XP >= 1001 && XP <= 2000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[1]}`)
} else if (XP >= 2001 && XP <= 5000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[2]}`)
} else if (XP >= 5001 && XP <= 7000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[3]}`)
} else if (XP >= 7001 && XP <= 8000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[4]}`)
} else if (XP >= 8001 && XP <= 9000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[5]}`)
} else if (XP >= 9001 && XP <= 10000) {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[6]}`)
} else {
    console.log(`${nomeHeroi} seu elo é ${eloHeroi[7]}`)
}
