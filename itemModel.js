// itemModel.js
var mongoose = require('mongoose');
// Setup schema
var itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: String,
    image_url: String,
    description: {
        type: String,
        required: true
    },
    poster_id : String,
    create_date: {
        type: Date,
        default: Date.now
    },
    updated_date: Date
});
// Export Item model
var Item = module.exports = mongoose.model('item', itemSchema);
module.exports.get = function (callback, limit) {
    Item.find(callback).limit(limit);
}