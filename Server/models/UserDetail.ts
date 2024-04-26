import mongoose,{Schema , Document} from "mongoose";

interface user extends Document{
    userName:string,
    email:string,
    password:string,
    curr:string,
}

const userSchema:Schema = new mongoose.Schema({
    userName:{ type: String,unique:true, required: true },
    email:{ type: String, unique:true, required: true },
    password:{ type: String, required: true },
    curr:{ type: String, required: true },
});

export default mongoose.model<user>('User', userSchema);