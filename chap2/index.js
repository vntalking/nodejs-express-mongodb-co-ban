const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get("/about", (request, response) => {
    res.send('The about page')
})

app.get("/contact", (req, res) => {
    res.send('The contact page')
})

app.get("/contact", (req, res) => {
    res.send('The contact page')
})

app.get("/", (req, res) => {
    res.send('The home page')
})

app.get('*', function (req, res) {
    res.header(404)
    res.send('page not found')
});

//Task1
app.get('/', (req, res) => {
    // query database
})
//Task2
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/about', (req, res) => { // called when request to /about comes in
    res.sendFile(path.resolve(__dirname, 'about.html'))
})
app.get('/contact', (req, res) => { //called when request to /contact comes
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

const express = require('express')
const app = express()const path = require('path')
app.use(express.static('public'))
app.listen(3000,()=>{
console.log("App listening on port 3000")
}