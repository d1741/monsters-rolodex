## State

some object (JS) with properties that we can access at any point inside of our class

- done by calling the constructor method
- Don't forget super()!

## setState

lets us modify our state

- Example: onClick can be used on any HTML tags within our JSX to change the state whenever someone clicks on a specific element

  - any time a user interacts with our site, React "intercepts" the click/interaction and updates the state. State does NOT get modified automatically

  - whenever state changes, render() gets called again

- JSX is trying to mimic what HTML does so we can create the virtual DOM

## Dynamic content

- .map()

  - will iterate over each one of the monsters listed in our object array (line 10ish) and return the result of whatever function we call on each element (i.e. run the function on Dracula, run the function on Frakenstein, etc.)

- key

  - key will tell React exactly which element needs to be updated. React is smart, so if something small changes on "Dracula" and we've given it a unique key, it will only re-render that one specific aspect of the page
  - "Which HTML is attached to which element?"
  - Any time you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute

## Single Page Application

- What does "class App extends Component" really mean?

  - Component is part of the React library
  - When we type "class App extends Component/React.Component" we're asking React to give us access to whatever pre-built functionality this "Component" has, in addition to whatever more specific functionality we add on in our program.
    - "batteries included"
  - Components have pre-loaded methods that we can apply to the lifecycle

- What is a SPA?
  - Back in the old days, we visited a link and a JS/HTML/CSS file was returned. When we clicked somewhere else, we got a whole new set of JS/HTML/CSS. Single Page Applications introduced the idea of communicating directly with the backend right off the bat.
    - We'd receive a _tiny_ HTML file (id="root"), a _big_ JS file (react library + components) and not really have to talk to the server much beyond that initial contact
    - JS + React rerenders the DOM
  - Makes it easier to communicate with other databases and APIs
    - signin/signout, add items to cart, checkout, etc
    - we don't have to hard code our entire page anymore because we're constantly in communication with the outside databases/APIs/server/backend

## Fetching Content

- How do we get the app component to make a call to the backend, put that data into our state so the render function has access?
  - Life Cycle Methods!
- What are life cycle methods?
  - methods called automatically by React at different stages of page rendering
- What is componentDidMount?
  - mounting is when React puts our component onto the page, it renders it to the DOM for the first time
  - this is where we'd use fetch to get back a promise we can use
- How do we use the information returned from componentDidMount()?
  - once we "fetch" whatever information we need, we use .then to tell React what to do with it.
    - We need to return information in a readable way, so we use .JSON to "translate"
- What now?
  - we can get the users back and use this.setState to set our list of "monsters" to the information returned to us from the db
  - this also means that in our constructor, we need set our monsters object to an empty array because we no longer need to hard code names, etc. since we're getting all of that dynamically from the API

## Architecting Our App

- What is the difference between a pre-built component and one we, the developers, build?

  - Capital letters indicates components we built, lower case = pre-built (<h1>)

- Functional Components vs. Class Components

  - functional components are built using arrow functions with props, class components require us to use the constructor
  - functional components just get props and return some HTML
    - if you don't think you're going to need to access state or use a life cycle method, use a functional component
  - both use the Capital naming system and both will return some kind of JSX elements

- What Makes a Good Folder Structure?
  - name files specifically and efficiently
  - .jsx if there is any jsx in the code (instead of just js)

## Card List Component

- How can we break our code into smaller, reusable pieces with one responsibility?

  - each card
  - search bar
  - group of cards
    - all of these aspects of the page should be their own component. They don't really "care" about what's happening with other parts of the webpage

- Props!!! What is it? Where do props come from?

  - the parameter we get from our functional component
  - props are associated with anything we add to the calling of the actual component (ex: we called <CardList /> inside of App.js and later added a name="whoever" to it. The name would be our property or "props")

- What are children?
  - what you pass inbetween the brackets of the component when it's called (ex: <ClassList name="whoever"><h1>Whoever</h1></ClassList>, the <h1> whoever is the child of our ClassList component's props)

## Card Component

- how/why to shift the responsibility of rendering our monsters from our App component to our CardList component
- how to put individual cards together

## Search Field State

- add <input type='search' placeholder='Search Monsters'  /> HTML element to App.js
- "hijack" user input and store their search in our state by adding a field to our state
- callback for setState on our search

## Filtering State

- how do we modify state to accomodate the users' search?
  -.filter(), .toLowerCase(), .includes()
  -destructuring

## Class Methods and Arrow Functions

- writing our own methods on class components

  - this keyword will be bound differently

- what does the "this" keyword reference?

- what does .bind() method do?

  - good rule of thumb for binding: Use arrow functions on any class methods you define and aren't already part of what React offers.

- how do es6 arrow functions make writing our own methods easier/better?
