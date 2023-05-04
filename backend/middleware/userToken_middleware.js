const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;

exports.userAuthMidlweare=(req, res, next)=> {
    const token = req.headers.authorization
    if (token == null) return res.sendStatus(401)
      
      const decodedToken=jwt.verify(token, SECRET);
      const user_id = req.params.id
      jwt.verify(token, SECRET, (err, user) => {
       if (err) return (res.sendStatus(403))
       if (decodedToken.user_id!=user_id) return (res.sendStatus(403))
      
       next()
      })
    }