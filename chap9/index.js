const express = require('express')
const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

const fileUpload = require('express-fileupload')
app.use(fileUpload())



//Đăng ký thư mục public.....
app.use(express.static('public'))

const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)

const validateMiddleware = require("./middleware/validationMiddleware");
app.use('/posts/store', validateMiddleware)

//Tao server
app.listen(4000, () => {
    console.log('OK. App listening on port 4000')
})


app.get('/', homeController)

app.get('/posts/new',newPostController)

app.get('/post/:id', getPostController)

app.post('/posts/store', storePostController)

