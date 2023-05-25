let cantidad,notaMayor,notaMenor, nomMayor,nomMenor;
notaMayor = 0;
notaMenor = 100;
contHombres = 0;
contMujeres = 0;
nomMayor ='';
nomMenor = '';

cantidad = parseInt(prompt("Cuantos estudiantes desea ingresar"));

for(let i = 1; i <= cantidad; i++){
    nombre = prompt("Ingrese el nombre");
    sexo = prompt("Ingrese el sexo m/f").toLowerCase();
    nota = parseFloat(prompt("Ingrese la nota definitiva"))
    if (nota > notaMayor){
        notaMayor = nota;
        nomMayor = nombre;
    }
    if (nota < notaMenor){
        notaMenor = nota;
        nomMenor = nombre;
    }

    if (sexo == "m"){
        contHombres++;
    }else{
        contMujeres++;
    }
}

document.write(`
${nomMayor} tiene la nota mas alta con ${notaMayor}<br>
${nomMenor} tiene la menor nota con ${notaMenor}<br>
Cantidad de hombres ${contHombres}<br>
Cantidad de mujeres ${contMujeres}  
`)