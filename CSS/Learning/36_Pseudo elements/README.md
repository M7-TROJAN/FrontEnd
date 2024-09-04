### Lesson: CSS Pseudo-Elements

CSS pseudo-elements allow you to style specific parts of an element, such as the first letter of a paragraph, or insert content before or after an element. Unlike pseudo-classes, which select entire elements based on their state or position, pseudo-elements let you target and style parts of an element.

#### **Common Pseudo-Elements**

1. **`::before`**: Inserts content before an element's content.
2. **`::after`**: Inserts content after an element's content.
3. **`::first-letter`**: Styles the first letter of a text block.
4. **`::first-line`**: Styles the first line of a text block.
5. **`::selection`**: Styles the portion of the text that the user selects.

---

### **1. Example: `::before` Pseudo-Element**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Before Pseudo-Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2 class="title">Hello, World!</h2>
</body>
</html>
```

```css
.title::before {
    content: "🌟 ";
    font-size: 24px;
    color: gold;
}
```

##### **Explanation:**
- The `::before` pseudo-element inserts content (in this case, a star emoji) before the content of the `.title` element. 
- You can style the inserted content just like any other element with properties such as `font-size` and `color`.

---

### **2. Example: `::after` Pseudo-Element**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>After Pseudo-Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="message">This is a message</p>
</body>
</html>
```

```css
.message::after {
    content: " ✔";
    color: green;
    font-weight: bold;
}
```

##### **Explanation:**
- The `::after` pseudo-element inserts content (in this case, a checkmark) after the content of the `.message` element.
- This is often used to add icons or text dynamically after an element's content.

---

### **3. Example: `::first-letter` Pseudo-Element**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Letter Pseudo-Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</body>
</html>
```

```css
.intro::first-letter {
    font-size: 3em;
    color: darkred;
    font-weight: bold;
}
```

##### **Explanation:**
- The `::first-letter` pseudo-element targets and styles the first letter of the `.intro` paragraph. 
- This is useful for creating effects like drop caps in paragraphs.

---

### **4. Example: `::first-line` Pseudo-Element**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Line Pseudo-Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
</body>
</html>
```

```css
.paragraph::first-line {
    font-weight: bold;
    color: blue;
}
```

##### **Explanation:**
- The `::first-line` pseudo-element styles the first line of the `.paragraph`. 
- The exact text that is styled depends on the width of the container, so this is particularly useful for highlighting the beginning of paragraphs.

---

### **5. Example: `::selection` Pseudo-Element**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selection Pseudo-Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="text">Select this text to see a custom highlight color.</p>
</body>
</html>
```

```css
::selection {
    background-color: yellow;
    color: black;
}
```

##### **Explanation:**
- The `::selection` pseudo-element styles the portion of the text that a user selects (e.g., by clicking and dragging). 
- This is commonly used to customize the default text selection color.

---

### **Summary**
- **`::before`**: Inserts content before the element's main content.
- **`::after`**: Inserts content after the element's main content.
- **`::first-letter`**: Styles the first letter of the text content.
- **`::first-line`**: Styles the first line of the text content.
- **`::selection`**: Styles the portion of the text selected by the user.

Pseudo-elements are great for adding content and styling parts of elements without needing to alter the HTML. They're often used for decorative purposes, like icons, or to enhance the user experience.