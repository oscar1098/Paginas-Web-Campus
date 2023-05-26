let num,suma;

function divisores (numero){
    suma = 0
    for(let i = 1; i< numero; i++){
        if ( numero%i == 0){
            suma+= i
        }
    }
    return suma;
}

function numAmigos(num1,num2){
    let amigo1 = divisores(num1);
    let amigo2 = divisores(num2);

    if (amigo1 == num2 && amigo2 == num1){
        document.write(`${num1} y ${num2} son amigos`)
    }else{
        document.write(" No son amigos")
    }
}

let num1 = parseInt(prompt("Ingrese el numero 1"));
let num2 = parseInt(prompt("Ingrese el numero 2"));

numAmigos(num1,num2)