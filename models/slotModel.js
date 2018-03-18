const db = require('../config/database');

class slot{
    getCountOfSlot(getCount){
        db.query(`SELECT * FROM ketua`, (err, data) => {
            getCount(err, data);
        })
    }
}

module.exports = slot;