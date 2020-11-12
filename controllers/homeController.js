const homeController = {}

// This is the controller that delegates work from requests routed by the Router.
homeController.index = function (req, res) {
    res.render("layouts/dateForm")
}

// Exports.
module.exports = homeController