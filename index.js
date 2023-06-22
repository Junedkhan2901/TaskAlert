import express from "express";
import bodyParser from "body-parser";

import user from './routes/users.js';

const app =express();
const PORT = 5000 ;

app.use(bodyParser.json());
app.use('/users',user);


app.get('/',(req,res)=> {res.send('hello from Home page ');});

app.listen(PORT,()=> console.log(`server running on a port:http//localhost${PORT}`))