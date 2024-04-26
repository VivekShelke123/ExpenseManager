import expenseDetailsSchema from "../models/ExpenseDetails";
import { Request, Response } from 'express';
import axios from "axios";
import mongoose from "mongoose";

interface expenseDetails{
    userName: string;
    time: string;
    date: string;
    month: string;
    year: string;
    category: string;
    spentOn: string;
    amount: number;
    remark: string;
  }

const addExpenseDetail = async (req:Request , res:Response) : Promise<void> => {
    const {userName , time , date , month , year , category , spentOn , amount , remark } : expenseDetails = req.body;
    try {
        const expenseData = new expenseDetailsSchema({userName:userName , time:time,date:date,month:month,year:year,category:category,spentOn:spentOn,amount:amount,remark:remark }) ;
        const data = await expenseData.save();
        res.status(200).send({ data });
        
    } catch (error) {
        res.status(500).send(error);
    }
}

const getExpenseDetails = async ( req : Request , res : Response ) : Promise<void> => {
    const  userName : string   = req.params.userName;
    try {
        const data = await expenseDetailsSchema.find({ userName : userName});
        res.send(data);
    } catch (error) {
        res.status(500).send({mssg:'error found'});
    }
}

const updateAmount = async (req: Request, res: Response): Promise<void> => {
    const userName: string = req.params.userName;
    const { newCurry, prevCurry } = req.body;

    try {
        const findData = await expenseDetailsSchema.find({ userName: userName });
        if (findData.length !== 0) {
            for (const element of findData) {
                const newFindData = await expenseDetailsSchema.findOne({ _id: element._id });
                if (newFindData) {
                    try {
                        const options = {
                            params: {
                                from: prevCurry,
                                to: newCurry,
                                amount: element.amount,
                            },
                            headers: {
                                'X-RapidAPI-Key': '1d8a585459msh19474c5442c7e6bp15032bjsnabb327e99802',
                                'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
                            }
                        };

                        const resp = await axios.get('https://currency-converter-pro1.p.rapidapi.com/convert', options);
                        newFindData.amount = resp.data.result;

                        await newFindData.save();
                    } catch (err) {
                        console.error(err);
                    }
                }
            }
            res.status(200).send({ mssg: 'Data updated successfully' });
        } else {
            res.status(404).send({ mssg: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mssg: 'Error occurred' });
    }
}

const deleteEntry = async (req: Request, res: Response): Promise<void> => {
    const id : string = req.params._id;
    const objectId = mongoose.Types.ObjectId.createFromHexString(id.trim());

    try {
        const findData = await expenseDetailsSchema.findByIdAndDelete(objectId);
        if (findData) {
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ mssg: 'Error occurred' });
    }
}

export default {addExpenseDetail,getExpenseDetails,updateAmount,deleteEntry};