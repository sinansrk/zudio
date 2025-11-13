const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('static'))

const userRoutes = require('./routes/route')
 app.use('/',userRoutes)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
