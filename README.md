# api_rest_node.js_test
prueba de api node.js desde 0.
#NOS SIRVE PARA CREAR EL PACKAGE JSON PARA PODER DESCRIBIR EL PROYECTO 
npm init --yes  
#Nos sirve para poder iniciar express para codigo servidor y morgan para ver por consola peticiones
npm i express morgan
#creamos src y dentro ponemos toda la logica y el index.js en la principal
#para llamar las dependencias 
const express = require('express');
#instalamos nodemon para no estar bajando a cada momento el server y al hacer un cambio lo haga solo y en -D significa que solo es para dev
npm i nodemon -D 
#En los scrips del package.json podemos crear nuestros propios comandos 