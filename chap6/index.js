const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
app.set('view engine', 'ejs')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

//Đăng ký thư mục public.....
app.use(express.static('public'))

//Tao server
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

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.post('/posts/new', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})