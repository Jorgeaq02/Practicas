// Comprobar si el número que introduce el usuario por pantalla es o no válido
function esNumeroValido(valor) {
  return !isNaN(valor) && isFinite(valor);
}

// Generamos la tabla de multiplicar
function generarTablaDeMultiplicar(numero) {
  var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
  tablaHTML += "<ul>";
  for (var i = 1; i <= 10; i++) {
      tablaHTML += "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";
  }
  tablaHTML += "</ul>";

  // Mostrar la tabla ya generada
  document.getElementById("tablaMultiplicar").innerHTML = tablaHTML;
}

// Función para el clic del botón
function generarTabla() {
  // Obtener el valor del input
  var numero = document.getElementById("numeroInput").value;

  // Verificar si es un número válido
  if (!esNumeroValido(numero)) {
      alert("Solo se admiten números. Por favor, ingresa un número válido.");
      return;
  }

  numero = parseFloat(numero); // Convertir a número

  // Generar y mostrar la tabla de multiplicar
  generarTablaDeMultiplicar(numero);
}

// Agregar evento de clic al botón
document.getElementById("generarBtn").addEventListener("click", generarTabla);
