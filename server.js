const express = require("express")
const app  = express();
const mongoose = require('mongoose');
const PORT = 3000

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



// async function readserver(){
//     await axios.post('http://localhost:3000/api/bucketListItems',{
//            array:[1,23,44,5]
//     })
//            .then((res)=>{
//               console.log(res.data)
//            }).catch(err=>{
//              console.log(err)
//            })
//  }


//  readserver()





















// if(app.use){
//     console.log("something sended")
// }


// async function readServer(){
//         await axios.get('http://localhost:3000/api/bucketListItems/')
//     .then((res)=>{
        
//         const array = res.data[0].array
//         console.log("fromserver", array)

//       function python(){
            
//             const process1 = spawn('python', ['./python/repeat.py',array]);
//             process1.stdout.on('data',async data=>{
//                 const data1 = data.toString()
//                  console.log("from python",data1)  

//                 await axios.post('http://localhost:3000/api/frompython',{
//                     array:data1
//                 })
//             })
          
//         }
//         python()
//     })
    
//     .catch((err)=>{
//         console.log(err)
//         })
//     }


//  function yes(){
//         setInterval(()=>{
//             readServer()
//         },10000)
//     }

// yes()



