const express = require('express');

const path = require('path');

//socket.io no trabaja directamente  con express pero si con el servidor http que trae por defecto node
const socketIO = require('socket.io');

const http = require('http');

const app = express();

//definimos el servidor donde vamos a correr la aplicacion pasando como parametro
//app ya tenemos montado el servidor con toda la configuracion que le hagamos al express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//tenemos que inicializar el socket.io
//IO(input output)  va a mantener una conexion directa con el servidor
//IO= Esta el la comunicacion del backend
//let io = socketIO(server);

module.exports.io = socketIO(server);

//se ejecutara lo que esta en socket.js
require('./sockets/socket');

//cambiamos app por server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});