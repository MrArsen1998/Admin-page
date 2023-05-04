const sql = ("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY,name TEXT, price REAL, category_id INTEGER, FOREIGN KEY (category_id) REFERENCES categories(id))");

function create_products(my_database){
    my_database.run(sql)
}

module.exports = {create_products};