const { Bascula } = require("Bascula.js");
class Paciente {
    constructor(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
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

    modificarFechaNacimiento(fecha) {
        this.fechaNacimiento = fecha;
    }

    obtenerEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        const edad = hoy.getFullYear() - nacimiento.getFullYear();

        // Ajustar la edad si aún no ha pasado el cumpleaños este año
        if (hoy.getMonth() < nacimiento.getMonth() || (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())) {
            return edad - 1;
        } else {
            return edad;
        }
    }

    modificarBascula(Bascula) {
        this.bascula = Bascula;
    }

    obtenerBascula() {
        return this.Bascula;
    }

    calcularIMC() {
        if (this.Bascula) {
            return this.Bascula.calcularIMC();
        } else {
            console.log("La báscula no está definida para este paciente.");
            return null;
        }
    }
}

module.exports={ Paciente };