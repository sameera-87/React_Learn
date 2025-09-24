
export default function MainComponent(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(
      ingredient => (
        <li key={ingredient}>{ingredient}</li>
      )  
    )

    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}