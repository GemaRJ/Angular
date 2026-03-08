/* 
clase -> construct atributos y métodos
*/
export class tareaClase {
  constructor(
    private nombre: string,
    private responsable: string,
    private definicion: string,
    private fecha: string,
    private prioridad: string,
    private complemento: string,
  ) {}

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre: string) {
    this.nombre = nombre;
  }

  get getResponsable() {
    return this.responsable;
  }

  set setResponsable(responsable: string) {
    this.responsable = responsable;
  }

  get getDefinicion() {
    return this.definicion;
  }

  set setDefinicion(definicion: string) {
    this.definicion = definicion;
  }

  get getFecha() {
    return this.fecha;
  }
  
  set setFecha(fecha: string) {
    this.fecha = fecha;
  }

  get getPrioridad() {
    return this.prioridad;
  } 

  set setPrioridad(prioridad: string) {
    this.prioridad = prioridad;
  }

  get getComplemento() {
    return this.complemento;
  }

  set setComplemento(complemento: string) {
    this.complemento = complemento;
  }

  // define los metodos que quieras
}

export interface tarea {
  nombre: string;
  responsable: string;
  fecha: string;
  descripcion: string;
  prioridad: number;
  complemento: string;
}