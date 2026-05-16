import type {Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const userMiddleware = (req: Request, res: Response, next: NextFunction ) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string , (process.env.JWT_SECRET as string)) as {id: string}
        if(decoded){
            //@ts-ignore
            req.id = decoded.id;
            next();
        }else{
            res.status(403).json({
                message: "you are not logged in"
            })
        }

}

export {userMiddleware};
