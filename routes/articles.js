var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function(req, res, next) {
 Article.getArticles(function(err, articles){
 	if(err){
 		console.log(err);
 	}
 	res.json(articles);
 });
});

router.get('/:id', function(req, res, next) {
 Article.getArticlesById(req.params.id, function(err, articles){
 	if(err){
 		console.log(err);
 	}
 	res.json(articles);
 });
});

router.get('/category/:category', function(req, res, next) {
 Article.getArticlesByCategory(req.params.category, function(err, articles){
 	if(err){
 		console.log(err);
 	}
 	res.json(articles);
 });
});

router.post('/', function(req, res, next){
     //get the values of form
     var title = req.body.title;
     var category = req.body.category;
     var body = req.body.body;

     //for new article
     var newArticle = new Article({
     	title: title,
     	category: category,
     	body: body
     });

     //to create article
     Article.createArticle(newArticle, function(err, article){
     	if(err){
     		console.log(err);
     	}

     	res.location('/articles');
     	res.redirect('/articles');
     })
});

router.put('/', function(req, res, next){
     var id = req.body.id;

     var data = {
     	title: req.body.title,
     	category: req.body.category,
     	body: req.body.body

     };

     //to update article
     Article.updateArticle(id, data, function(err, article){
     	if(err){
     		console.log(err);
     	}

     	res.location('/articles');
     	res.redirect('/articles');
     })
});

//to remove article

router.delete('/:id', function(req, res, next){
    var id = req.params.id;

    //remove article
    Article.removeArticle(id, function(err, article){
    	if(err){
    		console.log(err);
    	}

    	res.location('/categories');
    	/*res.redirect('/categories');*/
    });
});


module.exports = router;
