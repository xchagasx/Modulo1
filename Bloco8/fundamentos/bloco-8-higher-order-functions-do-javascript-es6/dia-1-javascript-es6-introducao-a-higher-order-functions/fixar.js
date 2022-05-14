const manha = () => {
    return 'Acordando!!';
}

const coffe = () => {
    return 'Bora tomar café!!';
}

const sono = () => {
    return 'Partiu dormir!!';
}
// Ao chamar a função doingThings:
const doingThings = (call) => call();

console.log(doingThings(manha));

console.log(doingThings(coffe));

console.log(doingThings(sono));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!