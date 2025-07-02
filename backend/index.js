const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const {register}=require('./schema1.js')
const {recipe}=require('./schema2.js')
const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '5mb' })); 

async function connecttodb(){
    try{
       // await mongoose.connect("mongodb+srv://2dharshini82004:2dharshini82004@cluster0.grwbibo.mongodb.net/recipe?retryWrites=true&w=majority")
       await mongoose.connect("mongodb://localhost:27017/recipe")
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
//register

app.post('/add',async function(request,response){
    const {emailid}=request.body;
  const user= await register.findOne({emailid })
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
//login
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

// app.add('/addrecipe', async (request, response) => {
//     try {
//         const newRecipe = await recipe.create({
//             title: request.body.title,
//             ingredients: request.body.ingredients,
//             category: request.body.category,
//             imageUrl: request.body.imageUrl,
//             description: request.body.description,
//             createdBy: request.body.createdBy 
//         });
//         response.status(201).json(newRecipe);
//     } catch (error) {
//         console.error(error);
//         response.status(500).json({ error: "Internal server error" });
//     }
// });
app.post('/addrecipe', async (request, response) => {
    try {
        const newRecipe = await recipe.create({
            title: request.body.title,
            ingredients: request.body.ingredients,
            category: request.body.category,
            imageUrl: request.body.imageUrl,
            description: request.body.description,
            createdBy: request.body.createdBy 
        });
        response.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal server error" });
    }
});


app.get('/addrecipe', async (req, res) => {
    try {
        const allRecipes = await recipe.find({});
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
});
app.post('/getrecipe', async function(request, response) {
    try {
        const { username } = request.body;
        const recipeget = await recipe.find({ createdBy: username }); 
        response.status(200).json(recipeget);
    } catch (error) {
        response.status(500).json({
            status: "failure",
            error: error
        });
    }
});
