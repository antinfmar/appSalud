class Bascula {
    constructor() {
        this.registros = [];
    }

    obtenerNumeroAnotaciones() {
        return this.registros.length;
    }

    anotarPeso(peso, altura = 1, fecha = new Date()) {
        this.registros.push({ peso, altura, fecha });
    }

    obtenerPesoMaximo() {
        if (this.registros.length === 0) {
            return null;
        }

        return Math.max(...this.registros.map(registro => registro.peso));
    }

    obtenerPesoMinimo() {
        if (this.registros.length === 0) {
            return null;
        }

        return Math.min(...this.registros.map(registro => registro.peso));
    }

    calcularIMC() {
        if (this.registros.length === 0) {
            return null;
        }

        const ultimaAnotacion = this.registros[this.registros.length - 1];
        const imc = ultimaAnotacion.peso / (ultimaAnotacion.altura ** 2);
        return imc;
    }

    describirIMC(imc) {
        if (imc < 16) {
            return "Infrapeso (delgadez severa)";
        } else if (imc >= 16 && imc < 17) {
            return "Infrapeso (delgadez moderada)";
        } else if (imc >= 17 && imc < 18.5) {
            return "Infrapeso (delgadez aceptable)";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            return "Obeso (Tipo I)";
        } else if (imc >= 35 && imc < 40) {
            return "Obeso (Tipo II)";
        } else {
            return "Obeso (Tipo III)";
        }
    }
}

module.exports={ Bascula };