const {Router} =require('express')

const frompythonitem = require("../../models/frompythonitem")


const router = Router()


router.get('/',async(req,res)=>{
    try{
        const frompythonitems = await frompythonitem.find().sort({"_id":-1})   
        if (!frompythonitems) throw new Error ('no Bucket')
        const sorted = frompythonitems.sort((a,b)=>{
            return new Date(a.data).getTime() - new Date(b.date).getTime()   
            
        })
        
        res.status(200).json(sorted)
   
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


router.post('/',async(req,res)=>{
    const newfrompythonitem = new frompythonitem(req.body)
    try{
        const bucketListItem1 = await newfrompythonitem.save()
        if (!bucketListItem1) throw new Error ('somethind went wrong saving the bucketlistitem')
        res.status(200).json(bucketListItem1)
    }catch(error){
        res.status(500).json({messgae:error.messgae})
    }
})


module.exports = router