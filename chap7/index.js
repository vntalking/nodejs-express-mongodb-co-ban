const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
app.set('view engine', 'ejs')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const BlogPost = require('./models/BlogPost.js')

//Đăng ký thư mục public.....
app.use(express.static('public'))

//Tao server
app.listen(4000, () => {
    console.log('OK. App listening on port 4000')
})


app.get('/', (request, response) => {
    BlogPost.find({}, function (error, posts) {
        console.log(posts);
        response.render('index', {
            blogposts: posts
        });
    })
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

app.get('/post/:id', (req, res) => {
    BlogPost.findById(req.params.id, function(error, detailPost){
        res.render('post', {
            detailPost
        })
    })
    
})

app.post('/posts/new', (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name), function (err) {
        // model creates a new doc with browser data
        BlogPost.create({body:req.body,image: '/upload/' + image.name}, (error, blogpost) => {
            res.redirect('/')
        })
    })

})
