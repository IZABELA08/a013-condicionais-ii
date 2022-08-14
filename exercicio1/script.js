const num = prompt("ESCREVA UM NUMERO: ")

// 1. Utilizando ifs aninhados

    if(num %2 == 0){
        console.log("É DIVISIVEL POR 2")
 if(num %1 == 0){
        console.log("É DIVISIVEL POR 3")
    }
}
  
// 2. Utilizando um operador lógico

    if(num %2 == 0 && num %1 == 0){ 
        console.log('É DIVISIVEL POR 2 OU POR 3 ')

     }

