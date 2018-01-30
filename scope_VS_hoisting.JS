var saludo="hola"; // Declaramos e inicializamos nuestra variable global.
(function (){
	console.log(saludo); // Intentamos imprimir esa variable global
	var saludo="hola como estas?" // Declaramos e inicializamos nuestra variable local con el mismo nombre.
	console.log(saludo); // Mandamos llamar a nuestra variable local.
})();
console.log(saludo); // Mandamos llamar nuestra variable global.
