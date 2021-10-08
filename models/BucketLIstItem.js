const { Schema,model, } = require ('mongoose')


const BucketListItemSchema = new Schema(
    
    {
        array:[],
        date: {
            type:Date,
            default:Date.now
        }
    },
    
)


const BucketListItem = model('bucketListItem',BucketListItemSchema)

module.exports= BucketListItem



