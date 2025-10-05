import React from "react"
import IngredientsList from "./components/IngredientList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function MainComponent(){

    const [ingredients, setIngredients] = React.useState("")
       
    const [recipe, setRecipe] = React.useState(false)
    const recipeSection =  React.useRef(null)
    
    React.useEffect(() => {
        if(recipe != "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior : "smooth"})
        }
    }, [recipe])
    

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>     

            {ingredients.length > 0 && 
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}                
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe}/>}        
            
        </main>
    )
}