const homeController = {}

homeController.index = function (req, res) {
    console.log('Works')
    res.render("layouts/default")
}

// Exports.
module.exports = homeController