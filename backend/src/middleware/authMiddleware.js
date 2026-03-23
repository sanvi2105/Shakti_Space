import jwt from "jsonwebtoken"; //middleware will read token from req and verify it

export const protect = (req, res, next) => {
  try {
    let authHeader = req.headers.authorization; //get http header

    if (!authHeader || !authHeader.startsWith("Bearer ")) { // check if token exists
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; //token in the form Bearer abcdefghi -> ["Bearer", "abcdefghi"]

    const decoded = jwt.verify(token, process.env.JWT_SECRET); //jwt.verify checks if token signature matches secret
                                                               //if token is valid or expired
                                                               // if valid, returns decoded payload, otherwse throws error

    req.user = decoded; //token valid, continue to next middleware or controller

    next();

  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};