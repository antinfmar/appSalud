const { Bascula } = require("./Bascula");

class Paciente {


    constructor(nom, apellidos, strFecha) {
        this.nombre = nom;
        this.apellidos = apellidos;
        this.fechaNacimiento = strFecha;
    }

    saludar() {
        return `Hola soy ${this.nombre} ${this.apellidos}`;

    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        this.nombre = nombre;
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    obtenerFechaNacimiento() {
        return this.fechaNacimiento;
    }

    modificarFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    obtenerEdad() {

        var fechaES = this.fechaNacimiento.split("/");

        var fechaENG = fechaES[2] + "-" + fechaES[1] + '-' + fechaES[0];

        var today = new Date();
        var birthDate = new Date(fechaENG);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;



    }


    modificarBascula(Bascula) {

        this.registroBascula = Bascula;

    }


    obtenerBascula() {
        return this.registroBascula;
    }


    calcularIMC() {
        if (this.registroBascula) 
        {
            return this.registroBascula.calcularIMC();
        } else 
        {
            return -1; 
        }

    }

}


module.exports = { Paciente }