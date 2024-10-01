import jsonwebtoken from "jsonwebtoken"

const authenticate = (req,res,next) => {

    const secKey = "Ana Dark_Knight";

    const token = req.header("auth-token");
    if(!token){
        res.status(400).json({ error : "Access Denied" });
    }
    try {
        const data = jsonwebtoken.verify(token,secKey);
        req.user = data;
        next();
    } catch (error) {
        res.status(401).json({ error : "Access Denied" })
    }
}

export {authenticate}