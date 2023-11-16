const controller = {}


controller.show = (req, res) => {
    let {zodiacs} = require ("../data")
    res.render("task4", {zodiacs})
}

controller.showDetails = (req, res) => {
    let {zodiacs} = require ("../data")
    let zodiac = zodiacs.filter(item => item.name == req.params.name )[0]
    res.render("task4-detail", {zodiac})
}

module.exports = controller