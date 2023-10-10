// Solicitamos al usuario que introduzca un número 
const num = prompt("Introduzca un número: ");

// Redondeamos el número para que no de error con las ","
const numUsuario = parseInt(num);

// Comprobación para ver si el número introducido por el usuario es un número válido o es una letra
if (!isNaN(numUsuario)) {

// Comprobación del número introducido por el usuario es par o es impar.
  if (numUsuario % 2 === 0) {
    console.log(`El número ${numUsuario} que has introducido es par.`);
  } else {
    console.log(`El número ${numUsuario} que has introducido es impar.`);
  }
} else {
  console.log("Por favor, introduzca un número válido. No se admiten letras");
}
