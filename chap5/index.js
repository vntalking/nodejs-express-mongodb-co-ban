const express = require('express')
const app = new express()
const path = require('path')

const ejs = require('ejs')
app.set('view engine', 'ejs')

//Đăng ký thư mục public.
app.use(express.static('public'))

app.listen(4000, () => {
    console.log('OK. App listening on port 4000')
})


app.get('/', (request, response) => {
    response.render('index')
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post', (req, res) => {
    res.render('post')
})