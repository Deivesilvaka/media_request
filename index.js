
const app = require("express")()
const cors = require("cors")

app.use(cors())
app.use(require("express").json())
app.use(require("./routes"))

app.listen(process.env.PORT || 3000, () => console.log("rodando server"))