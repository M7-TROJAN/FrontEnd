# What is DOM & Selecting Elements by JavaScript

---

## 1. What is the DOM?

### The **Document Object Model** (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects. This allows JavaScript to interact with, manipulate, and update the content, structure, and style of a webpage dynamically.

- The DOM represents the document (web page) as a structured **tree of nodes**.
- Each HTML element is represented as a **node** in the DOM tree.

### Example: DOM Representation of HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The DOM structure of this HTML:

- The `html` element is the root node.
- Inside `html`, there are two child nodes: `head` and `body`.
- The `body` node contains the `h1` and `p` nodes.

---

## 2. How JavaScript Interacts with the DOM

JavaScript can access and manipulate DOM elements through the **`document`** object, which serves as the entry point to the DOM.

### Example: Accessing the DOM with JavaScript

```js
console.log(document.title); // Outputs: Document Object Model
```

JavaScript accesses the `document` object, retrieves the title of the page, and logs it to the console.

---

## 3. Selecting Elements in the DOM

To interact with specific elements in the DOM, JavaScript provides several methods for selecting HTML elements.

### 3.1 `getElementById()`

This method selects an element by its unique `id` attribute.

### Example 1: Selecting an Element by ID

```html
<p id="myParagraph">This is a paragraph.</p>

<script>
  const paragraph = document.getElementById("myParagraph");
  console.log(paragraph.textContent); // Outputs: This is a paragraph.
</script>
```

`getElementById` retrieves the paragraph with the `id="myParagraph"`.

---

### 3.2 `getElementsByClassName()`

This method selects all elements with a specific class name and returns them as a **HTMLCollection** (an array-like object).

### Example 2: Selecting Elements by Class Name

```html
<p class="info">This is paragraph one.</p>
<p class="info">This is paragraph two.</p>

<script>
  const paragraphs = document.getElementsByClassName("info");
  console.log(paragraphs[0].textContent); // Outputs: This is paragraph one.
</script>
```

`getElementsByClassName` retrieves all elements with the class name `info`.

---

### 3.3 `getElementsByTagName()`

This method selects all elements with a specific tag name (e.g., `p`, `div`, `h1`) and returns them as an **HTMLCollection**.

### Example 3: Selecting Elements by Tag Name

```html
<h1>This is a heading</h1>
<h1>This is another heading</h1>

<script>
  const headings = document.getElementsByTagName("h1");
  console.log(headings.length); // Outputs: 2
</script>
```

`getElementsByTagName` retrieves all `h1` elements.

---

### 3.4 `querySelector()`

This method selects the **first** element that matches a CSS selector (ID, class, tag, or attribute).

### Example 4: Selecting the First Element Using `querySelector()`

```html
<p class="info">This is paragraph one.</p>
<p class="info">This is paragraph two.</p>

<script>
  const firstParagraph = document.querySelector(".info");
  console.log(firstParagraph.textContent); // Outputs: This is paragraph one.
</script>
```

`querySelector` returns only the **first** element matching the CSS selector `.info`.

---

### 3.5 `querySelectorAll()`

This method selects **all** elements that match a CSS selector and returns them as a **NodeList** (which is similar to an array).

### Example 5: Selecting All Elements Using `querySelectorAll()`

```html
<p class="info">This is paragraph one.</p>
<p class="info">This is paragraph two.</p>

<script>
  const allParagraphs = document.querySelectorAll(".info");
  console.log(allParagraphs.length); // Outputs: 2
</script>
```

`querySelectorAll` selects all elements that match the selector and returns a NodeList containing both paragraphs.

---

## 4. Modifying the DOM

Once you've selected elements, you can modify them using JavaScript. Here are a few common modifications:

### 4.1 Modifying Text Content

You can modify the text content of an element using the **`textContent`** or **`innerHTML`** properties.

### Example 6: Changing Text Content

```html
<p id="myParagraph">Old text.</p>

<script>
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "New text.";
  console.log(paragraph.textContent); // Outputs: New text.
</script>
```

This changes the text of the paragraph with `id="myParagraph"` from "Old text" to "New text."

---

### 4.2 Changing Element Attributes

You can change the attributes of an element using the **`setAttribute()`** method.

### Example 7: Changing an Element’s Attribute

```html
<img id="myImage" src="oldImage.jpg">

<script>
  const image = document.getElementById("myImage");
  image.setAttribute("src", "newImage.jpg");
</script>
```

This changes the `src` attribute of the image to `newImage.jpg`.

---

## 5. Summary

- The DOM is the structured representation of a webpage, allowing JavaScript to interact with the document.
- JavaScript provides various methods to select elements from the DOM, such as `getElementById()`, `getElementsByClassName()`, `querySelector()`, and more.
- Once selected, you can modify elements by changing their content, attributes, or applying styles.

---