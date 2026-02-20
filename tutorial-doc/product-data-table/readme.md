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
