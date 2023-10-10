// Inicializo una varible para poder empezar dentro del buble
let edad = -1; // La variable la inicializo en negativo para que así pueda entrar y que se ejecute el bucle

while (isNaN(edad) || edad < 18) {
  const entrada = prompt("Introduzca su edad: ");
  
  // Convertimos la entrada a un número
  edad = parseInt(entrada);

  // Verificamos si la entrada es un número válido. Si no es un número válido, salta un mensaje de error.
  if (isNaN(edad)) {
    console.log("Por favor, introduzca un número válido. No se admiten letras.");
  } else if (edad < 18) {
    console.log("Sigue introduciendo números hasta que iguales o superes el número clave");
  }
}

console.log("¡Completado!");


