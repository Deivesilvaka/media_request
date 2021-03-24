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

# ou

```javascript

async function start() {
    //retorna um objeto contendo vários dados.
    const response = await fetch('https://mediarequest.herokuapp.com/media?request=scandal band')
    const videoData = await response.json()
    console.log(videoData)
}

start()

```

# ou

```javascript

async function start() {
    //Faz o download do vídeo quando mandamos sua url.
    window.location.href = 'https://mediarequest.herokuapp.com/download?request=https://www.youtube.com/watch?v=Mr_uHJPUlO8'
}

start()

```