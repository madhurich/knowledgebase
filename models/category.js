var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description: {
		type: String
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//to get all the articles
module.exports.getCategories = function(callback){
	Category.find(callback);
}

//to get article by Id
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

/*//to get catogory articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	Article.find(query, callback);
}*/

module.exports.createCategory = function(newCategory, callback){
	newCategory.save(callback);
}
