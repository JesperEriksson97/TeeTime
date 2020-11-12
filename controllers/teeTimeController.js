const teeTimeController = {}

// This is the controller that delegates work from requests routed by the Router.
teeTimeController.index = function (req, res) {
    res.render("layouts/default")
}

teeTimeController.renderDateForm = (req, res) => {
    res.render("layouts/default")
}

teeTimeController.getPlayerData = (req, res) => {
    console.log(req.body)
    let quantity = req.body.quantity
    let playerSize = []
    for (let i = 0;i < quantity;i++) {
        playerSize[i] = i + 1
    }
    res.render("layouts/playerInformationForm", { playerSize: playerSize })
}

teeTimeController.getAvailableTeeTimes = (req, res) => {
    console.log(req.body)
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let golf_id = req.body.golf_id
    let player_size = req.body.gold_id.length

    // Here we should gather the free times.

    res.render('layouts/availableTimes', { first_name: first_name, last_name: last_name, golf_id: golf_id, player_size: player_size })
}

// Exports.
module.exports = teeTimeController