import React from 'react';
import Die from './Die';
import { nanoid } from "nanoid"

/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop. Should
 *   render a button with that value displayed.
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */





function Main() {
    const [dices, setDices] = React.useState(generateAllNewDice())

    function generateAllNewDice() {
        // Imperativa approach
        /*const newDice = [];
        for (let index = 0; index < 10; index++) {
            const element = Math.floor(Math.random() * 6) + 1;
            newDice.push(element);
        }        
        return newDice;*/

        // Functional approach        
        return new Array(10)
            .fill({})
            .map(() => {
                const randomNumber = Math.ceil(Math.random() * 6)
                return { value: randomNumber, isHeld: false, id: nanoid() }
            });
    }

    /**
     * Challenge:
     * 
     * Create state to hold our array of numbers. (Initialize
     * the state by calling our `generateAllNewDice` function so it 
     * loads all new dice as soon as the app loads)
     * 
     * Map over the state numbers array to generate our array
     * of Die components and render those in place of our
     * manually-written 10 Die elements.
     */

    /** map over dice here */
    const dicesElements = dices.map(ele => (
        <Die
            key={ele.id}
            isHeld={ele.isHeld}
            value={ele.value}
            hold={() => hold(ele.id)}
        />
    ))

    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

    /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `hold`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */
    function rollDice() {
        setDices(prevDices => prevDices.map(dice => {
            return !dice.isHeld ?
                { ...dice, value: Math.ceil(Math.random() * 6) } :
                dice
        }))
    }
    /**
    * Challenge: Update the array of numbers in state to be
    * an array of objects instead. Each object should look like:
    * { value: <random number>, isHeld: false }
    * 
    * Making this change will break parts of our code, so make
    * sure to update things so we're back to a working state
    */

    /**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */

    /**
    * Challenge: Update the `hold` function to flip
    * the `isHeld` property on the object in the array
    * that was clicked, based on the `id` prop passed
    * into the function.
    * 
    * Hint: as usual, there's more than one way to 
    * accomplish this.
    */

    function hold(id) {
        setDices(prevDices => prevDices.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dicesElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}

export default Main;