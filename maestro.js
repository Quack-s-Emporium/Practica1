import Persona from "./persona.js"
export default class Maestro extends Persona{

    constructor(nombre, fechaNac, genero, sueldo,numTrab,tipo){
    
    super(nombre,fechaNac,genero)
    this._sueldo = sueldo;
    this._numTrab = numTrab;
    this._tipo = tipo;
    }

    print(){
    console.log(this.getPerfil());
    console.log(this._sueldo);
    console.log(this._numTrab);
    console.log(this._tipo);
    }
}