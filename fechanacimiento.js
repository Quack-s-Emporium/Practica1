
         const diaSemana = [
         "Domingo",
         "Lunes",
         "Martes",
         "Miercoles",
         "Jueves",
         "Viernes",
         "Sabado", 
     ];
         const meses = [
         "Enero",
         "Febrero",
         "Marzo",
         "Abril",
         "Mayo",
         "Junio",
         "Julio",
         "Agosto",
         "Septiembre",
         "Octubre",
         ]

export default class FechaNacimiento {
    /**
     * 
     * @param {number} dia Numeros del 1 al 31
     * @param {number} mes Numeros del 1 al 11
     * @param {number} año Año de la fecha de nacimiento
     */
     constructor(dia, mes, año) {
        this._fecha = new Date (año, mes-1, dia);
         
     }    

     /**
     * Metodo de acceso de lectura para el atributo fecha
     */
        getFecha(){
            return this._fecha;
        }
    /**
     * @param {Date} fecha 
     */
        setFecha(fecha){
            if(fecha <= Date.now()){
            this._fecha = fecha;
            return true;
            }
            return false;
        }
    
        getFormatoCorto() {
            return `La fecha es: ${this._fecha.getDate()} / ${this._fecha.getMonth()+1} / ${this._fecha.getFullYear()}`
              
        }
    
        getFormatoExtendido() {
            let dia = diaSemana[this._fecha.getDay()]
            let mes = meses[this._fecha.getMonth()]
            return (`La fecha es: ${dia} ${this._fecha.getDate()} de ${mes} del ${this._fecha.getFullYear()}`)
        }
     
        getEdad(){
            let difMSeg = Date.now() - this._fecha;
            let mSegYear = 1000 * 60 * 60 * 24 * 365
            let edad = (Math.trunc (difMSeg / mSegYear)) ;
            console.log(`Edad: ${edad}`)
    
            return edad;
        }
    }