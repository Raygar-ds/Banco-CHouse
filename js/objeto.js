class cuentaBanco {
    constructor(nombre, apellido, userId, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.userId = userId;
        this.edad = edad;
    }
}

const cliente1 = new cuentaBanco("Diego", "Santurtun", 101 , 27 )


function questionBanco () {
    let respuesta = prompt(`Le gustaria hacer un deposito?
    1- Si
    2- No`);
    return respuesta;
}

controlRespuesta() {

    if (respuesta.toLowerCase == si) {
        let deposito = depositarBanco();
    console.log(deposito);
    }
}