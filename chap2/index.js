const express = require('express')
const app = express()
app.listen(3000, () =>{
    console.log("App listening on port 3000")
})

app.get("/about", (request, response) =>{
    res.send('The about page')
})

app.get("/contact", (req, res) =>{
    res.send('The contact page')
})

app.get("/contact", (req, res) =>{
    res.send('The contact page')
})

app.get("/", (req, res) =>{
    res.send('The home page')
})

app.get('*', function(req, res){
    res.header(404)
    res.send('page not found')
});

