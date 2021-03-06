// serviceController.js
// Import service model
Service = require('./serviceModel');
// Handle index actions
exports.index = function (req, res) {
    Service.get(function (err, services) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Services retrieved successfully",
            data: services
        });
    });
};
// Handle create service actions
exports.new = function (req, res) {
    var service = new Service();
    service.name = req.body.name ? req.body.name : service.name;
    service.price = req.body.price;
    service.image_url = req.body.image_url;
    service.description = req.body.description;
    service.poster_email = req.body.poster_email;
    service.updated_date = req.body.updated_date;

// save the service and check for errors
    service.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New service created!',
                data: service
            });
    });
};
// Handle view item info
exports.view = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
        res.json({
            message: 'Service details loading..',
            data: service
        });
    });
};
// Handle update service info
exports.update = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
        service.name = req.body.name ? req.body.name : service.name;
        service.price = req.body.price;
        service.image_url = req.body.image_url;
        service.description = req.body.description;
        service.poster_email = req.body.poster_email;
        service.updated_date = req.body.updated_date;
// save the service and check for errors
        service.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Service Info updated',
                data: service
            });
        });
    });
};
// Handle delete service
exports.delete = function (req, res) {
    Service.remove({
        _id: req.params.service_id
    }, function (err, service) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Service deleted'
        });
    });
};