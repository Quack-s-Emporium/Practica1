import Persona from "./persona.js"
export default class Estudiante extends Persona{

    constructor(nombre, fechaNac, genero, numeroCuenta,correo,escuela,){

        super(nombre,fechaNac,genero);
        this._numeroCuenta = numeroCuenta;
        this._correo = correo;
        this._escuela = escuela;

    }

    getPerfil(){
        return `${this._numeroCuenta} ${this._nombre.getNombreCompleto()}`
    }

    print(){
        console.log(this.getPerfil())
        console.log(this._numeroCuenta);
        console.log(this._correo);
        console.log(this._escuela);
    }
}