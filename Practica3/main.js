// Mapa del DNI y de Persona
const personasMap = new Map();

const persona1 = new Persona("Manolo", "García", "Toledo", 30, "Futbolista", true);
const persona2 = new Persona("Maria", "Gomez", "Madrid", 25, "Magisterio", false);
const persona3 = new Persona("Carlos", "Lopez", "Albacete", 35, "Bachillerato", true);

// Agregar personas con el DNI al mapa
personasMap.set("12345678A", persona1);
personasMap.set("23456789B", persona2);
personasMap.set("34567890C", persona3);

// Ordenar el mapa por DNI
const personasMapClaveOrdenado = new Map([...personasMap.entries()].sort());

// Ordenar el mapa por edad 
const personasMapEdadOrdenado = new Map([...personasMap.entries()].sort((a, b) => a[1].edad - b[1].edad));

// Tabla
function mostrarMapEnTabla(map) {
    const tabla = document.createElement("table");
    tabla.innerHTML = `
        <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Población</th>
            <th>Edad</th>
            <th>Estudios</th>
            <th>Carnet de Conducir</th>
        </tr>
    `;

    for (const [dni, persona] of map) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${dni}</td>
            <td>${persona.nombre}</td>
            <td>${persona.apellidos}</td>
            <td>${persona.poblacion}</td>
            <td>${persona.edad}</td>
            <td>${persona.estudios}</td>
            <td>${persona.carnetDeConducir ? 'Sí' : 'No'}</td>
        `;
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarMapEnTabla(personasMapClaveOrdenado);
});
