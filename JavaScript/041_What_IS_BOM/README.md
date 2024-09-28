# BOM [Browser Object Model]

The Browser Object Model (BOM) allows JavaScript to interact with the browser. It represents the various browser components and enables developers to manipulate them programmatically. The BOM consists of various objects, but the primary and most significant is the `window` object, which acts as the global object for all browser environments.

---

## 1. Introduction to the Window Object

The `window` object is the root of the BOM and represents the browser window that displays the webpage. It is a global object that contains properties and methods that allow you to control the browser, interact with the document, and manage global variables, functions, and other objects.

### Key Points:

- The `window` object is automatically created when the browser loads a page.
- It serves as the parent for the `document` object, allowing you to access and manipulate HTML content.
- All global variables, objects, and functions in JavaScript are members of the `window` object by default.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Window Object Example</title>
</head>
<body>
    <script>
        // Accessing properties of the window object
        console.log(window.document);  // Logs the document object
        console.log(window.innerHeight);  // Logs the inner height of the browser window
        console.log(window.innerWidth);  // Logs the inner width of the browser window
    </script>
</body>
</html>
```

In this example, we access properties of the `window` object, such as `document` and the window dimensions.

---

## 2. What Can We Do with the `window` Object?

The `window` object offers various methods and properties to control and interact with the browser. Here are some of the most common operations:

### 2.1 Opening and Closing Windows

- **`window.open()`**: Opens a new browser window or tab.
- **`window.close()`**: Closes the current window.

#### Example:

```js
let newWindow = window.open("https://example.com", "_blank", "width=400, height=400");
newWindow.close();  // Closes the newly opened window
```

### 2.2 Moving and Resizing Windows

- **`window.moveTo(x, y)`**: Moves the window to a specified position.
- **`window.resizeTo(width, height)`**: Resizes the window to the specified dimensions.

#### Example:

```js
window.moveTo(100, 100);  // Moves the window to position (100, 100)
window.resizeTo(800, 600);  // Resizes the window to 800x600 pixels
```

### 2.3 Printing the Document

- **`window.print()`**: Opens the print dialog to print the current document.

#### Example:

```js
window.print();  // Opens the print dialog
```

### 2.4 Running Code After a Period of Time

The `window` object allows us to execute code after a certain delay or repeatedly using `setTimeout` and `setInterval` methods.

- **`setTimeout()`**: Executes code after a specified delay.
- **`setInterval()`**: Repeatedly executes code at specified intervals.

#### Example:

```js
// Runs a function after 3 seconds (3000 milliseconds)
setTimeout(() => {
    console.log("This runs after 3 seconds!");
}, 3000);

// Runs a function every 2 seconds (2000 milliseconds)
setInterval(() => {
    console.log("This runs every 2 seconds!");
}, 2000);
```

### 2.5 Controlling the URL

The `window` object provides properties and methods to interact with the current URL:

- **`window.location.href`**: Gets or sets the URL of the current page.
- **`window.location.reload()`**: Reloads the current page.
- **`window.location.assign(url)`**: Changes the URL to the specified one.

#### Example:

```js
console.log(window.location.href);  // Logs the current URL
window.location.href = "https://google.com";  // Redirects to Google
```

### 2.6 Saving Data in the Browser

The `window` object allows us to store data locally using `localStorage` and `sessionStorage` objects.

- **`localStorage`**: Stores data with no expiration date (even after closing the browser).
- **`sessionStorage`**: Stores data for one session (data is lost after closing the browser).

#### Example:

```js
// Save data in localStorage
localStorage.setItem("username", "Mahmoud");

// Retrieve and display the stored value
console.log(localStorage.getItem("username"));  // Output: Mahmoud

// Remove the stored data
localStorage.removeItem("username");
```

---

## 3. Conclusion

The BOM provides various objects and methods to interact with the browser, with the `window` object being the central hub for all BOM operations. From controlling the browser window to managing storage, the BOM offers powerful features for client-side programming.