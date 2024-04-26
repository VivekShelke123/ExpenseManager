import incomeDetailsSchema from '../models/IncomeDetails';
import { Request, Response } from 'express';
import axios from 'axios';
import mongoose from 'mongoose';

interface incomeDetails{
    userName: string;
    time: string;
    date: string;
    month: string;
    year: string;
    category: string;
    amount: number;
    remark: string;
 }

const addIncomeDetail = async (req:Request , res:Response) : Promise<void> => {
    const {userName , time , date , month , year , category ,  amount , remark } : incomeDetails = req.body;
    try {
        const incomeData = new incomeDetailsSchema({userName:userName , time:time,date:date,month:month,year:year,category:category,amount:amount,remark:remark}) ;
        const data = await incomeData.save();
        res.status(200).send({ data });
        
    } catch (error) {
        res.status(500).send(error);
    }
}

const getIncomeDetails = async ( req : Request , res : Response ) : Promise<void> => {
    const  userName : string   = req.params.userName;
    try {
        const data = await incomeDetailsSchema.find({ userName : userName});
        res.send(data);
    } catch (error) {
        res.status(500).send({mssg:'error found'});
    }
}

const updateAmount = async (req: Request, res: Response): Promise<void> => {
    const userName: string = req.params.userName;
    const { newCurry, prevCurry } = req.body;

    try {
        const findData = await incomeDetailsSchema.find({ userName: userName });
        if (findData.length !== 0) {
            for (const element of findData) {
                const newFindData = await incomeDetailsSchema.findOne({ _id: element._id });
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
        const findData = await incomeDetailsSchema.findByIdAndDelete(objectId);
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


export default {addIncomeDetail,getIncomeDetails,updateAmount,deleteEntry};