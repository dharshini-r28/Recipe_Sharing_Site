const mongoose=require('mongoose');

const recipeschema=new mongoose.Schema({
    title:{
        type:String
    },
    ingredients:[String],
    category:{
    type:String
    },
    imageUrl:{
        type:String,
    },
    description:{
        type:String
    },
    createdBy: String

})

const recipe=mongoose.model("addedRecipe",recipeschema)

module.exports={recipe}