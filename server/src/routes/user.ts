import { Request, Response, NextFunction,Router } from 'express';
import { User } from '../entities/User';
const router = Router();


const loginUser = async (req:Request,res:Response, next:NextFunction)=>{
    

    console.log('로그인입니다 동무')

    res.send('product')
}


const signupUser = async (req:Request,res:Response, next:NextFunction)=>{
    
    const user = new User();
    const { email, password, nickname } = req.body;
    user.email = email;
    user.password = password;
    user.nickname = nickname;

    const test = await user.save();

    console.log(email, password, nickname )

    res.send(test)
}


const signupUser2 = async (req:Request,res:Response, next:NextFunction)=>{
    try {
        const emailUser = await User.find({});
        console.log('회원가입입니다 동무')
    
        res.send(emailUser)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/signup2', signupUser2);




export default router; 