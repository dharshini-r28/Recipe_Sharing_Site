const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const {register}=require('./schema1.js')
const {recipe}=require('./schema2.js')
const app = express()
app.use(cors())
app.use(bodyParser.json())
async function connecttodb(){
    try{
        await mongoose.connect('mongodb+srv://ashwithaa:WynlhhO4B8YPwtWc@cluster0.gwnlctj.mongodb.net/recipe?retryWrites=true&w=majority&appName=Cluster0')
        console.log('db connected')
    
    app.listen(7000,function(){
        console.log('listening on port 7000')
    })
}catch(error){
    console.log(error)
    console.log('couldn\'t connect to')
}
}

connecttodb()

app.post('/add',async function(request,response){
    const {name}=request.body;
  const user= await register.findOne({ name })
    if(user){
return response.json({message:"user existed"})
    }else{
    try{
        await register.create({
            "name":request.body.name,
            "emailid":request.body.emailid,
            "password":request.body.password,
            "gender":request.body.gender,
            "phoneno":request.body.phoneno,
            "country":request.body.country
        })
        response.status(201).json({
            "success":"success"
        })
    }catch(error){
        response.status(500).json({
            "status":"failure",
            "error":error
    })
    }
}})

app.post('/login',async function(request,response){
    const{name,password}=request.body
    register.findOne({name: name})
    .then(user=>{
        if(user){
            if(user.password===password){
                response.json({"success":"success"})
            }else{
                response.json("the password is incorrect")
            }
        }else{
            response.json("no record found")
        }
    })
})

app.get('/getuser',async function(request,response){
    try{
        const user=await register.find()
        response.status(200).json(user)
    }catch(error){
        response.status(500).json({
            "status":"failure",
            "error":error
        })
    }
})

app.post('/addrecipe', async (request, response) => {
    try {

        const newRecipe = await recipe.create({
            "title":request.body.title,
            "ingredients":request.body.ingredients,
            "category":request.body.category,
            "imageUrl":request.body.imageUrl,
            "description":request.body.description,
        });
        response.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal server error" });
    }
});


app.patch('/updaterecipe/:id', async function(request, response){
    try {
        const recipeedit = await recipe.findByIdAndUpdate(request.params.id, {
            "title":request.body.title,
            "ingredients":request.body.ingredients,
            "category":request.body.category,
            "imageUrl":request.body.imageUrl,
            "description":request.body.description,
        });

        if (recipeedit) {
            response.status(200).json({
                "status": "success"
            });
        } else {
            response.status(404).json({
                "status": "failure"
            });
        }
    } catch (error) {
        response.status(500).json({
            "status": "failure"
        });
    }
});

app.get('/getrecipe',async function(request,response){
    try{
        const recipeget=await recipe.find()
        response.status(200).json(recipeget)
    }catch(error){
        response.status(500).json({
            "status":"failure",
            "error":error
        })
    }
})