function verificacaodenota (nota1, nota2){
let total=(nota1+nota2)/2
if(total>=7){
console.log("voce foi aprovado")
return true
}
else{
console.log("voce foi reprovado")
return false
}
}