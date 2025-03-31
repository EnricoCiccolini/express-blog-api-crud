const express = require('express')
const app = express()
const port = 3003
const postsRouter = require('./router/posts')

app.use(express.json())

app.use('/posts' ,postsRouter)


app.use(express.static('public'))



app.listen(port,()=>{
    console.log(`sono sulla porta${port}`)
})