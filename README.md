# CSS IN REACT

## CHAPTER 5

* their are 4 ways to add css in React.
    1. Inline Styling
    2. CSS Files
    3. CSS modules
    4. Tailwind CSS

## 1. Inline CSS

* we can specify as:

```css
<h3>Inline CSS</h3>
<p style={{color: "red", textAlign: 'center'}}>
    this is paragraph in style.
</p>
```

### NOTE

* the *first set of curly brackets* is used to write **JavaScript expressions**.
* The *second set of curly brackets* initialize a **JavaScript object**.

### Drawaback

1. One of the benefits of using the inline style approach is that you will have a **simple component-focused styling technique**.
2. When using an object for styling, you can extend your style by spreading the object(`...args`).
3. But in a big and complex project where you have hundreds of React components to manage, this might not be the best choice for you.
4. You can’t specify pseudo classes using inline styles.
5. That means you can’t define rules like `:hover`, `:focus`, `:active`, and so on. Also, you can’t specify media queries for responsive styling.

## 2. CSS Files

* the way to add css in React is to use `.css` files.
* Vite already knows how to handle a `.css` file, so all you need to do is `import` the CSS file into your JSX file.
* You can even include a CSS framework such as `Bootstrap` into React with this approach.

## 3. CSS Modules

* A CSS module is a regular CSS file with all of its class and animation names scoped locally by default.
* When you build your app, `Vite` will automatically look for CSS files that have the `.module.css` name and process the class names to a new localized name.

## steps

### i. Create the `App.module.css` file in `src` folder

### ii. write the styling according to `classNames` as like

```css
.BlueParagraph {
    color: blue;
    text-align: left;
}
.GreenParagraph {
    color: green;
    text-align: right;
}
```

### iii. Import this styles in `App.jsx` as

```js
import styles from "./App.module.css";
```

-------

```css
    <p className={styles.BlueParagraph}>
        The weather is sunny today.
    </p>
    <p className={styles.GreenParagraph}>
        Still, don't forget to bring your umbrella!
    </p>
```

* Using CSS Modules ensures that your CSS classes are scoped locally, preventing CSS rules from colliding with each other
* Another advantage of using CSS Modules is that you can compose a new class by inheriting from other classes that you’ve written.
* Example:

```css
.button{
    margin-right: 0.4rem;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
}
.second {
    composes: button; /* '.second' composes '.button' */
    background-color: red;
}
.third {
    composes:button; /* '.third' composes '.button' */
    background-color: blue;
}
```

## 4. Tailwind CSS

* Tailwind CSS is a modern utility-first CSS framework that allows you to style elements by combining a bunch of classes together.
* CSS frameworks like 'Bootstrap' and 'Bulma' provide you with high-level components that you can immediately use in your project.
* When you need to style a button, you just need to apply the classes that contain the desired CSS properties:

```css
    <button className="btn btn-primary">Subscribe</button>
```

* When using Bootstrap, the 'btn' class provides a combination of CSS properties such as padding, color, opacity, font weight, and so on.
* On the other hand, Tailwind gives you utility classes where each class has only one or two properties.

```css
<button className='px-5 py-2 text-white bg-blue-500 border-2'>
    Subscribe   
</button>
```

* here,  
    1. `px-5`  is short for padding `padding-left` and `padding-right` with `5px` as size.  

    2. `py-2`  is short for `padding padding-top` and `padding-bottom` with `2px` as `size`.

    3. `text-white`  means `color: white`.

    4. `bg-blue-500`  means `background-color:blue`.

    5. `border-2`  means `border-width:2px`

* To use Tailwind in your project, you need to integrate the required JavaScript library in your project.
* As you will practice building a React project in the next chapter, I recommend you to use CSS files because it’s the easiest way.
* You only need to import `.css` file in your `main.jsx file.

## USING FETCH IN REACT

### CHAPTER 9

* Modern web applications tend to have a modular architecture,where the back end is separated from the front end.
* The front end app will need to send an HTTP network request to a remote endpoint.
* React doesn’t tell you how you should send network requests.
* The library only focuses on rendering UI with data management using props and states.
* To fetch data using React, you can use any valid JavaScript library like `Axios`, `Superagent`, and even the native `Fetch API`.
* In this chapter, we’re going to see how to do network requests using Fetch in React.

### `useEffect()` Hook

* *When you create a React application that needs to synchronize with a system outside of React, you need to use the `useEffect` hook.*
* This hook allows you to run some code after rendering so that you can synchronize your component with some system outside of React.
* When the hook has finished performing the data request, you can set the `response` into your component states and render the appropriate components based on the state values.
* To show you an example, let’s fetch data from:
  
    ```cmd
    https://jsonplaceholder.typicode.com/todos/1
    ```

code:

```js
function App() {
  const [title, setTitle] = useState("");

  const getData = async () => {
    // promise-based-response
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log(response);

    // json-based-object
    const task = await response.json();

    console.log(task);
    setTitle(task.title);
  };

  // useEffect called initially []
  useEffect(() => {
    getData();
  }, []);

  return <h1>{title}</h1>;
}

export default App;
```

* In the code above, we create an App component that has a state called `title`, and we run the `Fetch API` to get a todo task from the API.
* When a `response` is received, we parse the `JSON string` into a `JavaScript object`, log the object, and then set the `title` state to the `task.title` property value.
* Here, you can see that the `console.log()` is called `twice`.
* This is because the `<React.StrictMode>` wrapper always runs a `useEffect` hook twice to help you in development.
* If you remove the `<React.StrictMode>` wrapper in `main.jsx`, the `useEffect` hook will run only once.
* The `useEffect` hook itself is a function that accepts two arguments:
  1. A **callback function** to run on every render
  2. An **array of state variables** to watch for changes.

* `useEffect` will be skipped if none of the variables are updated.
* When you want to run `useEffect` *only once, you can pass an empty array as the second argument to the function*, as shown
in the example above.
* Note that when you use a framework such as `Next.js`, you probably don’t need to create an effect hook manually as shown below.
* But it’s still good to know how React works outside of a framework, because you might work with a technology stack that uses a *non-JavaScript* framework such as `Rails` or `Laravel`.

### Summary

* In this chapter, you’ve seen how a React application can send network requests using the *native Fetch API*.
* React doesn’t tell you what library to use to fetch data. Instead,it only exposes a hook that enables you to synchronize your
 component to external systems.
  