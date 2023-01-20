const HomeModel = require('../models/HomeModel')

HomeModel.find()
 .then(dados => console.log(dados))
 .catch(e => console.log(e));

exports.paginaInicial = (req,res) => {
    res.render('index.ejs')
}

exports.paginaInicialPost = (req,res) => {
    res.send(req.body.user)
}