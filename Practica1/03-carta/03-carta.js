// Función para obtener la entrada del usuario y eliminar espacios en blanco al principio y al final
function obtenerValor(mensaje) {
    return prompt(mensaje).trim();
  }
  
  // Solicitar al usuario los valores para reemplazar después esos valores en la carta
  var nombre = obtenerValor("Por favor, ingrese su nombre:");
  var curso = obtenerValor("Por favor, ingrese el nombre del curso:");
  var localidad = obtenerValor("Por favor, ingrese la localidad:");
  var fechaInicio = obtenerValor("Por favor, ingrese la fecha de inicio:");
  var fechaFin = obtenerValor("Por favor, ingrese la fecha de fin:");
  
  // Crear la carta con las variables reemplazadas por el usuario
  var carta = `
  Estimado ${nombre},
  
  Bienvenido al curso de ${curso} que se celebrará en la localidad de ${localidad} entre las fechas ${fechaInicio} y ${fechaFin}. Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle.
  
  Atentamente,
  La dirección.
  `;
  
  // Mostrar la carta final con los cambios hechos por el usuario
  alert("La carta final es:\n\n" + carta);
  