//Ejemplo Hoisting variables correcto.

(function (){             //Utilizamos una function similar a Java.
	costoRefresco = 7;      // asignamos el valor a una variable sin previa declaración.
	costoRefresco+= 2;      // Le sumamos a la misma variable 2 mas su valor previamente declarado.
	total = costoRefresco;  // Le asignamos a total el valor de costoRefresco.
	console.log("Total: "+total); //Imprimimos el valor total en la consola.
	var costoRefresco, total;     // Declaramos nuestras variables con el modelo hoisting de JS.
})();


//Ejemplo Hoisting variables incorrecto 1.

(function (){
	costoRefresco = 7;          // Inicializamos la variable costoRefresco
	costoRefresco+= costoPapas; /* Sumamos en la variable costoRefresco su valor mas el valor de la variable 
					costoPapas sin inicialización. */
	total = costoRefresco;      // Asignamos a total el valor de la variable costoRefresco.
	console.log("Total: "+total);
	var costoRefresco, total,costoPapas=10; /* Declaramos nuestras variables como permite hoisting 
                                           así como inicializamos el valor de costoPapas. */
})();


//Ejemplo Hoisting variables incorrecto 2.

(function (){
	var costoPapas;             // Comprobaremos que declarando, pero no inicializando costoPapas tiene un valor undefinied.
	costoRefresco = 7;
	total = costoRefresco;
	console.log("Total: "+total + " " + costoPapas); // Imprimimos el valor total concatenando la impresión del valor de costoPapas.
	var costoRefresco, total;   // Declaramos nuestras variables.
	costoPapas=10;              // Inicializamos el valor de nuestra variables costoPapas.
})();
