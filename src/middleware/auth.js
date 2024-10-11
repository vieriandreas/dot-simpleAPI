const jwt = require('jsonwebtoken');
const CONST = require('../constant/constant')

class Auth {
  static authenticate(req, res, next) {
    const authHeader = req.get('Authorization');

    let token;
    if (authHeader && authHeader.startsWith('Bearer'))
      token = authHeader.split(' ')[1];
    else
      return res.status(401).send({
        message: 'Silahkan login',
        data: null,
      });

    const payload = jwt.verify(token, CONST.JWT.SECRET);

    req.userEmail = payload.email;


    next();
    }
}