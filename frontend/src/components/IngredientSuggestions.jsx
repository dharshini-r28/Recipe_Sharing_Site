import React, { useState } from "react";

export default function IngredientSuggestions() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const API_KEY = "5ce6471d433a48988ca9a85369571256";

  const addIngredient = () => {
    const value = ingredientInput.trim();
    if (value && !ingredients.includes(value)) {
      setIngredients([...ingredients, value]);
    }
    setIngredientInput("");
  };

  const removeIngredient = (ing) => {
    setIngredients(ingredients.filter((i) => i !== ing));
  };

  const fetchSuggestions = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);
    try {
      const query = ingredients.join(",+");
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=5&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setResults(data);
      setSelectedRecipe(null);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
    setLoading(false);
  };

  const fetchRecipeDetails = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const data = await res.json();
      setSelectedRecipe(data);
    } catch (err) {
      console.error("Error fetching recipe details:", err);
    }
    setLoading(false);
  };

  return (
    <div
      className="background"
      style={{
        minHeight: "100vh",
        padding: "1rem",
        overflowY: "auto"
      }}
    >
      <div className="content">
        {!selectedRecipe ? (
          <>
            <h2>Ingredient-Based Recipe Suggestions</h2>

            {/* Input */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                type="text"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addIngredient()}
                placeholder="Enter ingredient (e.g., tomato)"
                style={{ flex: 1, padding: "8px" }}
              />
              <button onClick={addIngredient}>Add</button>
            </div>

            {/* Selected ingredients */}
            <div style={{ marginBottom: "12px" }}>
              {ingredients.map((ing) => (
                <span
                  key={ing}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#eee",
                    padding: "5px 10px",
                    margin: "5px",
                    borderRadius: "15px",
                    cursor: "pointer"
                  }}
                  onClick={() => removeIngredient(ing)}
                  title="Click to remove"
                >
                  {ing} ✕
                </span>
              ))}
            </div>

            {/* Search button */}
            <button
              onClick={fetchSuggestions}
              disabled={loading || ingredients.length === 0}
              style={{ padding: "10px 15px" }}
            >
              {loading ? "Finding..." : "Get Suggestions"}
            </button>

            {/* Recipe list */}
            <div style={{ marginTop: "20px" }}>
              {results.length > 0 ? (
                results.map((recipe) => (
                  <div
                    key={recipe.id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.9)"
                    }}
                    onClick={() => fetchRecipeDetails(recipe.id)}
                  >
                    <h3>{recipe.title}</h3>
                    {recipe.image && (
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        style={{
                          width: "100%",
                          maxHeight: "200px",
                          objectFit: "cover",
                          borderRadius: "5px"
                        }}
                      />
                    )}
                    <p>
                      <b>Used Ingredients:</b>{" "}
                      {recipe.usedIngredients.map((i) => i.name).join(", ")}
                    </p>
                    <p>
                      <b>Missed Ingredients:</b>{" "}
                      {recipe.missedIngredients.map((i) => i.name).join(", ")}
                    </p>
                  </div>
                ))
              ) : (
                <p>No recipes found yet.</p>
              )}
            </div>
          </>
        ) : (
          // FULL SCREEN RECIPE VIEW
          <div
            style={{
              minHeight: "100vh",
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.95)",
              padding: "20px",
              borderRadius: "10px"
            }}
          >
            <button
              onClick={() => setSelectedRecipe(null)}
              style={{
                marginBottom: "20px",
                padding: "8px 12px",
                cursor: "pointer"
              }}
            >
              ← Back
            </button>
            <h2>{selectedRecipe.title}</h2>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <h3>Ingredients</h3>
            <ul>
              {selectedRecipe.extendedIngredients.map((ing) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  selectedRecipe.instructions || "No instructions provided."
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
