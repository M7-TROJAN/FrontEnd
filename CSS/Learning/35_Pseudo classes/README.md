### Lesson: CSS Pseudo-Classes

CSS pseudo-classes are used to define the state of an element or to target elements based on their position in the DOM (Document Object Model) without explicitly adding classes in the HTML. These pseudo-classes allow you to style elements based on various conditions, such as when a user interacts with an element, or depending on the structure of the page.

#### **Common Pseudo-Classes**

1. **`:hover`**: Targets an element when the user hovers over it with the mouse.
2. **`:focus`**: Targets an element when it receives focus (e.g., a text input clicked by the user).
3. **`:nth-child()`**: Targets an element based on its position among its siblings.
4. **`:first-child`**: Selects the first child of a parent element.
5. **`:last-child`**: Selects the last child of a parent element.
6. **`:not()`**: Selects elements that do not match the specified selector.
7. **`:checked`**: Selects a checkbox or radio button that is checked.
8. **`:disabled`**: Selects an element that is disabled (e.g., a disabled input field).

---

### **1. Example: Hover Effect**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="hover-button">Hover over me</button>
</body>
</html>
```

```css
.hover-button {
    background-color: lightblue;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.hover-button:hover {
    background-color: deepskyblue;
    color: white;
}
```

##### **Explanation:**
- The `.hover-button` class defines the initial style for the button.
- The `:hover` pseudo-class is used to change the button’s background color and text color when the user hovers over it.

---

### **2. Example: Focus Effect**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Focus Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <input type="text" class="focus-input" placeholder="Click to focus">
</body>
</html>
```

```css
.focus-input {
    padding: 10px;
    border: 2px solid lightgrey;
}

.focus-input:focus {
    border-color: blue;
    outline: none;
}
```

##### **Explanation:**
- The `.focus-input` class styles the input field with padding and a border.
- The `:focus` pseudo-class changes the border color when the input field is focused (e.g., when clicked).

---

### **3. Example: nth-child()**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nth-child Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <ul class="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</body>
</html>
```

```css
.list li:nth-child(odd) {
    background-color: lightgrey;
}

.list li:nth-child(even) {
    background-color: white;
}
```

##### **Explanation:**
- The `:nth-child(odd)` pseudo-class selects all odd-numbered list items (1st, 3rd, 5th, etc.) and applies a grey background.
- The `:nth-child(even)` pseudo-class selects all even-numbered list items (2nd, 4th, 6th, etc.) and applies a white background.

---

### **4. Example: First and Last Child**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First and Last Child Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <ul class="list">
        <li>First Item</li>
        <li>Middle Item</li>
        <li>Last Item</li>
    </ul>
</body>
</html>
```

```css
.list li:first-child {
    color: green;
}

.list li:last-child {
    color: red;
}
```

##### **Explanation:**
- The `:first-child` pseudo-class styles the first list item with green text.
- The `:last-child` pseudo-class styles the last list item with red text.

---

### **5. Example: not()**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>not() Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">Box 1</div>
    <div class="box special">Box 2</div>
    <div class="box">Box 3</div>
</body>
</html>
```

```css
.box:not(.special) {
    background-color: lightblue;
}
```

##### **Explanation:**
- The `:not(.special)` pseudo-class selects all `.box` elements that do not have the `.special` class and applies a background color.

---

### **6. Example: Checked**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checked Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label>
        <input type="checkbox" class="checkbox"> Check me
    </label>
</body>
</html>
```

```css
.checkbox:checked {
    accent-color: green;
}
```

##### **Explanation:**
- The `:checked` pseudo-class selects the checkbox when it is checked and changes its accent color.

---

### **Summary**

- **`:hover`**: Styles elements when hovered by the user.
- **`:focus`**: Styles elements when focused (e.g., input fields).
- **`:nth-child()`**: Selects elements based on their position.
- **`:first-child` and `:last-child`**: Target the first and last child elements.
- **`:not()`**: Excludes elements from selection.
- **`:checked`**: Targets checked form elements like checkboxes or radio buttons.

Pseudo-classes are essential for adding interactivity and conditional styling to your web pages. They help create dynamic styles without the need for JavaScript or additional classes in your HTML.