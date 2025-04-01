const express = require('express')
const app = express()
const port = 3003
const postsRouter = require('./router/posts')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')


app.use(express.json())

app.use('/posts' ,postsRouter)


app.use(express.static('public'))
app.use(errorHandler)



app.use(notFound)


app.listen(port,()=>{
    console.log(`sono sulla porta${port}`)
})



