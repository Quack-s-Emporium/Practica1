export default class Nombre{

    constructor(nombre,apePat,apeMat){
        this._nombre=nombre;
        this._apePat=apePat
        this._apeMat=apeMat
    }

    getNombre(){
        return this._nombre.toUpperCase();
    }

    setApePat(apePat){
        this._apePat = apePat;
    }
    
    setApeMat(apeMat){
        this._apeMat = apeMat;
        
    }
    getApeMat(){
        return this._apeMat.toUpperCase();
    }

    getNombreCompleto() {
        return `${this._nombre} ${this._apePat} ${this._apeMat}`
    }

    getInvertido() {
        return `${this._apePat} ${this._apeMat} ${this._nombre}`
    }

    getIniciales() {
        return `${this._nombre.charAt(0)}${this._apePat.charAt(0)}${this._apeMat.charAt(0)}`
    }
}