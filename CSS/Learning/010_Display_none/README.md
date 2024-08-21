### **Display - `none`**

The `display: none;` property in CSS is used to completely remove an element from the layout of the page. When an element is set to `display: none;`, it behaves as if it doesn't exist in the document. It doesn't occupy any space, and it doesn't affect the positioning of other elements.

### **Key Characteristics of `display: none;`**

- **Element Is Not Rendered**: The element is completely removed from the document's flow. It is not visible and does not take up any space.
- **No Impact on Other Elements**: Other elements are positioned as if the element with `display: none;` is not there.
- **JavaScript Interaction**: Even though the element is not displayed, it still exists in the DOM and can be manipulated with JavaScript.

### **Example 1: Basic Use of `display: none;`**

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display None Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="visible-div">This div is visible.</div>
    <div class="hidden-div">This div is hidden.</div>
    <p>This paragraph is below the hidden div.</p>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.visible-div {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid blue;
}

.hidden-div {
    display: none;
    background-color: lightcoral;
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid red;
}
```

#### **Explanation:**
- **`display: none;`**: The `.hidden-div` is completely removed from the page's layout, so it does not appear at all, and the paragraph below it moves up as if the hidden `div` does not exist.

---

### **Example 2: Toggling Visibility with JavaScript**

`display: none;` is often used in conjunction with JavaScript to show or hide elements dynamically.

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Display None</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <button id="toggleButton">Show/Hide Div</button>
    <div id="toggleDiv" class="hidden-div">This div can be toggled.</div>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.hidden-div {
    display: none;
    background-color: lightcoral;
    padding: 20px;
    margin-top: 10px;
    border: 2px solid red;
}
```

#### **JavaScript Example (`script.js`):**

```javascript
document.getElementById('toggleButton').addEventListener('click', function() {
    var toggleDiv = document.getElementById('toggleDiv');
    if (toggleDiv.style.display === 'none') {
        toggleDiv.style.display = 'block';
    } else {
        toggleDiv.style.display = 'none';
    }
});
```

#### **Explanation:**
- **Button and JavaScript**: When the button is clicked, the `div` with the ID `toggleDiv` will be shown or hidden by toggling its `display` property between `none` and `block`.

---

### **Example 3: Comparison with `visibility: hidden;`**

`visibility: hidden;` makes an element invisible, but unlike `display: none;`, it still occupies space in the layout.

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display None vs Visibility Hidden</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="visibility-hidden">This div is invisible but occupies space.</div>
    <div class="display-none">This div is removed from the layout.</div>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.visibility-hidden {
    visibility: hidden;
    background-color: lightgreen;
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid green;
}

.display-none {
    display: none;
    background-color: lightcoral;
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid red;
}
```

#### **Explanation:**
- **`visibility: hidden;`**: The `.visibility-hidden` `div` is invisible, but the space it would occupy is still there.
- **`display: none;`**: The `.display-none` `div` is completely removed, and the space it would have occupied is not taken up.

---

### **Summary**

- **`display: none;`**: Completely removes an element from the page's layout and renders it invisible. The element still exists in the DOM but does not affect the page's layout or occupy any space.
- **Toggling with JavaScript**: Commonly used to dynamically show or hide elements on the page.
- **Comparison with `visibility: hidden;`**: While `display: none;` removes the element from the layout, `visibility: hidden;` only makes the element invisible while still reserving its space in the layout.