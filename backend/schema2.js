
// const mongoose = require('mongoose');

// const recipeschema = new mongoose.Schema({
//     title: { type: String },
//     ingredients: [String],
   
//     category: { type: String },
//     imageUrl: { type: String },
//     description: { type: String },
//     createdBy: String
// });

// const recipe = mongoose.model("addedRecipe", recipeschema);
// module.exports = { recipe };
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    category: String,
    imageUrl: String,
    description: String,
    createdBy: String,
    shared: { type: Boolean, default: false } // 👈 new field
});

const recipe = mongoose.model('Recipe', recipeSchema);
module.exports = { recipe };
