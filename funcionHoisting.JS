//Ejemplo de funcion habitual.

function getNombre(nombre){ // Recibo nombre el cual será impreso desde consola
	console.log("El nombre es: " + nombre); // Cuando recibo el nombre lo mando a imprimir
}

getNombre("Diego"); // Cuando declaro la función mando llamarla y le asigno al parámetro Diego.

//Ejemplo Hoisting con funcion. 

getNombre("Diego"); // Ahora mando a llamar a la función antes de su declaración y me da el mismo resultado.

function getNombre(nombre){
	console.log("El nombre es: " + nombre);
}
