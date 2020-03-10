import FechaNacimiento from "./fechanacimiento.js"
import Nombre from "./nombre.js"
import Persona from "./persona.js";
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js"
import Grupo from "./grupo.js"
class Main{

    constructor(){
        this.fecha = new FechaNacimiento(2,3,2020);
        this.nombre = new Nombre ("Antonio", "Gonzales", "Valenzuela")
        this.persona = new Persona("Masculino", new FechaNacimiento(2,4,2000),new Nombre("Alfredo", "Gutierrez", "Martinolli"))
    }
    
    pruebaFecha(){
        //Lectura del atributo Fecha
    console.log(this.fecha.getFecha())
   
        //Escritura del atributo Fecha
    this.fecha.setFecha(new Date(1999,2,3));

        //Acceso a los metodos
    console.log(this.fecha.getFormatoCorto())
    console.log(this.fecha.getFormatoExtendido())
    console.log(this.fecha.getEdad())
    }

    pruebaNombre(){
        console.log(this.nombre.getNombre())

        this.nombre.setApePat("Dominguez")
        console.log(this.nombre.setApePat())

        this.nombre.setApeMat("Farias")
        console.log(this.nombre.getApeMat())
    }

    pruebaPersona(){
        console.log(this.persona.getPerfil())
    }

    pruebaEstudiante(){
        let estudihambre = new Estudiante(
            "Masculino",
            new FechaNacimiento(10,2,1900),
            new Nombre("Antonio", "Chavez", "Cisneros"),
            20145677, 
            "jchavez@ucol.mx", 
            "Facultad de Telematica")
            console.log("<-----Estudiante----->")
        estudihambre.print();
    }

    pruebaMaestro(){
        let maistro = new Maestro(
            "Masculino",
            new FechaNacimiento(2,4,1520),
            new Nombre("Hugo","Gomez","Ruiz"),
            12000,
            5466728,
            "Tiempo Completo"
        )
        console.log("<-----Maestro----->")
        maistro.print();
    }

    pruebaGrupo(){
        let datosEstudiante2 = {
            nombre:new Nombre("Antonio", "Chavez", "Cisneros"),
            fechaNacimiento: new FechaNacimiento(10,2,1900),
            genero: "Masculino",
            numeroCuenta: 20145677,
            correo: "jchavez@ucol.mx",
            escuela: "Facultad de Telematica"
        }

        let estudihambre2 = new Estudiante(datosEstudiante2)
        let estudihambre3 = new Estudiante(
            "Masculino",
            new FechaNacimiento(3,4,1999),
            new Nombre("Juan", "Fernandez", "Cisneros"),
            34535229, 
            "jreas@ucol.mx", 
            "Facultad de Telematica")
        let estudihambre4 = new Estudiante(
            "Masculino",
            new FechaNacimiento(4,2,1990),
            new Nombre("Roberto", "Fernandez", "Cisneros"),
            20035439, 
            "jramos@ucol.mx", 
            "Facultad de Telematica")
        let grupoA =  new Grupo (2, "G")
        console.log("<-----Grupos----->")
        console.log(grupoA.registrar(estudihambre2))
        console.log(grupoA.registrar(estudihambre3))
        console.log(grupoA.registrar(estudihambre4))
        grupoA.listarEstudiantes()
        console.log("Listado de estudiantes")
        console.log(grupoA._encontrarEstudiante(estudihambre2))
        console.log(grupoA._encontrarEstudiante(estudihambre3))
        console.log(grupoA._encontrarEstudiante(estudihambre4))
            //Indice v1
        console.log(grupoA._encontrarIndiceEstudiante(estudihambre2))
        console.log(grupoA._encontrarIndiceEstudiante(estudihambre3))
        console.log(grupoA._encontrarIndiceEstudiante(estudihambre4))
            //Indice v2
        console.log(grupoA._encontrarIndiceEstudianteV2(estudihambre2))
        console.log(grupoA._encontrarIndiceEstudianteV2(estudihambre3))
        console.log(grupoA._encontrarIndiceEstudianteV2(estudihambre4))
            //Eliminar Estudiante
        console.log(grupoA._eliminarEstudiante(estudihambre2))
        console.log(grupoA._eliminarEstudiante(estudihambre3))
        console.log(grupoA._eliminarEstudiante(estudihambre4))
        grupoA.listarEstudiantes()

        console.log(grupoA.actualizar(estudihambre2,estudihambre4))
        grupoA.listarEstudiantes()
    }

}

let tester = new Main()
tester.pruebaFecha()
tester.pruebaNombre()
tester.pruebaPersona()
tester.pruebaEstudiante()
tester.pruebaMaestro()
tester.pruebaGrupo()