var mongoose = require('mongoose');
var articleSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	category: {
		type: String,
		index: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

var Article = module.exports = mongoose.model('Article', articleSchema);

//to get all the articles
module.exports.getArticles = function(callback){
	Article.find(callback);
}

//to get article by Id
module.exports.getArticlesById = function(id, callback){
	Article.findById(id, callback);
}

//to get catogory articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	Article.find(query, callback);
}

//to create an article
module.exports.createArticle = function(newArticle, callback){
	newArticle.save(callback);
}

//to update am article
module.exports.updateArticle = function(id, data, callback){
	var title = data.title;
	var body = data.body;
	var category = data.category;

	var query = {_id: id};
	Article.findById(id, function(err, article){
		if(!article){
			return next(new Error('Couldnot not load article'));
		}
		else{
			//to update
			article.title = title;
			article.body = body;
			article.category = category;

			article.save(callback);
		}
	});
}

//to remove article
module.exports.removeArticle = function(id, callback){
	Article.find({_id: id}).remove(callback);
}