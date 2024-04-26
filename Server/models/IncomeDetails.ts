import mongoose, { Schema, Document } from "mongoose";

interface incomeDetails extends Document {
  userName: string;
  time: string;
  date:string;
  month: string;
  year: string;
  category: string;
  amount: number;
  remark: string;
}

const incomeDetailsSchema: Schema = new mongoose.Schema({
  userName: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  remark: { type: String },
});

export default mongoose.model<incomeDetails>(
  "incomeDetails",
  incomeDetailsSchema
);
