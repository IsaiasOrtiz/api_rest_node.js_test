//Instanciamos el modulo de express.
const express = require('express'); 
//Enviroment
const yaml = require('js-yaml');
const fs   = require('fs');
//mongo
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydb');
    
    console.log("CONEXION FUE CREADA");
  }
  main();
//inicializamos el modulo de express.
const app = express();
const morgan = require('morgan');
const { Server } = require('http');
//settings
// TOMAMOS DEL ENV process.env.PORT
const doc = yaml.load(fs.readFileSync('./src/env/enviroment.yml', 'utf8'));
app.set('port' , doc.nodeserver.port||1000); // con esto damos variables globales para configuraciones  luego las leemos (app.get('port'))
app.set('json spaces' , 2)
//middleware
app.use(morgan('dev')); //con esto pudo ver por consola las peticiones que estan llegando a el servidor.(en el parametro podemos cambiar la cantidad de info que se muestra en los logs)
app.use(express.json()); // con esto el server puede recibir json o proveer y entenderlo.
app.use(express.urlencoded({extended: false})); // para endender datos por url no soporta imagenes
//Enviroment
// Get document, or throw exception on error

//Routes 

app.use(require('./routes/index')); // con esto importamos la rutas desde otros archivos que estemos creando

//Iniciando el servidor de la aplicacion.S
//Puerto de inicio de la app
app.listen(app.get('port'), function(){
    //con estas comillas (``) puedo usar las anotaciones ${} para definir variables.
    console.log(`Server on port ${app.get('port')}`);
});


    


