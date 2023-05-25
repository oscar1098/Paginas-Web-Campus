let corriente,resistencia,voltaje;

corriente = parseFloat(prompt("Ingrese la corriente en amperios"));
resistencia = parseFloat(prompt("Ingrese la resistencia en ohms"));

voltaje = corriente * resistencia;

document.write(`Voltaje : ${voltaje} V`)