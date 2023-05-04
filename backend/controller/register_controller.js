const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const CryptoJS =require('crypto-js')

exports.registerController =(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const hashed_password = CryptoJS.SHA256(password).toString();
    let sql = "INSERT INTO users (username,password) VALUES (?,?)"
    db.run(sql, [username, hashed_password], function(err){
          if(err){
              res.send(JSON.stringify({status: "Error Registering"}))
          }
          res.send(JSON.stringify({status: "User Created"}))
      }) 
  }




