const { Router } = require('express');  //Importamos el modulo de express para las rutas 
const mongoose = require('mongoose');
const router = Router();


router.post ('/post' , async (req, res) => {
       
    const kittySchema = new mongoose.Schema({
        name: String
      });
  
      const Kitten = mongoose.model('Kitten', kittySchema);
      const silence = new Kitten(req.body);
      console.log(silence.name); // 'Silence'
      let data = await silence.save();
      res.send("data");
});

module.exports = router; // finalizamos la exportacion de nuestras rutas creadas. 