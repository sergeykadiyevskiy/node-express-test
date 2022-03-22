const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.user("/", require('./routes/users'))




app.listen(port, () => console.log(`My app listening on port: ${port}`))
