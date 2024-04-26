import app from './app';

const port:number = 5000;

app.listen(port,()=>{
    console.log(`Server on Port ${port} Started Successfully`);
})