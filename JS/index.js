//console.log('Hola Mundo')

//-- Tipos de datos en JS --
// String: Cadena de caracteres: 'hola' 'hola mundo' 'a'
// Boolean: true false.
// Null: nulo
// Number: Cualquier numero, 123 != "123"
// "123" es un string, es distinto a 123 que es un number.
// Undefined.
// Object: objeto.

// Definición de variables
// var
// let
// const

// var miPrimeraVariable = 'lala'

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

// mutabilidad
// miPrimeraVariable = 'Esto ha cambiado'
// console.log(miPrimeraVariable);

// boolean
// let miBoolean = true
// let miOtroBool = false

// numeros
// let miNumero = 0
// let miNumero2 = 12
// let miNumero3 = -258

// console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

// let undef
// console.log(undef);

// let nulo = null
// console.log('nulo',12, nulo)

// Objeto
//un objeto es una agrupación de datos, estos datos hacen sentido entre si
//objeto vacio
// const miPrimerObjeto = {}

//objeto agrupaciones de datos que hacen sentido entre si
const miOBjeto = {
  unNumero: 12,
  unString: 'Esta cadena de caracteres',
  unaCondicion: true,
}

//console.log(miOBjeto.unString)


// Arreglos
const arrVacio = []
const arr = [1,2,'Hola','Mundo', miOBjeto]

//console.log(arrVacio,arr)

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)

//console.log(arrVacio)


// Operadores matematicos

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3

//console.log(suma,restar,multiplicar,division)

const modulo = 10 % 3
//console.log(modulo);

//const num = 5
// const vs let
let num = 5
// num++
// num++
// num++
// num++
// num++

// num--
// num--
// num--
// num--
// num--

num += 5
num -= 5
num *= 5
num /= 2

//console.log(num);


//Operadores de comparacion

//igualdad estricta
const resultado1 = 5 === 6
//igualdad no estricta, strings pueden ser iguales a numeros si el valor no es el mismo
const resultado2 = 5 === '5'

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

//desigualdad estricta
const resultado11 = 5 !== 6
//desigualdad no estricta, strings pueden ser desiguales a numeros si el valor no es el mismo
const resultado12 = 5 != '5'

//console.log(resultado11, resultado12)

//or ||, and &&, not !

const resultadoOr = true || false
//console.log(resultadoOr);

const resultadoAnd = true && true && true && true && true && false
//console.log(resultadoAnd);

const resultadoNot = !false
//console.log(resultadoNot);




// Control de flujo

// control de flujo if
const edad = 5
if (edad > 5 && edad < 18) {
  //console.log('El niño puede jugar ☻')
} else {
  //console.log('El niño no puede jugar :(')
}

// control de flujo while
let x = true
while (x) {
  //console.log(x);
  x = false
}

//console.log('Terminando el loop')



// control de flujo switch
let y = 3
switch (y) {
  case 1: {
    //console.log('yo soy el caso 1')
    break;
  }
  case 2: {
    //console.log('chanchito feliz ☻')
    break;
  }
  case 3:
    //console.log('chanchito triste :(')
    break;
  default:
    //console.log('no hay chanchitos! :(')
    break;
}


//for

for (let i = 0; i < 10; i++) {
  console.log(i)
}



