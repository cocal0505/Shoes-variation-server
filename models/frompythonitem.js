const { Schema,model, } = require ('mongoose')


const FromPythonSchema = new Schema(
    
    {
        array:[],
        date: {
            type:Date,
            default:Date.now
        }
    },
    
)


const frompythonitem = model('frompython',FromPythonSchema)

module.exports= frompythonitem
