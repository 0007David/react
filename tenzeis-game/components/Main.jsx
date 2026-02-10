import React from 'react';
import Die from './Die';
import { nanoid } from "nanoid";
// import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti';

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
    // const { width, height } = useWindowSize()
    /**
     * Challenge:
     * Log "Game won!" to the console only if the 2 winning
     * conditions are met.
     * 
     * 1. all the dice are being held, and
     * 2. all the dice have the same value
     * 
     * For now, no need to even save a variable!
     */

    /**
     * Challenge part 2:
     * 1. Create a new `gameWon` variable.
     * 2. If `gameWon` is true, change the button text to
     *    "New Game" instead of "Roll"
     */
    const gameWon = dices.every(
        ele => (ele.isHeld && ele.value === dices[0].value));

    /**
     * Challenge:
     * Make the confetti drop when the game is won! 🎉🎊
     */

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

    /**
     * Critical thinking time!
     * 
     * We want to indicate to the user that the game is over
     * if (1) all the dice are held, and (2) all the dice have
     * the same value.
     * 
     * How might we do this? Some questions to consider:
     * 
     * 1. Do we need to save a `gameWon` value in state? If so, why?
     *    If not, why not?
     * 
     * 2. Do we need to create a side effect to synchronize the `gameWon`
     *    value (whether it's in state or not) with the current state of 
     *    the dice?
     * 
     * Conclusion:
     * We can derive the gameWon status based on the condition(s) of the current
     * dice state on every render.
     */


    return (<main>
        {gameWon ? <Confetti /> : null}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {dicesElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>{gameWon ? 'New Game' : 'Roll'}</button>
    </main>
    )
}

export default Main;