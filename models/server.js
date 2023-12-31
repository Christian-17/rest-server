const express = require('express');
const cors = require('cors');

class server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRouterPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
       // cors
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );
       
        // Directorio Publico
        this.app.use( express.static('public') );

    }

    routes() {
        
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen() {
       this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port ); 
        });
    }

}






module.exports = server;