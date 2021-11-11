
  /* INICIO DE SIMULADOR DE PLAZO FIJO en BANCO CODERHOUSE */

  /* En este segmento la idea es permitir al usuario generar un deposito
  utilizar deposito para invetirlo en un plazo fijo, seleccionar a cuantos dias le gustaria el plazo fijo
  y mostrar el final del plaz fijo con detalle del interes ganado. */
  

// Arrancamos haciendo un deposito y despues enunciando cuando deposito.

const neto = (x, y) => x - y; 
const total = (x, y) => x + y;

function resultTna () {
    let days = Number(prompt(`Seleccione la cantidad de dias para realizar el plazo fijo:
    1- 30 
    2- 60
    3- 90`));
    if(days == 30) {
        days = 1.37
        return days;
    } else if (days == 60) {
        days = 1.39
        return days;
    } else if (days == 90) {
        days = 1.41
        return days;
    } else {
        alert('Datos incorrectos.');
        days = resultTna()
    }
    return days;
}

function depositarBanco () {
    // let deposito = document.getElementsByName("plata")[0].value;
    let deposito = Number(prompt('Porfavor introducir la cantidad que desea depositar a su cuenta.'));
    return deposito;
}

function invertirBanco () {
    // let invertir = document.getElementsByName("plata")[0].value;
    let invertir = Number(prompt(`De los $${deposito}, cuanto gustaria invertir?`));
    
    return invertir;
}    

function questionBanco () {
    let respuesta = prompt(`Le gustaria hacer un deposito?
    1- Si
    2- No`)

    return respuesta;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ACA ESTA MI INCORPORACION DE OBJECTO EN MI PROYECTO, SUJERO A MEJORA!
class cuentaBanco {
    constructor(nombre, apellido, userId) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.userId = userId;
    }
}

const cliente1 = new cuentaBanco("Diego", "Santurtun", getRandomInt(999));



// Dar la bienvenida al usuario.

// alert(`Bienvenido ${cliente1.nombre} ${cliente1.apellido}, su numero de ID es ${cliente1.userId}.`);
document.getElementById("saludo").innerHTML = (`Bienvenido ${cliente1.nombre} ${cliente1.apellido}, su numero de ID es ${cliente1.userId}.`);

// let respuesta = questionBanco();
// console.log(respuesta)

let deposito = depositarBanco();
console.log(deposito);
document.getElementById("depOut").innerHTML = '$ ' + deposito;
let invertir = invertirBanco();
console.log(invertir);

if (invertir > deposito){
    alert('Monto incorrecto.');
    invertir = invertirBanco()
} else {
    
}

document.getElementById("textInvert").innerHTML = '$ ' + invertir;

let days = resultTna();
console.log(days);
document.getElementById("interes").innerHTML = `% ${days * 100 - 100}`;

let ganancia = invertir * days;

let nuevoDeposito = deposito - invertir;

console.log(ganancia);
        
// alert(`Cumpliendo los dias de inversion, obtendra un ganancia estimada de $${ganancia}`);
document.getElementById("ganancia").innerHTML = '$ ' + ganancia;
// alert(`Usted a generando $${neto(ganancia, invertir)}.`);
document.getElementById("neto").innerHTML = '$ ' + neto(ganancia, invertir);
// alert(`Su nuevo balance es de $${total(ganancia, nuevoDeposito)}.`);
document.getElementById("total").innerHTML = '$ ' + total(ganancia, nuevoDeposito);