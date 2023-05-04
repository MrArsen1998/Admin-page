const products_controller = require('../controller/products_controller')
const adminToken= require("../middleware/adminToken_middleware")

 function create_products_routes(app) {
    app.get('/products', products_controller.showAll )
    app.get('/dataProduct/:id', products_controller.showProduct)
    app.post('/addProduct', adminToken.authMidlweare, products_controller.add)
    app.put('/changeProduct/:id', adminToken.authMidlweare, products_controller.update)
    app.delete('/deleteProduct/:id', adminToken.authMidlweare, products_controller.delete)
 }

 module.exports = {create_products_routes}