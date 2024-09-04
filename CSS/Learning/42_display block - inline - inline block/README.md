### Lesson: `display: block`, `display: inline`, and `display: inline-block`

The `display` property in CSS determines how an element is displayed in the layout. It plays a crucial role in defining the flow of elements and how they occupy space on a page.

#### **1. `display: block`**
- Block-level elements take up the full width available (by default).
- They always start on a new line, meaning they cause a line break before and after the element.
- You can set width, height, margin, and padding for block-level elements.

**Common block-level elements:**
- `<div>`, `<h1> - <h6>`, `<p>`, `<section>`, `<header>`, `<footer>`, etc.

#### **2. `display: inline`**
- Inline elements only take up as much width as their content needs.
- They do not cause a line break, meaning they appear on the same line as other inline elements.
- You cannot set width and height directly for inline elements. However, you can still set padding and margins, but only the horizontal (left and right) padding and margin are respected.

**Common inline elements:**
- `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, etc.

#### **3. `display: inline-block`**
- Inline-block elements combine characteristics of both inline and block elements.
- They flow with inline elements, allowing elements to sit next to each other on the same line.
- Unlike inline elements, you can set width, height, margin, and padding for inline-block elements.

---

### **Example 1: Block-Level Elements**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display: Block</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="block">Block Element 1</div>
    <div class="block">Block Element 2</div>
</body>
</html>
```

#### **CSS:**
```css
.block {
    background-color: lightblue;
    margin: 10px 0;
    padding: 10px;
    width: 50%;
}
```

##### **Explanation:**
- **`display: block;`**: Each `.block` element takes up 50% of the width and starts on a new line. The elements are stacked vertically due to the block display.

---

### **Example 2: Inline Elements**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display: Inline</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <span class="inline">Inline Element 1</span>
    <span class="inline">Inline Element 2</span>
</body>
</html>
```

#### **CSS:**
```css
.inline {
    background-color: lightgreen;
    padding: 5px;
    margin: 5px;
}
```

##### **Explanation:**
- **`display: inline;`**: The inline elements appear on the same line, side by side. Even though padding and margin are applied, the elements do not cause a line break.

---

### **Example 3: Inline-Block Elements**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display: Inline-Block</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="inline-block">Inline-Block Element 1</div>
    <div class="inline-block">Inline-Block Element 2</div>
</body>
</html>
```

#### **CSS:**
```css
.inline-block {
    display: inline-block;
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    width: 150px;
    height: 100px;
}
```

##### **Explanation:**
- **`display: inline-block;`**: The `.inline-block` elements sit next to each other on the same line, while also respecting the width, height, margin, and padding properties. This makes them behave similarly to block elements in terms of layout, but without causing line breaks.

---

### **Comparing Block, Inline, and Inline-Block**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Comparison</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="block">Block Element</div>
    <span class="inline">Inline Element</span>
    <div class="inline-block">Inline-Block Element</div>
</body>
</html>
```

#### **CSS:**
```css
.block {
    display: block;
    background-color: lightblue;
    margin: 10px 0;
    padding: 10px;
    width: 50%;
}

.inline {
    display: inline;
    background-color: lightgreen;
    margin: 10px;
    padding: 5px;
}

.inline-block {
    display: inline-block;
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    width: 150px;
    height: 100px;
}
```

##### **Explanation:**
- The `.block` element takes up 50% of the width and starts on a new line.
- The `.inline` element appears on the same line with other inline or inline-block elements.
- The `.inline-block` element respects the width and height but still flows inline with other elements.

---

### **Use Cases**
- **Block**: Used for layout containers like `<div>`, sections of content, headers, and footers.
- **Inline**: Suitable for text content like links, emphasized text, or icons within a line of text.
- **Inline-Block**: Perfect for creating layouts where you need elements to line up horizontally but also respect dimensions, such as navigation links or card layouts.