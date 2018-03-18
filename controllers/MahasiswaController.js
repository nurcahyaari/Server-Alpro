class MahasiswaController{
    setKetua(req){
        return {
            nim : req.body.nim1,
            nama : req.body.nama,
            notelp : req.body.notelp,
            slot : req.body.slot
        }
        
    }
    setKelompok(req){
        return {
            nim1 : req.body.nim1,
            nim2 : req.body.nim2,
            nim3 : req.body.nim3
        }
    }
    // getKelompok(req){
        
    // }
}

module.exports = MahasiswaController;