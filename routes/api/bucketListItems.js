const {Router} =require('express')

const BucketListItem = require("../../models/BucketLIstItem")


const router = Router()


router.get('/',async(req,res)=>{
    try{
        const bucketListItems = await BucketListItem.find().sort({"_id":-1})   
        if (!bucketListItems) throw new Error ('no Bucket')
        const sorted = bucketListItems.sort((a,b)=>{
            return new Date(a.data).getTime() - new Date(b.date).getTime()   
            
        })
        
        res.status(200).json(sorted)
   
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


router.post('/',async(req,res)=>{
    const newBucketListItem = new BucketListItem(req.body)
    try{
        const bucketListItem = await newBucketListItem.save()
        if (!bucketListItem) throw new Error ('somethind went wrong saving the bucketlistitem')
        res.status(200).json(bucketListItem)
    }catch(error){
        res.status(500).json({messgae:error.messgae})
    }
})


router.put('/:id',async(req,res)=>{
    const { id } = req.params

    try{
        const response = await BucketListItem.findByIdAndUpdate(id,req.body)
        if(!response) throw Error ("something went wrong")
        const updated = { ...response._doc, ...req.body}
        res.status(200).json(updated)
    }catch(error){
        res.status(500).json({messgae:error.messgae})
    }

})



router.delete('/:id',async(req,res)=>{



    const {id} = req.params
    try{
        const removed = await BucketListItem.findByIdAndDelete(id)
        if(!removed) throw Error ("something went wrong")
        res.status(200).json(removed)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router