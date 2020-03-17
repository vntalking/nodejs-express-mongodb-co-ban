const BlogPost = require('../models/BlogPost.js')

module.exports = (req, res) => {
    BlogPost.find({}, function (error, posts) {
        console.log(posts);
        res.render('index', {
            blogposts: posts
        });
    })
}