let continenteHabitantes = 1000000000,
    paisHabitantes = 51520000,
    departamentoHabitantes = 2185000,
    ciudadHabitantes = 581130,
    barrioHabitantes = 15000,
    direccionHabitantes = 3,
    esTercerMundista = true,
    idioma;

const continenteNombre = "America",
    paisNombre = "Colombia",
    departamentoNombre = "Santander",
    ciudadNombre = "Bucaramanga",
    barrioNombre = "Mutis",
    direccionNombre = "Direccion";
    

console.log(`${continenteNombre} tiene ${continenteHabitantes} habitantes\n${paisNombre} tiene ${paisHabitantes} habitantes\n${departamentoNombre} tiene ${departamentoHabitantes} habitantes\n${ciudadNombre} tiene ${ciudadHabitantes} habitantes\n${barrioNombre} tiene ${barrioHabitantes} habitantes\n${direccionNombre} tiene ${direccionHabitantes} habitantes`);

idioma = "Español";

console.log(`\n${paisNombre} de  ${continenteNombre} con idioma ${idioma} es Tercermundista ${esTercerMundista}`);

mitadPoblacion = paisHabitantes/ 2;

console.log(`\nCada mitad de ${paisNombre} se diviera a la mitad tendria ${mitadPoblacion}`);

console.log(`\nAumenta la poblacion de ${paisNombre} en en 1000000 serian ${paisHabitantes += 1000000}`);

6000000 < paisHabitantes ? console.log(`\n${paisNombre} tiene mas habitantes que Finlandia`) : console.log(`\ntiene menos habitantes que Finlandia`);

33000000 < paisHabitantes ? console.log(`\n${paisNombre} tiene mas habitantes que un pais promedio`) : console.log(`\ntiene menos habitantes que un pais promedio`);

let descripcion = `\n${paisNombre} esta en ${continenteNombre}, y ${ciudadNombre} que esta en el departamento ${departamentoNombre} tiene un barrio llamado ${barrioNombre} y sus ${barrioHabitantes} personas hablan ${idioma}`;

console.log(descripcion);

let arreglo = ['apple','kiwi','cherry','strawberry','coconut','cocoa','orange','pineapple','pear','lemon']


for(const fruit of arreglo){
    console.log(`
    nombre: ${fruit}
    1.${fruit.length}
    2.${fruit.includes()}
    3.${fruit.trimStart()}
    4.${fruit.trimEnd()}
    5.${fruit.replace((fruit[0] + fruit[1]), 'sisi')}
    6.${fruit.slice(0,3)}
    7.${fruit.split("-")}
    8.${fruit.toUpperCase()}
    9.${fruit.toLowerCase()}
    `);
}



















