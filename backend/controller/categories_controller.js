const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('database.db')

exports.addCategory=(req,res)=> {
    const name = req.body.name
    db.run('INSERT INTO categories (name) values (?)', [name],(err) => {
        res.send("Category is added succesfully")
    })
}

exports.showCategoryNames=(req, res)=> {
    db.all('SELECT * FROM categories', [], (err, data) => {
        res.send(data)
    })
}
exports.showProductsWithCategory=(req, res)=> {
    const category_id = req.params.id
    db.all(`SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE products.category_id = ?`, [category_id], [], (err, data) => {
        res.send(data)
    })
}


