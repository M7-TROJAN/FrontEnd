### **1. Element Selector**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Selector Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the first paragraph of my web page.</p>
    <p>This is the second paragraph of my web page.</p>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
p {
    color: blue;  /* This will style all <p> elements with blue text */
}
```

**Explanation:**
- In the HTML file, there are two paragraphs (`<p>`) within the `<body>` tag.
- The CSS file targets all `<p>` elements using the `p` element selector.
- Both paragraphs will be displayed with blue text.

---

### **2. Class Selector**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Selector Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p class="highlight">This paragraph is highlighted with a yellow background.</p>
    <p>This paragraph is not highlighted.</p>
    <div class="highlight">This div is also highlighted with a yellow background.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.highlight {
    background-color: yellow;  /* This will apply a yellow background to elements with the "highlight" class */
}
```

**Explanation:**
- In the HTML file, some elements have the class `highlight`.
- The CSS file uses the `.highlight` class selector to target those elements.
- Both the paragraph and div with the `highlight` class will have a yellow background.

---

### **3. ID Selector**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Selector Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-heading">Welcome to My Web Page</h1>
    <p>This is a regular paragraph.</p>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
#main-heading {
    color: red;  /* This will style the element with the ID "main-heading" with red text */
    font-size: 24px;  /* This sets the font size of the element to 24px */
}
```

**Explanation:**
- In the HTML file, the `<h1>` element has an ID of `main-heading`.
- The CSS file uses the `#main-heading` ID selector to style this specific element.
- The heading will be displayed with red text and a font size of 24px.

---

### **4. Descendant Selector**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descendant Selector Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <p>This paragraph is inside a div and will be green.</p>
    </div>
    <p>This paragraph is outside a div and will not be green.</p>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
div p {
    color: green;  /* This will style all <p> elements inside a <div> with green text */
}
```

**Explanation:**
- In the HTML file, one paragraph is inside a `<div>`, and another is outside.
- The CSS file uses the `div p` descendant selector to target `<p>` elements inside a `<div>`.
- Only the paragraph within the div will have green text.

---

### **5. Grouping Selector**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grouping Selector Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This is a heading 1</h1>
    <h2>This is a heading 2</h2>
    <p>This is a paragraph.</p>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
h1, h2, p {
    font-family: Arial, sans-serif;  /* This will apply the Arial font to all <h1>, <h2>, and <p> elements */
}
```

**Explanation:**
- In the HTML file, there are `<h1>`, `<h2>`, and `<p>` elements.
- The CSS file uses the `h1, h2, p` grouping selector to style all these elements with the Arial font.

---

These examples should help clarify the purpose and usage of various CSS selectors when using separate HTML and CSS files. Would you like to explore more selectors, or is there a specific one you want to practice further?