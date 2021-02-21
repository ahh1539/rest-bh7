// serviceModel.js
var mongoose = require('mongoose');
// Setup schema
var serviceSchema = mongoose.Schema({
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
    poster_email : {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    updated_date: Date
});
// Export Service model
var Service = module.exports = mongoose.model('service', serviceSchema);
module.exports.get = function (callback, limit) {
    Service.find(callback).limit(limit);
}