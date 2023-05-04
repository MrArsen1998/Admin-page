const express = require('express')
const sqlite = require('sqlite3').verbose()
const app = express()
const port = 3001
const cors =require('cors')
const products_routes = require('./routes/products_routes')
const categories_routes = require('./routes/categories_routes')
const users_schema = require('./models/users_schema')
const products_schema = require('./models/products_schema')
const categories_schema = require('./models/categories_schema')
const auth_routes = require('./routes/auth_routes')

app.use(cors())
app.use(express.json())

const db = new sqlite.Database('database.db', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("OK")
    }
})

users_schema.create_users(db)
products_schema.create_products(db)
categories_schema.create_categories(db)
auth_routes.register_routes(app)
auth_routes.login_routes(app)
categories_routes.create_categories_routes(app)
products_routes.create_products_routes(app)

app.listen(port)