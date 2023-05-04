const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('database.db')

exports.showAll=(req, res)=> {
    db.all('SELECT * FROM products', [], (err, data) => {
        res.send(data)
    })
}

exports.showProduct=(req, res) => {
    const id = req.params.id
    db.get('SELECT * FROM products WHERE product_id=?', [id], (err, data) => {
        res.send(data)
    })
}

exports.add=(req,res)=> {
        const name = req.body.name
        const price = req.body.price
        const categoryId = req.body.categoryId
        db.run('INSERT INTO products (name, price, category_id) values (?,?,?)', [name,price,categoryId],(err) => {
            res.send({success: "Product is added succesfully"})
        })
}

exports.update=(req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const categoryId = req.body.categoryId
    db.run('UPDATE products SET name=?,  price=?, category_id=? WHERE id=?',[name,price,categoryId,id],(e)=>{
        res.send({success: "Product is updated succesfully"})
    })
}

exports.delete=(req, res) => {
    const id = req.params.id
    db.run('DELETE FROM products WHERE id=?', [id],(e)=>{
        res.send({success: "Product is deleted succesfully"})
    })
}
