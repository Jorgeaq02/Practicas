const input = prompt("Por favor, ingresa un número para ver su tabla de multiplicar:");
const numero = parseFloat(input);

if (!isNaN(numero) && numero >= 0) {
  // Mostrar la tabla de multiplicar del número ingresado
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("Por favor, introduce un número válido mayor o igual a 0. No están permitidas las letras ni los números negativos.");
}
