let userMatches = getMatches(10, 3);
let ranked = setRanked(userMatches);

function getMatches(wins, defeat) {
    let matches = wins - defeat;

    return matches;
}

function setRanked (matches) {
    let rank;

    switch (true) {
        case (matches < 10):
            rank = "Ferro";
            break;
        case (matches <= 20):
            rank = "Bronze";
            break;
        case (matches <= 50):
            rank = "Prata";
            break;
        case (matches <= 80):
            rank = "Ouro";
            break;
        case (matches <= 9000):
            rank = "Diamante";
            break;
        case (matches <= 100):
            rank = "Lendário";
            break;
        case (matches >= 101):
            rank = "Imortal";
            break;
        default:
            rank = "Madeirinha";       
    }
    return rank;
}

console.log(`O Herói tem de saldo ${userMatches} e está no nível de rank ${ranked}`)