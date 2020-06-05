//vamos a definir las funciones que queremos que se disparen cuando
//recibamos informacion del servidor, o cuando queramos enviar inf. al servidor
//usamos var para aumentar la compatiblidad entre navegadores web
//No todos los navegador web entienden el let
var socket = io(); //esta funcion esta en la libreria que importamos de socket.io
//Con esto nuestro codigo o aplicacion de front end va a estar pendiente 
//de cualquier cambio que ocurra en el backend
//si se deja aqui podemos enviar mensajes desde la consola del navegador

//Los on son para escuchar
socket.on('connect', function() {
    //cuando tenga un canal de comunicacion abierto entre servidor y cliente vamos imprimir un mensaje en consola
    console.log('Conectado al servidor');
});

//codigo que se va a ejecutar cuando perdamos conexion con el servidor

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//los emit son para enviar informacion y lo hace inmediatamente
//el primer parametro es el nombre del evento, no debe tener caracteres especiales ni espacios
//el segundo parametro puede ser una cadena o booleano pero se acostumbra mandar un objeto
// funcion para recibir la respuesta del servidor
socket.emit('enviarMensaje', {
    usuario: 'Mari',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});