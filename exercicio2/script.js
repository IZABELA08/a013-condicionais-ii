let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

// utilizando switch-case

switch(nacionalidade){
    case "brasileira":
        console.log("NACIONALIDADE VALIDA")
        break;
     case "argentina":
        console.log("NACIONALIDADE VALIDA")
        break;
    case "uruguaia":
        console.log("NACIONALIDADE VALIDA")
        break;
    case "chilena":
        console.log("NACIONALIDADE VALIDA")
        break;
    case "colambiana":
        console.log("NACIONALIDADE VALIDA")
        break;
    default:
        console.log('NACIONALIDADE NÃO VALIDA')

}