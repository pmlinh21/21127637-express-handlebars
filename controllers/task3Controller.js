const controller = {}


controller.show = (req, res) => {
    let {products, categories} = require ("../data")
    let category = req.query.category ? req.query.category : 0
    let productList = req.query.category 
    ? products.filter(item => item.category == parseInt(category))
    : products

    // console.log(category)
    res.render("task3",{
        categories: categories,
        products: productList
    })
}

module.exports = controller