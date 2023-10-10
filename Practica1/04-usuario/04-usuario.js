// Aquí solicito al usuario su correo electrónico, para luego proporcionarle el usuario.
var email = prompt("Por favor, ingresa tu dirección de correo electrónico:");

// Elimina los posibles espacios en blanco que hay al empiece y al final del correo electrónico que proporciona el usuario
email = email.trim();

// Con esta función intento encontrar el "@" 
var atIndex = email.indexOf('@');

// Verifico si hay o no "@"
if (atIndex !== -1) {
  // Obtengo el nombre del usuario antes del "@"
  var username = email.substring(0, atIndex);

  // Mostrar el nombre de usuario al usuario por pantalla
  alert("Tu nombre de usuario es: " + username);
} else {
  // Si no se encuentra la "@", mostrar un mensaje de error
  alert("La dirección de correo electrónico ingresada no es válida.");
}
