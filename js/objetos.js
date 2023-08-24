class Vehiculo {
    constructor(tipo, nombre, modelos, edad, peso) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.modelos = modelos; 
        this.edad = +edad;
    
    }

    arrancar() {
        console.log("BRUMM BRUMM");
    }

    imprimirNombre() { 
        console.log(this.nombre);
    }
}

const chevrolet = new Vehiculo("auto", "chevie", ["ss"], 4,); 
const ford = new Vehiculo("auto", "mustang", ["68"], 3,);

console.log(ford.nombre);
console.log(chevrolet.nombre);

ford.arrancar(); 
chevrolet.arrancar(); 

ford.imprimirNombre(); 
chevrolet.imprimirNombre(); 
