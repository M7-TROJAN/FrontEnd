### Lesson: CSS Sibling Selectors

Sibling selectors in CSS allow you to select elements based on their relationship to other elements. These selectors are very useful for styling elements that are adjacent to or follow other elements in the DOM structure.

There are two types of sibling selectors:

1. **Adjacent Sibling Selector (`+`)**
2. **General Sibling Selector (`~`)**

Let's break down these selectors with examples.

---

### **1. Adjacent Sibling Selector (`+`)**

The adjacent sibling selector (`+`) selects an element that is **immediately** preceded by a specified element. In other words, it selects the next sibling of the target element.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adjacent Sibling Selector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Heading</h2>
    <p>This is a paragraph that comes right after the heading.</p>
    <p>This paragraph is not affected.</p>
</body>
</html>
```

```css
h2 + p {
    color: red;
    font-weight: bold;
}
```

##### **Explanation:**
- The selector `h2 + p` selects the `<p>` element that **immediately follows** the `<h2>` element.
- The first `<p>` after the heading is styled with red text and bold font.
- The second `<p>` is not affected because it does not immediately follow the `<h2>` element.

---

### **2. General Sibling Selector (`~`)**

The general sibling selector (`~`) selects **all** elements that are siblings of a specified element, meaning it will select all matching elements that appear after the specified element, not just the immediate sibling.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Sibling Selector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Heading</h2>
    <p>This is the first paragraph after the heading.</p>
    <p>This is the second paragraph after the heading.</p>
    <div>This div is not a paragraph and won't be styled.</div>
    <p>This is the third paragraph after the heading.</p>
</body>
</html>
```

```css
h2 ~ p {
    color: blue;
}
```

##### **Explanation:**
- The selector `h2 ~ p` selects **all `<p>` elements** that are siblings of the `<h2>` element, regardless of how many siblings are in between.
- All paragraphs following the `<h2>` element are styled with blue text.
- The `<div>` element is not affected because it is not a `<p>` tag.

---

### **Summary**
- **Adjacent Sibling Selector (`+`)**: Selects the **immediate** next sibling.
- **General Sibling Selector (`~`)**: Selects **all** siblings that follow.

Sibling selectors allow you to apply styles based on the position of elements relative to one another, making them helpful in scenarios where you need to style elements that follow specific elements in the DOM.