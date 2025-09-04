function definircategoria(idade){
if(idade<=12){
    console.log("crianca")
}

else if(idade<=17 && idade>=13){
    console.log("adolescente")
}

else if(idade>=18 && idade<=59){
    console.log("adulto")
}

else{
    console.log("idoso")
}

}
definircategoria(90)