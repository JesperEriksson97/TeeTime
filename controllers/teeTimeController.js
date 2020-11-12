const teeTimeController = {}

// This is the controller that delegates work from requests routed by the Router.
teeTimeController.index = function (req, res) {
    res.render("layouts/default")
}

teeTimeController.getAvailableTeeTimes = (req, res) => {
    console.log(req.body)
    console.log('This is reached when we post to /tee-time')
    res.render("layouts/default")
}

// Exports.
module.exports = teeTimeController