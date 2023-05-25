let estudiante, nota1, nota2, nota3;

estudiante = prompt("Ingrese el nombre del estudiante");
nota1 = parseFloat(prompt("Ingrese la nota1"));    
nota2 =  parseFloat(prompt("Ingrese la nota2")); 
nota3 = parseFloat(prompt("Ingrese la nota3")); 

promedio = (nota1 + nota2 + nota3)/3;

if (promedio <=  3.9){
    document.write(`${estudiante} estudie promedio ${promedio}`);
}else{
    document.write(`${estudiante} becado promedio ${promedio}`);
}