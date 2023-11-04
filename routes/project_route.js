// Rutas
const express= require('express')
const {test,c_img}= require('../contollers/project_controller')
const router = express.Router()
const multer = require('multer');

router.use(express.json())

router.get('/home',test.home)
router.get('/test',test.test)




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Ruta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    const sanitizedFileName = file.originalname.replace(/ /g, '_')
    cb(null, sanitizedFileName ); // Nombre del archivo en el servidor
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Aceptar el archivo
  } else {
    cb(null, false); // Rechazar el archivo
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter 
});

router.get('/allImages',c_img.list_all)
router.post('/uploadImage', upload.single('imagen'),c_img.uploadImage)
router.delete('/deleteImage',c_img.deleteImage)



module.exports=router