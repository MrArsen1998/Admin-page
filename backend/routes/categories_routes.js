const categories_controller = require('../controller/categories_controller')
const adminToken= require("../middleware/adminToken_middleware")

function create_categories_routes(app) {
    app.post('/addCategory', adminToken.authMidlweare, categories_controller.addCategory)
    app.get('/category/:id', categories_controller.showProductsWithCategory)
    app.get('/categoryNames', categories_controller.showCategoryNames)
 }

 module.exports = {create_categories_routes}
