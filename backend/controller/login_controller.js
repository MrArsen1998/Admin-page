const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const CryptoJS =require('crypto-js')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;

function generateAccessToken(user_id,username,isAdmin) {
  return jwt.sign({user_id,username,isAdmin},SECRET, { expiresIn: '36000s' });
}

exports.loginController=(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const hashed_password = CryptoJS.SHA256(password).toString();
    const sql = "SELECT * from users WHERE username = ?"
    db.get(sql,[username], function(err, row){  
      if(username == row.username && hashed_password == row.password) {
        const token = generateAccessToken(row.user_id,row.username,row.isAdmin)
        res.send(JSON.stringify({status: "Logged in", jwt:token, isAdmin:row.isAdmin}));
      }else {
          res.send(JSON.stringify({status: "Wrong credentials"}));
      }
    }) 
  }