
const fs = require('fs')
const { join } = require('path')

const { cluster, yts, downloader } = require('fetchyt')

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
    },

    async download(req, res) {

        const { request } = req.query
        
        const name = `video${Math.random()}`

        const datas = {
            video:{
                href: request,
                title:name
            }
        }

        const arquive = join(__dirname, "..", 'videos', `${name}.mp4`)

        await downloader(datas, {
            path:join(__dirname, "..", 'videos')
        })

        //exclui o arquivo de vídeo depois de 15 segundos
        setTimeout(async () => {
            //console.log("Arquivo apagado")
            await fs.unlinkSync(arquive, (log) => {
                console.log("Arquivo apagado")
            })
        }, 15000)

        //envia o arquivo depois de 10.5 segundos.
        setTimeout(async () => {
            res.download(arquive)
        }, 5000)
    }

}