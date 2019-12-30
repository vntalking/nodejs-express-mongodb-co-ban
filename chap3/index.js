const express = require('express')
const app = new express()
const path = require('path')

//Đăng ký thư mục public.
app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})


app.get('/', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})