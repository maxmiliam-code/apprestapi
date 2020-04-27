var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
var verifikasiinput = require('./verifikasiinput')

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.post('/api/v1/inputmhs',verifikasi(), auth.inputmahasiswa);
router.get('/api/v1/rahasia',verifikasi(), auth.halamanrahasia);

module.exports = router; 