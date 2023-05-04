const sql = ("CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY, name TEXT)");

function create_categories(my_database){
    my_database.run(sql)
}

module.exports = {create_categories};