const express = require('express');
let router = express.Router();

let mahasiswaModel = require('../models/MahasiswaModel');

mhsModel = new mahasiswaModel();

router.get('/datakelompok', (req, res, next) => {
    let nim = new Array();
    mhsModel.getNimKelompok((err, data) => {
        if(data){
            for(var i = 0; i < data.length; i++){
                nim.push(data[i].nim1);
                nim.push(data[i].nim2);
                nim.push(data[i].nim3);
            }
            res.send(nim);
        }
    })
});

module.exports = router;