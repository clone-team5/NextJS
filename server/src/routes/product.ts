import { Request, Response, NextFunction,Router } from 'express';
const router = Router();

router.get('/',(req:Request,res:Response, next:NextFunction)=>{
    
    res.send('product')
})


export default router; 