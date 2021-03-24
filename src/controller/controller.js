
const { cluster, yts } = require('fetchyt')

module.exports = {

    async getSingleMedia(req, res) {
        const { request } = req.query

        const response = await cluster([request])
        const key = Object.keys(response)[0]

        res.json([response[key]])
    },

    async getMedia(req, res) {
        const { request } = req.query

        const response = await yts(request)

        res.json(response)
    }

}