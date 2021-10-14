const express = require("express")
const app  = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000



const mongoUrl= "mongodb+srv://yangjunho:junho!1995@cluster0.wprgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')
const frompythonRoutes = require('./routes/api/frompython')
const axios = require("axios")
const spawn = require('child_process').spawn


app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())




mongoose
    .connect(mongoUrl,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify : false
    })
    .then(()=> console.log('mongoDB database Connected'))
    .catch((err)=> console.log(err)) 

app.use('/api/bucketListItems', bucketListItemRoutes)
app.use('/api/frompython',frompythonRoutes)

app.get('/',(req,res)=>res.send("hello world"))


app.listen(PORT ,()=>{
    console.log(`app is listening at http://localhost:${PORT}`)
 
})










async function readServer(){
        await axios.get('https://shose-variation-2.herokuapp.com/api/bucketListItems')
    .then((res)=>{
        
        const array = res.data[0].array
        console.log("fromserver", array)

      function python(){
            
            const process1 = spawn('python', ['./pythonC/repeat.py',array]);
            process1.stdout.on('data',async data=>{
                const data1 = data.toString()
                 console.log("from python",data1)  

                await axios.post('https://shose-variation-2.herokuapp.com/api/frompython',{
                    array:data1
                })
                .then((res)=>{
                    console.log(res.data)
                })
            })
          
        }
        python()
    })
    
    .catch((err)=>{
        console.log(err)
        })
    }

    readServer()



