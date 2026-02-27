# List of content

- How to get the most from this course
  - The easy way is the hard way
  - Learn by doing
  - Avoid [Tutorial Hell](https://codeburst.io/digging-my-way-out-of-tutorial-hell-6dd5f9927384)
  - You're not being graded
  - [Make it tick](https://www.amazon.com/dp/0674729013/ref=cm_sw_r_as_gl_api_gl_i_AW9FHFZ8KGFCHANV427C?linkCode=ml1&tag=mademindful-20) your brain [book](https://pubhtml5.com/hmeo/meox/)
    - Active retrieval
    - Spaced repettition
    - Varied applications

## Learn React

React basics in the most interactive, hands-on way possible.

### Static Pages [(01-React-Facts)](./01-react-facts/readme.md)

- What we'll learn
  - Learn to "Think in React"
  - Why you should care about React
  - Setting up a new React project
  - JSX
  - Custom Components

- Figma Resources
  - [React Facts](https://www.figma.com/design/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0-1&p=f)
  - Digital Business Card
  - [Figma File](https://www.figma.com/design/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0-1&p=f)
  - [FIgma FIle](https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1)

#### Recap

- Why you should care about React
- Setting up a new React project
- JSX
- Custom Components
-

### Data Driven React

What we'll learn

- Why reusability is important
- Props
- Creating components from an array of data

### React State (Dynamic Web App)

- [Checf Claude Figma](https://www.figma.com/proto/73iyU720zWmrWgJsok5tYE/Chef-Claude?node-id=1-972&t=FlwVw7UCqr1O4Q1t-1)
- Read-Write : user has ability to change data
- Highly interative
- Complex Objects
- React Forms <br/> Form Action
- Conditional
- Passing Data around React <br> Se puede pasar los datos llevando como propiedad a un componente superior (padre) y pasarlo como properties
  - Redux
  - Zoo Standar
  - Context
- Sound Pads Project
  - Local state
  - shared state
  - Updating item in array

### Side Effects

- Fetching data in React

- [Flip API Images](https://imgflip.com/api)

- Functional Programiming
  - Pure Functions / Components:  <br>A pure function is one that if it's given the same inputs it will always produce the same outputs and running that function will never have any kind of change elsewhere in your system.
This is where the concept of UI as a function of state comes from.
  
  - Immutabililty: <br> if we have a component that's receiving props, it's very important in React that we never change those props to anything else. Otherwise doing this means that our props are mutable and in functional programming and especially here in React, props are immutable.
  
  - Avoid side effects: <br> solution in React that allows us to avoid side effects as much as possible, but also to escape from that paradigm whenever it's necessary so that we can keep developing what we need to build.

- What are React's primary tasks?
  - Work with the DOM/browser to render UI to the page
  - Manage state focus between render cycles (i.e state values are "remembered" from one render to the next)
  - Keep the UI updated whenever state or props changes occur

- What can't React handle on its on?
  - Out side effects!
  - localstorage
  - API./database interactions
  - Subscriptions (e.g. websocket connections)
  - Basically anything that React isn't in charge of

- [UseEffects](https://react.dev/learn/escape-hatches)
  - Dependecies Array
  - CleanUp Function:
    - So as a recap, because we have an empty array here, we are just calling this use effect one time when the component first mounts to the page.
    - When we do that, we're setting up an event listener for the resize event on the window object, and it's going to run this function if the resize event ever happens.
    - Then we're returning our cleanup function, which says if this component ever unmounts, just run whatever code I put inside of this function so that I can be sure I don't have any of these side effects just kind of floating around inside my browser.

- Refs: are similar to state, except:
  - You can mutate them directly
  - Changing them doesn't cause a re-render.
  - They're commonly used for accessing DOM nodes without needing to assign ids to elements

- Quiz React

1. In what way are React components meant to be "pure functions"

- Given the same props or state, the component will always return
  the same content, or UI
- Rendering and re-rendering a component will never have any kind
  of side effect on an outside system

1. What is a "side effect" in React? What are some examples?

- Any code that affects or interacts with an outside system
- local storage, API, websockets, DOM manipulation

1. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with data,
  rendering DOM elements

1. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component renders for the first time
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

1. How would you explain what the "dependecies array" is?

- Second parameter to the useEffect function
- A way for React to know whether or not it should re-run the effect function

- advanced Topic
  - Reusability components in React
  - [Managing State React](https://react.dev/learn/managing-state)

### Project1: Tenzies Game

- [Figma Project](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1)



### Project2: Assembly: Endgame

### Turn your certificate into an assets


 Certificate:
 https://scrimba.com/learn-react-c0e;cert24zAwPPowUv7XjgyfLjiEnrgk5R2cmNaU3XLL