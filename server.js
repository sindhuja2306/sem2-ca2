const express=require('express');
const app = express();
const PORT=8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("server is running sucessfully");
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})

app.post('/register',(req,res)=>{
    const [userName,email,password] = req.body;
    if(!userName){
        return res.status(400).json({message:"username cannot be empty"});
    }
    if(!email){
        return res.status(400).json({message:"email cannot found"});
    }
    if(password>8 && password<=16){
        return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }

    res.status(201).json({
        userName,email,password
    })
});