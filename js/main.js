const miNombre = "Gabriel"
const miApellido = "Barbera"
let miEdad = 29
const miMascota = "Valentino"
let edadMascota = 14

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

const miNombreCompleto = `${miNombre} ${miApellido}`

console.log(miNombreCompleto)

let textoPresentacion = `Hola soy ${miNombre} ${miApellido} y tengo ${miEdad} años. Mi perro se llama ${miMascota} y tiene ${edadMascota} años`

console.log(textoPresentacion)

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

const alumno = {
    nombre: "Gabriel",
    apellido: "Barbera",
    edad: 29,
    experiencia: false,
    curso: "Javascript",
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno. apellido)
console.log(alumno. edad)
console.log(alumno. experiencia)
console.log(alumno. curso)

let mascota = {
    nombre: "Valentino",
    edad: 14,
    color: "blanco y negro",
    tamaño: "grande",
    juega: false
}

console.table(mascota)
console.log(mascota. nombre)
console.log(mascota. edad)
console.log(mascota. color)
console.log(mascota. tamaño)
console.log(mascota. juega)

let frutas = ["manzanas", "kiwis", "peras", "melones", "naranjas"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])


let numeros = [5,4,3,2,1]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = ["papa", "mama", "hermana1", "hermana2", "mascota"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio = `Ayer por la tarde merende ${numeros[3]} ${frutas[1]} y sin darme cuenta, le comi el postre a ${familia[2]}`
console.log(textoAleatorio)

let soyMayorDeEdad = prompt("Ingrese su edad") 
console.log(soyMayorDeEdad >= 18)
console.log("Soy mayor de edad " + soyMayorDeEdad)

let edadCompañero = prompt("Ingrese edad de compañero")
console.log("Edad compañero " + edadCompañero)

let edadesIguales = soyMayorDeEdad == edadCompañero
console.log("Mi edad es igual " + edadesIguales)

let soyMayor = soyMayorDeEdad >= edadCompañero
console.log("Mi edad es mayor " + soyMayor)

let soyMenor = soyMayorDeEdad <= edadCompañero
console.log("Mi edad es menor " + soyMenor)

// let altura = prompt("Ingrese su altura")