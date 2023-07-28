const express = require('express')
const {Pool} = require('pg')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host:  'localhost',
    password:'2002',
    port: 5432,
    database:'student'
})

pool.connect(function(error){
    if (error) console.log("error occurred");
    else console.log("success!!!");
})


app.post('/',async(req,res)=>{
    const{s_Id,s_Name,dept,Gender,city,phoneNumber}=req.body;
    try{
        await pool.query('insert into stud(s_Id,s_Name,dept,Gender,city,phoneNumber) values($1,$2,$3,$4,$5,$6)',[s_Id,s_Name,dept,Gender,city,phoneNumber]);
    }catch(error){
        console.log('error Occured');
    }
    res.json({msg:"posted data"});
})

app.get('/',async(req,res)=>{
    try{
        const r = await pool.query('Select * from stud');
        const data = r.rows;
        console.log(data);
        res.json(data);
    }catch(error){
        console.log(error);
    }
    console.log("success");
})  
app.listen(3000,()=>{
    console.log("Server is listening to 3-00....");
})