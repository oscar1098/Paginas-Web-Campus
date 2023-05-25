let cantidad,nombre,salto,atleta;

nombre = '';
record = 0;

cantidad =parseInt(prompt('Ingrese la cantidad de atletas'));

for(let i = 1; i <= cantidad; i++){
    atleta = prompt('Ingrese el nombre del atleta');
    salto = parseFloat(prompt('Ingrese el salto en metros'));
    if(salto > record){
        record = salto
        nombre = atleta
    }
}

if (record > 15.50){
    document.write(`Felicidades ${nombre} gano la medalla de oro y gano 500 millones con ${record} metros`)
}else{
    document.write(`Felicidades ${nombre} gano la medalla de oro con ${record} metros`)
} 