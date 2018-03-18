const db = require('../config/database');
class Mahasiswa {
    setKelompok(data){
        db.query(`INSERT INTO Kelompok
         VALUES ('${data.nim1}',${data.nim2},'${data.nim3}')`);
    }
    setKetua(data){
        db.query(`INSERT INTO Ketua
         VALUES ('${data.nim}','${data.nama}','${data.notelp}','${data.slot}')`);
    }
    getDataKelompok(queryData){
        db.query(`SELECT * FROM Kelompok, Ketua where Kelompok.nim1 = Ketua.nim`, (err, data) => {
            queryData(err, data)
        })
        // return new Promise((resolve, reject) => {
        //     db.query(`SELECT * FROM Kelompok, Ketua where Kelompok.nim1 = Ketua.nim`, (err, data) => {
        //         if(data) resolve(data);
        //         else reject(err)
        //     })
        // })
        // .then((success) => {
        //     // console.log(success);
        //     return success;
        // })
        // .catch((err) => {
        //     return err;
        // })
    }
    getNimKelompok(queryData){
        db.query(`SELECT * FROM Kelompok`, (err, data) => {
            queryData(err, data);
        })
    }
}

module.exports = Mahasiswa;