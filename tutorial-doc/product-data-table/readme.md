# List of content 



## Step 1: Break the UI into a component hierarchy

- [Organizacion Archivo de components React](https://alexmngn.medium.com/how-to-better-organize-your-react-applications-2fd3ea1920f1)
  - organizacion por tipo de archivo
  - Organizacion por caracteristicas (funcionalidades relacionas)

- [React Project Structure](https://v1.scrimba.com/articles/react-project-structure/)


## Step 2: Build a static version in React

- The static version has a **one-way data flow** because the data flows down from the top-level component to the ones at the bottom of the tree.


## Step 3: Find the minimal but complete representation of UI state

- The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself)
- you want to also display the number of items in the list, don’t store the number of items as another state value—instead, read the length of your array.

- Now think of all of the pieces of data in this example application:
  1. The original list of products
  2. The search text the user has entered
  3. The value of the checkbox
  4. The filtered list of products

- Which of these are state? Identify the ones that are not:
  - Does it remain unchanged over time? If so, it isn’t state.
  - Is it passed in from a parent via props? If so, it isn’t state.
  - Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

- Let’s go through them one by one again:

  1. The original list of products is **passed in as props, so it’s not state**.
  2. The search text seems to be state since it changes over time and can’t be computed from anything.
  3. The value of the checkbox seems to be state since it changes over time and can’t be computed from anything.
  4. The filtered list of products **isn’t state because it can be computed** by taking the original list of products and filtering it according to the search text and value of the checkbox.

## Step 4: Identify where your state should live

- For each piece of state in your application:
  1. Identify every component that renders something based on that state.
  2. Find their closest common parent component—a component above them all in the hierarchy.
  3. Decide where the state should live:
    1. Often, you can put the state directly into their common parent.
    2. You can also put the state into some component above their common parent.
    3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

- Now let’s run through our strategy for them:
  1. Identify components that use state:
    - `ProductTable` needs to filter the product list based on that state (search text and checkbox value).
    - `SearchBar` needs to display that state (search text and checkbox value).
  2. Find their common parent: The first parent component both components share is `FilterableProductTable`.
  3. Decide where the state lives: We’ll keep the filter text and checked state values in `FilterableProductTable`.

## Step 5: Add inverse data flow

- React makes this data flow explicit, but it requires a little more typing than two-way data binding.




