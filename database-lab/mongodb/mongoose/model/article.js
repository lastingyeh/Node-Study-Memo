const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
	title: String,
	author: String,
	content: String,
	publishTime: Date
});

ArticleSchema.statics = {
	createDoc: function(doc) {
		return new this(doc).save();
	},
	findDocs: function(conditions = {}) {
		return this.find(conditions).then(docs => {
			return docs.length === 1 ? docs[0] : docs;
		});
	},
	updateDocById: function(_id, condition) {
		return this.update({ _id }, condition);
	},
	removeDocById: function(_id) {
		return this.remove({ _id });
	}
};

module.exports = mongoose.model('Article', ArticleSchema);
