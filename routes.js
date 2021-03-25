
const routes = require('express').Router()
const controller = require('./src/controller/controller')
const {join} = require('path')

routes.get('/single', controller.getSingleMedia)
routes.get('/media', controller.getMedia)
routes.get('/download', controller.download)
routes.get('/', (req, res) => res.sendFile(join(__dirname, "index.html")))

module.exports = routes