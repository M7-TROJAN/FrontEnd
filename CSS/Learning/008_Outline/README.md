### **Outline**

The `outline` property in CSS is used to draw a line around the outside of an element. Unlike borders, outlines do not take up space (they don't affect the element's size or position), and they can be used to highlight elements without changing the layout.

### **Key Differences Between Border and Outline:**
- **Position**: Borders are drawn inside the element's box, while outlines are drawn outside of it.
- **Impact on Layout**: Borders affect the size and position of elements (they take up space), but outlines do not.
- **Outline Offset**: You can control the distance between an outline and the element using the `outline-offset` property, which is not possible with borders.

### **Basic Outline Example**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Outline Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outline-example">This div has an outline.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.outline-example {
    width: 300px;
    padding: 20px;
    outline: 3px solid red; /* 3px wide, solid style, red color */
    background-color: lightgray;
    text-align: center;
}
```

#### **Explanation:**
- **`outline: 3px solid red;`**: This sets a 3px solid red outline around the `div`. Unlike a border, the outline does not affect the element's size or position.

---

### **Example 2: Outline Offset**

The `outline-offset` property controls the space between the outline and the element's edge.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Outline Offset Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outline-offset-example">This div has an offset outline.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.outline-offset-example {
    width: 300px;
    padding: 20px;
    outline: 2px solid blue;    /* 2px wide, solid style, blue color */
    outline-offset: 10px;       /* 10px space between the outline and the element */
    background-color: lightblue;
    text-align: center;
}
```

#### **Explanation:**
- **`outline: 2px solid blue;`**: This sets a 2px solid blue outline around the `div`.
- **`outline-offset: 10px;`**: This adds a 10px space between the outline and the edge of the element, creating a visual separation.

---

### **Example 3: Outlines with Different Styles**

Just like borders, outlines can have different styles (solid, dashed, dotted, etc.).

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Outline Styles Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outline-dashed">Dashed Outline</div>
    <div class="outline-dotted">Dotted Outline</div>
    <div class="outline-double">Double Outline</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.outline-dashed {
    width: 300px;
    padding: 20px;
    outline: 2px dashed green; /* Dashed outline */
    margin-bottom: 10px;
    background-color: lightgreen;
    text-align: center;
}

.outline-dotted {
    width: 300px;
    padding: 20px;
    outline: 2px dotted orange; /* Dotted outline */
    margin-bottom: 10px;
    background-color: lightyellow;
    text-align: center;
}

.outline-double {
    width: 300px;
    padding: 20px;
    outline: 4px double purple; /* Double outline */
    background-color: lavender;
    text-align: center;
}
```

#### **Explanation:**
- **`outline: 2px dashed green;`**: Creates a dashed green outline.
- **`outline: 2px dotted orange;`**: Creates a dotted orange outline.
- **`outline: 4px double purple;`**: Creates a double purple outline, where the outline appears as two parallel lines.

---

### **Example 4: Removing the Outline**

Outlines can be removed by setting their style to `none`.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>No Outline Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="no-outline">This div has no outline.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.no-outline {
    width: 300px;
    padding: 20px;
    outline: none; /* Removes the outline */
    background-color: lightcoral;
    text-align: center;
}
```

#### **Explanation:**
- **`outline: none;`**: This completely removes any outline that might have been applied to the element.

---

### **Summary**

- **`outline`**: Defines a line around the outside of an element. It doesn’t take up space and doesn’t affect the element’s size or layout.
- **`outline-offset`**: Controls the distance between the outline and the edge of the element.
- **Outline Styles**: Just like borders, outlines can have different styles such as solid, dashed, dotted, double, etc.
- **No Outline**: You can remove an outline by setting its style to `none`.