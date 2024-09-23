
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



### 1. `alert()`
Displays an alert box with a message to the user.

```javascript
window.alert("This is an alert message!");
// or simply
alert("This is an alert message!");
```

**Explanation**: The `alert()` method shows a simple message in an alert dialog box. The user must click "OK" to dismiss it.

---

### 2. `prompt()`
Displays a dialog box prompting the user for input and returns the input value.

```javascript
let userName = window.prompt("Please enter your name:");
// or simply
let userName = prompt("Please enter your name:");
console.log("User's name is: " + userName);
```

**Explanation**: The `prompt()` method asks the user for input, returning the value entered. If the user clicks "Cancel", it returns `null`.

---

### 3. `confirm()`
Displays a dialog box with "OK" and "Cancel" options and returns `true` if the user clicks "OK" and `false` if "Cancel".

```javascript
let isConfirmed = window.confirm("Are you sure you want to proceed?");
// or simply
let isConfirmed = confirm("Are you sure you want to proceed?");
console.log(isConfirmed ? "User confirmed." : "User canceled.");
```

**Explanation**: The `confirm()` method asks the user to confirm an action. It returns `true` if the user clicks "OK" and `false` if they click "Cancel".

---

### 4. `innerWidth`
Returns the width of the window’s content area (viewport) in pixels.

```javascript
let width = window.innerWidth;
console.log("Window width is: " + width + "px");
```

**Explanation**: `innerWidth` gives the width of the browser window's content area excluding toolbars and scrollbars.

---

### 5. `innerHeight`
Returns the height of the window’s content area (viewport) in pixels.

```javascript
let height = window.innerHeight;
console.log("Window height is: " + height + "px");
```

**Explanation**: `innerHeight` provides the height of the browser window’s content area.

---

### 6. `open()`
Opens a new browser window or tab.

```javascript
let newWindow = window.open("https://www.example.com", "_blank", "width=600,height=400");
```

**Explanation**: The `open()` method opens a new browser window (or tab) with the specified URL. The second parameter (`_blank`) specifies that it should open in a new tab, and additional parameters control the size of the window.

---

### 7. `setTimeout()`
Calls a function after a specified delay (in milliseconds).

```javascript
window.setTimeout(function() {
    console.log("This message is shown after 2 seconds.");
}, 2000);
// or simply
setTimeout(() => console.log("This message is shown after 2 seconds."), 2000);
```

**Explanation**: The `setTimeout()` method delays the execution of a function by the specified number of milliseconds (2 seconds in this case).

---

### 8. `setInterval()`
Repeats a function at specified intervals (in milliseconds).

```javascript
let intervalId = window.setInterval(function() {
    console.log("This message is shown every 1 second.");
}, 1000);
// or simply
let intervalId = setInterval(() => console.log("This message is shown every 1 second."), 1000);

// To stop the interval
window.clearInterval(intervalId);
```

**Explanation**: The `setInterval()` method executes a function repeatedly at the specified time intervals. The `clearInterval()` method is used to stop the repetition.

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
