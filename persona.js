export default class Persona{
    /**
     * 
     * @param {string} genero 
     * @param {FechaNacimiento} fechanac 
     * @param {Nombre} nombre 
     */

constructor(genero,fechaNac,nombre){
    this._nombre = nombre;
    this._fechaNac = fechaNac;
    this._genero = genero;
}

getPerfil(){
    return `${this._genero} ${this._fechaNac.getFormatoCorto()} ${this._nombre.getNombreCompleto()}`
}

}