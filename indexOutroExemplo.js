// Array de heróis, cada um com seu nome e quantidade de experiência
let herois = [
    { nome: "Arthur", experiencia: 7500 },
    { nome: "Lancelot", experiencia: 1500 },
    { nome: "Guinevere", experiencia: 8500 },
    { nome: "Merlin", experiencia: 9500 },
    { nome: "Galahad", experiencia: 500 }
];

// Função para determinar o nível do herói com base na experiência
function determinarNivel(experiencia) {
    if (experiencia < 1000) {
        return "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        return "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        return "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        return "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        return "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        return "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        return "Imortal";
    } else if (experiencia >= 10001) {
        return "Radiante";
    }
}

// Laço de repetição para processar cada herói na lista
for (let heroi of herois) {
    let nivelHeroi = determinarNivel(heroi.experiencia);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelHeroi}`);
}
