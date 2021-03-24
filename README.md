# media_request
api de busca de videos

```javascript

async function start() {
    //retornar apenas um vídeo
    const response = await fetch('https://mediarequest.herokuapp.com/single?request=scandal band')
    const videoData = await response.json()
    console.log(videoData)
}

start()

```

# OU

```javascript

async function start() {
    //retorna um objeto contendo vários dados.
    const response = await fetch('https://mediarequest.herokuapp.com/media?request=scandal band')
    const videoData = await response.json()
    console.log(videoData)
}

start()

```