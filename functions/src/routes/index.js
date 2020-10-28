const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/desarrollo', (req, res) => {
    res.render('desarrollo');
});

router.get('/web', (req, res) => {
    res.render('web');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

router.get('/perfil', (req, res) => {
    res.render('perfil');
});
module.exports = router;