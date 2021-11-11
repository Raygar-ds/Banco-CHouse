// aca use de notas para crear y despues incorporar a FUNCIONES.JS

class cuentaBanco {
    constructor(nombre, apellido, userId, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.userId = userId;
        this.edad = edad;
    }
    controlRespuesta(){

        if (this == si) {
            let deposito = depositarBanco();
            console.log(deposito);
        } else if (respuesta.toLowerCase == no) {
            let invertir = invertirBanco();
            console.log(invertir);
        } else {
            alert('Selecciono una opción inccorecta')
        }
    }
}

const cliente1 = new cuentaBanco("Diego", "Santurtun", 101 , 27 )


function questionBanco () {
    let respuesta = prompt(`Le gustaria hacer un deposito?
    1- Si
    2- No`);
    return respuesta;
}
