
  /* INICIO DE SIMULADOR DE PLAZO FIJO en BANCO CODERHOUSE */

  /* En este segmento la idea es permitir al usuario generar un deposito
  utilizar deposito para invetirlo en un plazo fijo, seleccionar a cuantos dias le gustaria el plazo fijo
  y mostrar el final del plaz fijo con detalle del interes ganado. */
  

// Arrancamos haciendo un deposito y despues enunciando cuando deposito.
// let deposito = Number(prompt('Porfavor introducir la cantidad que desea depositar a su cuenta.'));
// alert(`Usted a depositado $${deposito}.`)

// function inversionBanco () {
//     let ganancia = plazoFijo(invertir);
//     console.log(ganancia);
        
//     alert(`Cumpliendo una inversion de ${days} dias, obtendra un ganancia estimada de ${ganancia}`);
//     alert(`Usted a generando $${neto(ganancia, invertir)}.`);
//     alert(`Su nuevo balance es de $${total(ganancia, nuevoDeposito)}.`);
// }
// inversionBanco()

// function banco () {
//     let ganancia = plazoFijo(invertir);
//     console.log(ganancia);
        
//     alert(`Cumpliendo una inversion de ${days} dias, obtendra un ganancia estimada de ${ganancia}`);
//     alert(`Usted a generando $${neto(ganancia, invertir)}.`);
//     alert(`Su nuevo balance es de $${total(ganancia, nuevoDeposito)}.`);
// }

// const plazoFijo = (invertir) => invertir * tna;
// plazoFijo(invertir);

const neto = (x, y) => x - y; 
const total = (x, y) => x + y;

function resultTna () {
    let days = Number(prompt(`Seleccione la cantidad de dias para realizar el plazo fijo:
    1- 30 
    2- 60
    3- 90`));
    if(days == 30) {
        days = 1.37
        return tna;
    } else if (days == 60) {
        days = 1.39
        return tna;
    } else if (days == 90) {
        days = 1.41
        return days;
    } else {
        alert('Datos incorrectos.');
        resultTna()
    }
    return days;
}

function depositarBanco () {
    let deposito = Number(prompt('Porfavor introducir la cantidad que desea depositar a su cuenta.'));
    return deposito;
}

function invertirBanco () {
    let invertir = Number(prompt(`De los $${deposito}, cuanto gustaria invertir?`));
    
    return invertir;
}    

let deposito = depositarBanco();
console.log(deposito);
let invertir = invertirBanco();
console.log(invertir);

if (invertir > deposito){
    alert('Monto incorrecto.');
    invertirBanco()
} else {
    
}

let days = resultTna();
console.log(days);
  
let ganancia = invertir * days;

let nuevoDeposito = deposito - invertir;

console.log(ganancia);
        
alert(`Cumpliendo los dias de inversion, obtendra un ganancia estimada de ${ganancia}`);
alert(`Usted a generando $${neto(ganancia, invertir)}.`);
alert(`Su nuevo balance es de $${total(ganancia, nuevoDeposito)}.`);