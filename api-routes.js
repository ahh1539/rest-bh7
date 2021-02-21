// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import item controller
var itemController = require('./itemController');
// Item routes
router.route('/items')
    .get(itemController.index)
    .post(itemController.new);

router.route('/items/:item_id')
    .get(itemController.view)
    .patch(itemController.update)
    .put(itemController.update)
    .delete(itemController.delete);


// Export API routes
module.exports = router;