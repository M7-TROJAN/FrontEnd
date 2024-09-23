
# Window, Document, and Console in JavaScript

In JavaScript, the browser provides several built-in objects that allow developers to interact with and manipulate the webpage and browser environment. The three key objects are:

1. **Window**
2. **Document**
3. **Console**

Each of these objects serves a specific purpose and offers different functionality. Let’s explore them in detail.

---

## 1. The `window` Object

The `window` object represents the browser's window and provides methods and properties to interact with the browser environment itself. It is the global object in the browser, meaning all JavaScript code running in the browser is automatically part of this `window` object.

### Key Features of the `window` Object:
- Controls browser elements such as **window size**, **alerts**, **timers**, etc.
- All global variables and functions are properties of the `window` object.

### Example 1: `window.alert()`

```js
window.alert('This is an alert from the window object!');
```

You can also use `alert()` directly because it is part of the global `window` object:

```js
alert('This is an alert!');
```

### Example 2: `window.innerHeight` and `window.innerWidth`

These properties return the height and width of the window’s content area (viewport).

```js
console.log("Window Height: " + window.innerHeight);
console.log("Window Width: " + window.innerWidth);
```

### Example 3: `window.open()`

This method opens a new browser window.

```js
window.open('https://www.google.com', '_blank');
```

### Common Methods and Properties of `window`:

| Method/Property         | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `alert()`                | Displays an alert box with a message.                                       |
| `prompt()`               | Displays a dialog box prompting the user for input.                         |
| `confirm()`              | Displays a dialog box with "OK" and "Cancel" options.                       |
| `innerWidth`             | Returns the width of the window's content area.                             |
| `innerHeight`            | Returns the height of the window's content area.                            |
| `open()`                 | Opens a new browser window or tab.                                          |
| `setTimeout()`           | Calls a function after a specified number of milliseconds.                  |
| `setInterval()`          | Repeats a function at specified intervals (in milliseconds).                |

---

## 2. The `document` Object

The `document` object is part of the `window` object and represents the webpage (also called the DOM - Document Object Model). It allows you to manipulate the HTML content, structure, and style of a webpage dynamically.

### Example 1: Accessing Elements

You can access HTML elements using methods like `getElementById()`, `getElementsByClassName()`, or `querySelector()`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Example</title>
</head>
<body>
  <h1 id="header">Hello, Mahmoud!</h1>
  <script>
    // Accessing and modifying the element
    let header = document.getElementById('header');
    header.innerText = "Hello, World!";
  </script>
</body>
</html>
```

### Example 2: Creating New Elements

You can also create and insert new HTML elements using `createElement()` and `appendChild()`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Example</title>
</head>
<body>
  <div id="container"></div>
  <script>
    let container = document.getElementById('container');
    let newElement = document.createElement('p');
    newElement.innerText = "This is a new paragraph created with JavaScript!";
    container.appendChild(newElement);
  </script>
</body>
</html>
```

### Example 3: Changing Styles

You can dynamically change the style of HTML elements using JavaScript.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Example</title>
</head>
<body>
  <div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
  <script>
    let box = document.getElementById('box');
    box.style.backgroundColor = "blue"; // Change color to blue
  </script>
</body>
</html>
```

### Common Methods and Properties of `document`:

| Method/Property             | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `getElementById()`           | Selects an element by its `id` attribute.                                   |
| `getElementsByClassName()`   | Selects elements by their `class` name.                                     |
| `querySelector()`            | Selects the first element that matches a specified CSS selector.            |
| `createElement()`            | Creates a new HTML element.                                                 |
| `appendChild()`              | Adds a new child element to a parent element.                               |
| `innerHTML`                  | Gets or sets the HTML content of an element.                                |
| `style`                      | Gets or sets the inline CSS styles of an element.                           |

---

## 3. The `console` Object

The `console` object is used primarily for debugging purposes. It allows developers to log information to the browser's console, which can help monitor the state of the code or trace any errors during execution.

### Example 1: `console.log()`

```js
console.log('This is a message to the console!');
```

This logs a message to the console.

### Example 2: `console.error()` and `console.warn()`

```js
console.error('This is an error message!');
console.warn('This is a warning message!');
```

- `console.error()` logs error messages.
- `console.warn()` logs warnings.

### Example 3: Logging JavaScript Objects

You can log JavaScript objects and arrays to inspect their properties and values.

```js
let person = { name: 'Mahmoud', age: 26 };
console.log(person);
```

### Example 4: Timing Code Execution

You can measure the time it takes to execute code using `console.time()` and `console.timeEnd()`.

```js
console.time('Timer');
for (let i = 0; i < 100000; i++) {
  // Simulating a task
}
console.timeEnd('Timer');
```

### Common Methods of `console`:

| Method                | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `console.log()`        | Logs a message to the console.                                               |
| `console.error()`      | Logs an error message.                                                       |
| `console.warn()`       | Logs a warning message.                                                      |
| `console.time()`       | Starts a timer with a given label.                                           |
| `console.timeEnd()`    | Ends a timer with the specified label and logs the time it took.             |
| `console.table()`      | Displays data (arrays or objects) as a table in the console.                 |

---

## Summary

- **`window` Object**: Represents the browser window. It is the global object in the browser, allowing control over browser elements like alerts, sizes, and timers.
- **`document` Object**: Represents the webpage (DOM) and allows manipulation of HTML elements, structure, and content dynamically.
- **`console` Object**: A debugging tool for logging messages, warnings, errors, and measuring performance within the browser’s console.

These three objects are essential for understanding how JavaScript interacts with the browser, webpage, and development environment.