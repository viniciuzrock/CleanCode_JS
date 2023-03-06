
# Clean Code - JavaScript

## **1. Nomenclatura**
### Os nomes de funções e variáveis devem ser descritivos para rápida compreensão do código.
> Exemplos de nomeações:
>> ***fullName***
>>> Para o caso de recebermos o nome e sobrenome de um usuário separadamente, e no fim do processo tivermos que concatená-lo, ao invés de colocarmos apenas "*name*".

>> ***currentDate***
>>> Para o caso de manipularmos a data atual, uma vez que usar apenas "*date*" pode ser referente a uma data fixa ou algo do tipo.

>> ***firstNumber***
>>> Para o caso da aplicação trabalhar com caracteres numéricos e seja necessário fazer uma operação matemática ou concatenação.

### *Variáveis:*
```JavaScript
//Evite
const d = new Date()
const a = 2
const b = "Fulano"

//Recomendado
const currentDate = new Date();
const numberOfTests = 2;
const studentName = "Fulano";
```

### *Funções:*
```JavaScript
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
```

### *Objetos:*
```JavaScript
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
```
## **2. Formatação**

### Identação, espaçamento e o uso de chaves devem seguir um padrão definido na aplicação. Um recurso que pode ser utilizado para automatizar isso é o [Prettier](https://prettier.io/).

### *Evitar:*
```JavaScript
if(x===5) console.log("primeira condição")
else console.log("segunda condição")
```
### *Recomendado:*
```JavaScript
if (x === 5) {
    console.log("primeira condição");
} else {
    console.log("segunda condição");
}
```

## **3. Comentários**

### Usados para documentar questões lógicas de funções, entre outras coisas. Não devem ser usados de forma desnecessária ou com redundância.
### *Exemplo*
```JavaScript
function sumNumbers(x, y){
    return x + y;
}
```
### *Evitar*
```JavaScript
//esta é uma função que recebe dois números como parâmetro e retorna a soma deles
```
### *Recomendado*
```JavaScript
/**
 * Retorna a soma de dois números
 * @param (number) x - Primeiro número
 * @param (number) y - Segundo número
 * @returns (number) - Resultado da soma
 */
```

## **4. Estruturas**

### Algumas estruturas podem apresentar redundância, então devemos simplificar as informações
### *Exemplo de negação dupla, onde temos o operador de negação ( ! ) e a negação já informada no nome da variável:*
```JavaScript
//evite
if(!isNotValid){
}
//recomendado
if(isNotValid){
}
```
### *Exemplo do uso de if's, onde podemos substituí-lo usando apenas um operador ternário:*
```JavaScript
//evite
let msg1;
if(sucesso){
    msg1 = "Sucesso"
} else {
    msg1 = "Falha"
}
//recomendado
const msg2 = sucesso ? "Sucesso" : "Falha";
```

Vídeo base: https://www.youtube.com/watch?v=0SFRhpzHw94
