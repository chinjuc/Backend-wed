const express = require ('express')
const dotenv = require ('dotenv')
const cors = require ('cors')
const ConnectDB = require ('./Config/db.js')
const feedrouter = require ('./routes/feedroute.js')


dotenv.config();
const app = express();
ConnectDB();
app.use(cors());
app.use(express.json());
app.use('/api/feedback' , feedrouter);
app.get('/',(req,res)=>{
    res.send("api is running")
})
const PORT = process.env.PORT || 3005;
app.listen(PORT,()=>console.log(`server running at the port ${PORT}`))