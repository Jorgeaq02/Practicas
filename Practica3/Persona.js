class Persona {
  constructor(nombre, apellidos, poblacion, edad, estudios, carnetDeConducir) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.poblacion = poblacion;
      this._edad = null;
      this._estudios = null;
      this.carnetDeConducir = carnetDeConducir;

      if (typeof edad === 'number') {
          this._edad = edad;
      } else {
          alert('No se admiten letras. Solo se admiten números. ¡Es una edad!');
      }

      if (typeof estudios === 'string') {
          this._estudios = estudios;
      } else {
          alert('Esto no es un estudio. Solo se admiten letras. Añade estudios válidos');
      }
  }

  // Getters y setters 
  get edad() {
      return this._edad;
  }

  set edad(nuevaEdad) {
      if (typeof nuevaEdad === 'number') {
          this._edad = nuevaEdad;
      } else {
          alert('No se admiten letras. Solo se admiten números. ¡Es una edad!');
      }
  }

  get estudios() {
      return this._estudios;
  }

  set estudios(nuevosEstudios) {
      if (typeof nuevosEstudios === 'string') {
          this._estudios = nuevosEstudios;
      } else {
          alert('Esto no es un estudio. Solo se admiten letras. Añade estudios válidos');
      }
  }
}
