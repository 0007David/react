import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral, getRecipeApi } from "./ai";


/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

function Main() {
    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */
    //const ingredients = ["all the main spices", "pasta", "ground beef", "tomato paste"]
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipe, setRecipe] = React.useState("");


    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */
    function handleSubmit(formData) {
        /**
         * Like before, don't worry about this FormData stuff yet.
         * Just use the newIngredient below to help you finish the
         * challenge.
         */
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    }

    /**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     */
    async function getRecipe() {
        // setRecipeShown((prevRecipeShow) => !prevRecipeShow);
        const recipeMarkdown = await getRecipeApi(ingredients)
        setRecipe(recipeMarkdown.content);
    }
    /**
    * Challenge: clean up our code!
    * Let's make a couple new components to make things a
    * little cleaner. (Notice: I'm not suggesting what we
    * have now is bad or wrong. I'm mostly finding an excuse
    * to get in some hands-on practice 🙂)
    * 
    * 1. Move the entire recipe <section> into its own
    *    ClaudeRecipe component
    * 2. Move the list of ingredients <section> into its
    *    own IngredientsList component.
    * 
    * While you're considering how to structure things, consider
    * where state is, think about if it makes sense or not to
    * move it somewhere else, how you'll communicate between
    * the parent/child components, etc.
    * 
    * The app should function as it currently does when you're
    * done, so there will likely be some extra work to be done
    * beyond what I've listed above.
    */

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {(ingredients.length > 0) &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}
            {recipe &&
                <ClaudeRecipe recipe={recipe} />}

        </main>
    );
}

export default Main;