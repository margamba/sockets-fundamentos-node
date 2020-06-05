//para saber cuando un cliente o usuario se conecta al servidor hacemos esto
//para saber que cliente o usuario se ha conectado pasamos el parametro client a la funcion
//El objeto client contiene toda la información de la conexion que se establecio

const { io } = require('./../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        data: 'Bienvenido a esta aplicación'
    })

    //cuando un cliente o usuario se desconecta de la aplicacion
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        //client.emit('enviarMensaje', data);
        //Broadcast es para enviar a todos los clientes 
        client.broadcast.emit('enviarMensaje', data);

        //     if (data.usuario) {
        //         callback({
        //             resp: 'TODO SALIO BIEN!'
        //         });
        //     } else {
        //         callback({
        //             resp: 'TODO SALIO MAL!'
        //         });
        //     }
    });
});