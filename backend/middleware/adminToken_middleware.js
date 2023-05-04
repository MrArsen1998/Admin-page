const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;

exports.authMidlweare=(req, res, next)=> {
    const token = req.headers.authorization
    if (token == null) return res.sendStatus(401)
      
      const decodedToken=jwt.verify(token, SECRET);

      jwt.verify(token, SECRET, (err, user) => {
       if (err) return (res.sendStatus(403))
       if (decodedToken.isAdmin!=1) return (res.sendStatus(403))
      
       next()
      })
    }
  