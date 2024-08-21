### **Display - Block, Inline, and Inline-Block**

The `display` property in CSS controls how an element is displayed on the page. Three commonly used values for the `display` property are `block`, `inline`, and `inline-block`. Each of these values has distinct characteristics that affect how elements are rendered.

### **1. Block**

- **Takes Full Width**: Block elements take up the full width available by default unless a specific width is set.
- **Adds Line Break**: A block element always starts on a new line, and any content after it will also start on a new line.
- **Respects Padding, Margin, Width, and Height**: Block elements fully respect the padding, margin, width, and height properties.

#### **Examples of Block Elements:**
Common block-level elements include `<div>`, `<p>`, `<h1>`, `<section>`, etc.

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Block Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="block-example">This is a block-level element.</div>
    <div class="block-example">Another block-level element.</div>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.block-example {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid blue;
}
```

#### **Explanation:**
- **Block Elements**: Each `<div>` is a block element, so they stack vertically, each taking the full width of their container unless specified otherwise.

---

### **2. Inline**

- **Does Not Respect Width and Height**: Inline elements cannot have their width and height explicitly set.
- **Respects Padding and Margin (Right and Left Only)**: Inline elements only respect the horizontal padding and margin (left and right) but ignore the vertical padding and margin (top and bottom).
- **Does Not Add Line Break**: Inline elements do not cause line breaks before or after them, allowing content to flow inline.

#### **Examples of Inline Elements:**
Common inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, etc.

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Inline Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>This is an inline element <span class="inline-example">inside a paragraph.</span></p>
    <p>Another paragraph with <a href="#" class="inline-example">an inline link.</a></p>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.inline-example {
    background-color: lightgreen;
    padding: 5px 10px;
    border: 2px solid green;
    margin: 0 5px;
}
```

#### **Explanation:**
- **Inline Elements**: The `<span>` and `<a>` are inline elements, so they don’t break the flow of the text around them. They respect horizontal padding and margin but not vertical spacing.

---

### **3. Inline-Block**

- **Allows Elements to Be in the Same Line**: Inline-block elements, like inline elements, do not break the flow of content and allow other elements to sit beside them.
- **Respects Padding, Margin, Width, and Height**: Unlike inline elements, inline-block elements respect all the box model properties, including width, height, padding, and margin.

#### **Examples of Inline-Block Elements:**
You can apply `display: inline-block;` to elements that are typically block-level to get the benefits of both block and inline elements.

#### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Inline-Block Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="inline-block-example">First inline-block element</div>
    <div class="inline-block-example">Second inline-block element</div>
</body>
</html>
```

#### **CSS Example (`style.css`):**

```css
.inline-block-example {
    display: inline-block;
    background-color: lightcoral;
    padding: 10px;
    margin: 5px;
    width: 200px;
    border: 2px solid red;
    text-align: center;
}
```

#### **Explanation:**
- **Inline-Block Elements**: The `<div>` elements are set to `display: inline-block;`, so they sit beside each other on the same line while respecting their width, height, padding, and margin.

---

### **Summary**

- **Block**:
  - Takes up the full width if no width is set.
  - Adds a line break before and after the element.
  - Respects padding, margin, width, and height.

- **Inline**:
  - Does not respect width and height properties.
  - Respects padding and margin (only horizontal).
  - Does not add line breaks, allowing elements before and after it on the same line.

- **Inline-Block**:
  - Allows elements before and after it on the same line.
  - Respects padding, margin, width, and height.