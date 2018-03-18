var express = require('express');
var router = express.Router();
let mahasiswaModel = require('../models/MahasiswaModel');
let mahasiswaController = require('../controllers/MahasiswaController');

mhsModel = new mahasiswaModel();
mhsControl = new mahasiswaController();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  let ketua = new Object();
  let kelompok = new Object();
  ketua = mhsControl.setKetua(req);
  kelompok = mhsControl.setKelompok(req);
  console.log(ketua);
  console.log(kelompok);
  mhsModel.setKetua(ketua);
  mhsModel.setKelompok(kelompok);
  res.redirect('/');
})

/* GET home page. */
router.get('/insert', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {
  let ketua = new Object();
  let kelompok = new Object();
  ketua = mhsControl.setKetua(req);
  kelompok = mhsControl.setKelompok(req);
  console.log(ketua);
  console.log(kelompok);
  mhsModel.setKetua(ketua);
  mhsModel.setKelompok(kelompok);
})

router.options('/insert', function(req, res, next) {
  let ketua = new Object();
  let kelompok = new Object();
  ketua = mhsControl.setKetua(req);
  kelompok = mhsControl.setKelompok(req);
  console.log(ketua);
  console.log(kelompok);
  mhsModel.setKetua(ketua);
  mhsModel.setKelompok(kelompok);
})

router.get('/terdaftar', (req, res, next) => {
  mhsModel.getDataKelompok(function(err, data){
    if(data){
      console.log(data);
      res.send(data);
    }
  })
})

module.exports = router;
