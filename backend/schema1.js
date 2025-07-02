const mongoose=require('mongoose');

const registerschema=new mongoose.Schema({
    name:{
        type:String
    },
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    phoneno:{
        type:Number
    },
    country:{
        type:String
    }
})
const register=mongoose.model('Register',registerschema); 

module.exports={register}