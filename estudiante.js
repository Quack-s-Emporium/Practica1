import Persona from "./persona.js"
export default class Estudiante extends Persona{

    constructor(nombre, fechaNac, genero, numeroCuenta,correo,escuela,){

        super(nombre,fechaNac,genero);
        this._numeroCuenta = numeroCuenta;
        this._correo = correo;
        this._escuela = escuela;

    }

    getNumeroCuenta(){
        return this._numeroCuenta = numeroCuenta;
    }

    getPerfil(){
        return `${this._numeroCuenta} ${this._nombre.getNombreCompleto()}`
    }

    esIgualA(estudiante){
        if(estudiante.getNumeroCuenta() === this._numeroCuenta){
            return true;
        }
            return false;
    }

    print(){
        console.log(this.getPerfil())
        console.log(this._numeroCuenta);
        console.log(this._correo);
        console.log(this._escuela);
    }
}