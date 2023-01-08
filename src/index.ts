import express  from "express";
import dotenv from 'dotenv';
import {Sequelize} from "sequelize";
const cors = require('cors')


const app = express();
app.use(express.json)
app.use(cors())
const sequelize = new Sequelize(process.env.PGDATABASE!,process.env.PGUSER! , process.env.PGPASSWORD! ,{
    host: process.env.PGHOST,
    dialect: 'postgres'
})

dotenv.config()
const port = process.env.PORT;

app.get('/',(req, res) => res.send('Hello world!'))

const startServer = async () =>{
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port,() => console.log(`Server start on http:://localhost:${port}`))
    }catch (e){
        console.log(e)
    }

}
startServer()



