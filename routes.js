
const routes = require('express').Router()
const controller = require('./src/controller/controller')

routes.get('/single', controller.getSingleMedia)
routes.get('/media', controller.getMedia)

module.exports = routes