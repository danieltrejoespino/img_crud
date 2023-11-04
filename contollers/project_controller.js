// Controlador
const fs = require('fs');
const test={
  home:function (req,res) {
    console.log(`url: ${req.url} | Method: ${req.method} | Status:${res.statusCode}`);
    res.status(200).json('My first server with express')
  },
  test:function (req,res) {
    return res.status(200).send('test')
  }


}

const c_img={
  list_all: function(req,res){
    const directorio = './uploads/';
    fs.readdir(directorio, (error, archivos) => {
      if (error) {
        console.error(`Error al leer el directorio: ${error}`);
        res.status(400).json(`Error al leer el directorio `);
      }else{
        console.log(archivos);
        res.json(archivos)
      }

    })
  },
  uploadImage:function(req,res){    
    let name= req.query.name
    console.log(`url: ${req.url} | Method: ${req.method} | Status:${res.statusCode}`);
    if (req.file) {      
      console.log(`imagen ${name} subida con exito`);
      res.json(`imagen ${name} subida con exito`)
    } else {      
      console.log(`Error al subir la imagen ${name}`);
      res.status(400).json(`Error al subir la imagen o el formato no es compatible ${name}`);
    }
  },
  deleteImage:function(req,res){ 
    let name= req.query.name
    const rutaDelArchivo = `uploads/${name}`;
    
    fs.unlink(rutaDelArchivo, (error) => {
      if (error) {
        console.error(`Error al eliminar la imagen: ${error}`);
        res.json(`Error al eliminar la imagen: ${error}`)
      } else {
        console.log(`Imagen eliminada con exito`);
        res.json(`Imagen ${name} eliminada con exito`)

      }
    })
  }
}

module.exports={test,c_img}