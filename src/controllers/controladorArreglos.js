/*let nombres=["ana","maria","carolina","juan","ilona"]

//Escribir un ciclo que repita una acción
for (let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}

//ARRAY METODOS: es una forma de reescribir un ciclo for con js. Porgramacion declarativa o programacion funcional
nombres.forEach(function(nombre){    //una funcion dentro de otra funcion o sea funtion dentro de for y pues se le nombra funcion anonma pues funciona una vez
    console.log(nombre);              //el auxiliar es el singular del arreglo
})
nombres.forEach(nombre=>console.log(nombre))        //funcion de flecha y se lee para cada uno de los nombres hay un nombre, imprima el nombre  
                                                    //es lo mismo que arriba  */

/*let numeros=[1,2,3,4,5,6,7,8,9,10]
numeros.forEach(numero=>console.log(numero))
                                                //la variable local solo se usa en el foreach
numeros.forEach(function(numero){
    console.log(numero);
})*/

/*let numeros=[1,2,3,4,5,6,7,8,9,10]
numeros.forEach(numero=>console.log(numero+10))

numeros.forEach(function(numero){
    console.log(numero+10);
})*/

/*let salarios=[3500000,5000000,8000000]
salarios.forEach(function(salario){
    console.log(salario-(salario*10)/100)
})

salarios.forEach(salario=>console.log(salario-(salario*10)/100))*/
//sumar las notas y calcular el promedio de las notas
let calificaciones=[3.5,4,2,1.5,3]
let suma=0
calificaciones.forEach(function(calificacion){
    suma=suma+calificacion
})
console.log(suma/calificaciones.length)

//calificaciones.forEach(calificacion=>)
