import userSchema from "../models/UserDetail";
import { Request, Response } from 'express';
import * as bcrypt from "bcrypt";

interface addUserDetails {
    userName: string,
    email: string,
    password: string,
    curr:string,
}
interface getUserDetails{
    userName:string,
    pass:string
}

async function setPass(password: string): Promise<string> {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (err) {
        throw err;
    }
}

const addUser = async (req: Request, res: Response): Promise<void> => {
    const { userName, email, password,curr }: addUserDetails = req.body;
    try {
        const pass: string = await setPass(password);
        const findUserName = await userSchema.findOne({userName:userName});
        const findEmail = await userSchema.findOne({email:email});

        if(findEmail){
            res.json('EmailUsed');
        }
        else if(findUserName){
            res.json('UserNamePresent');
        }
        else{
            const userData = new userSchema({ userName, email, password:pass ,curr:curr});
            const data = await userData.save();
            res.status(200).send({ data });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).send({ mssg: 'Adding user failed' });
    }
}

const getUser = async (req: Request, res: Response):Promise<void> => {
    const { userName, email, password }: addUserDetails = req.body;
    try {
        const findData = await userSchema.findOne({userName:userName});
        if(!findData){
            res.json("NotFound");
        }
        else{
            bcrypt.compare(password, findData.password, function(err, result) {
                if (err) {
                  // Handle error
                  console.error(err);
                } else {
                    if(result){
                        res.json("Found");
                    }
                    else{
                        res.json("Incorrect");
                    }
                }
            })
        }
    }
        
     catch (error) {
        res.status(500).send({mssg:'failed to check'});
    }
}

const updateUser = async (req:Request , res:Response) : Promise<void> =>{
    const { userName , newUserName } = req.body;
    try {
        const user = await userSchema.findOne({userName:userName});
        if(user){
            user.userName = newUserName;
            const data = await user.save()
            res.status(200).send(data);
        }
        else{
            res.status(404).send({mssg:'User Not Found'});
        }
    } catch (error) {
        res.send(error);
    }
}

const updatePass = async (req: Request, res: Response): Promise<void> => {
    const { pass, newPass, userName } = req.body;

    try {
        const findData = await userSchema.findOne({ userName: userName });

        if (!findData) {
            res.status(404).send({ mssg: 'User not found' });
            return; // Added return to exit function after sending response
        }

        const result = await bcrypt.compare(pass, findData.password);

        if (result) {
            findData.password = await setPass(newPass);
            const data = await findData.save();
            res.status(200).json('Changed');
        } else {
            res.json('Incorrect');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

const getCurr = async ( req : Request , res : Response ) : Promise<void> => {
    const  userName : string   = req.params.userName;

    try {
        const currData = await userSchema.findOne({userName : userName});
        if(currData){
            res.send(currData?.curr);
        }
        else{
            res.status(404).send({mssg:"user may not exist"});
        }
        
    } catch (error) {
        res.status(500).send({mssg:'Error occured'});
    }
}

const updateCurr = async ( req : Request , res : Response ) : Promise<void> => {
    const userName : string = req.params.userName;
    const newCurr : string = req.body.newCurr;

    try {
        const data = await userSchema.findOne({userName:userName});
        if(data){
            data.curr = newCurr;
            const data1 = await data.save();
            res.status(200).send(data1);
        }
        else{
            res.status(404).send({mssg:"user not found"});
        }
    } catch (error) {
        res.status(500).send({mssg:'Error Occured'});
    }
}

export default { addUser,getUser,updateUser,updatePass,getCurr,updateCurr };
