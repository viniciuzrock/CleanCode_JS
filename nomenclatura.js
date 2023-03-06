//1 Nomeação

//Variáveis
//Evite
const d = new Date()
const a = 2
const b = "Fulano"

//Recomendado
const currentDate = new Date();
const numberOfTests = 2;
const studentName = "Fulano";

//Funções
//Evite
function f(x,y){
    const a = (x+y)/2
    return a
}

//Recomendado
function calculateAverage(number1, number2){
    const average = (number1 + number2)/2
    return average;
}

//Objetos
//Evite
const s = {
    n:"Fulano",
    a:"22"
}

//Recomendado
const student = {
    name: "Fulano",
    age: "22"
};
