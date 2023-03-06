
const isNotValid = true

//evite
if(!isNotValid){

}
//recomendado
if(isNotValid){

}

//evite
let msg1;

if(sucesso){
    msg1 = "Sucesso"
} else {
    msg1 = "Falha"
}

//recomendado
const msg2 = sucesso ? "Sucesso" : "Falha"