const express = require('express');
let router = express.Router();
let slotModel = require('../models/slotModel');

slot = new slotModel();

router.get('/slot', (req, res, next) => {
    slot.getCountOfSlot(function(err, data){
        res.send(data);
    })
})

module.exports = router;