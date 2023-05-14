const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../utilities/httpcodes");

const isAuth = (req, res, next) => {
  
  const authorization = req.headers.authorization;
  
  if (!authorization) {
    return res.status(401).json({
      status: 401,
      message: HTTPSTATUSCODE[401],
      data: null,
    });
  }
  
  const splits = authorization.split(" ");
  if (splits.length != 2 || splits[0] != "Bearer") {
    return res.status(400).json({
      status: 400,
      message: HTTPSTATUSCODE[400],
      data: null,
    });
  }
  
  const jwtString = splits[1];

  try {
    const secretKey = req.app.get("secretKey");
    if (!secretKey) {
      throw new Error("Missing secretKey");
    }
      
    const token = jwt.verify(jwtString, secretKey);
  
    const authority = {
        id: token.id,
        name: token.name
    }
   
    req.authority = authority;
  
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {isAuth};
