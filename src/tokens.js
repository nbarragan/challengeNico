import jwt from 'jsonwebtoken';


export const createNewToken = (idUser) => {
    const token = jwt.sign(idUser,privateKey);
    res.json({token});
}

export const validateToken = (req,res,next) => {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split("");
        const Btoken = bearer[1];
        
        jwt.verify(Btoken,privateKey,(err,data) =>{
            if(err){
                res.sendStatus(403);
            }else{
                res.send({
                    data : data
                });
            }
        });
        next();
    }else{
        res.sendStatus(403);
    }
}

//module.exports = {validateToken,createNewToken};