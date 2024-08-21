
## **Border**

The `border` property in CSS is used to define the boundary around an element. Borders can have various styles, widths, and colors, and they can be applied to any side of the element—top, right, bottom, or left.

### **Basic Border Example**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="border-example">This div has a simple border.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.border-example {
    width: 300px;
    padding: 20px;
    border: 2px solid black; /* 2px wide, solid style, black color */
    background-color: lightgray;
    text-align: center;
}
```

#### **Explanation:**
- **`border: 2px solid black;`**: This sets the border width to `2px`, the border style to `solid`, and the border color to `black`.
- **`padding: 20px;`**: Adds padding inside the `div` to make the content stand out from the border.

---

### **Example 2: Different Borders for Each Side**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border Sides Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="border-sides">This div has different borders on each side.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.border-sides {
    width: 300px;
    padding: 20px;
    border-top: 5px solid red;    /* Top border */
    border-right: 4px dashed green; /* Right border */
    border-bottom: 3px dotted blue; /* Bottom border */
    border-left: 2px double yellow; /* Left border */
    background-color: lightyellow;
    text-align: center;
}
```

#### **Explanation:**
- **`border-top: 5px solid red;`**: Sets a 5px solid red border on the top side.
- **`border-right: 4px dashed green;`**: Sets a 4px dashed green border on the right side.
- **`border-bottom: 3px dotted blue;`**: Sets a 3px dotted blue border on the bottom side.
- **`border-left: 2px double yellow;`**: Sets a 2px double yellow border on the left side.
- This example demonstrates how to apply different border styles, widths, and colors to each side of an element.

---

### **Example 3: Rounded Borders**

Borders can also be rounded using the `border-radius` property.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rounded Borders Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="border-rounded">This div has rounded borders.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.border-rounded {
    width: 300px;
    padding: 20px;
    border: 2px solid purple;
    border-radius: 15px; /* Rounds the corners with a 15px radius */
    background-color: lavender;
    text-align: center;
}
```

#### **Explanation:**
- **`border-radius: 15px;`**: Rounds the corners of the border with a 15px radius, giving the `div` a softer, rounded appearance.

---

### **Example 4: Border Shorthand**

Just like padding and margin, borders also support shorthand notation.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border Shorthand Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="border-shorthand">This div uses shorthand for borders.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.border-shorthand {
    width: 300px;
    padding: 20px;
    border: 3px solid blue; /* Shorthand: width, style, color */
    background-color: lightblue;
    text-align: center;
}
```

#### **Explanation:**
- **`border: 3px solid blue;`**: This shorthand notation sets the border width, style, and color in a single line of code.

---

### **Example 5: No Border**

You can remove a border by setting its style to `none`.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>No Border Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="border-none">This div has no border.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.border-none {
    width: 300px;
    padding: 20px;
    border: none; /* Removes the border */
    background-color: lightcoral;
    text-align: center;
}
```

#### **Explanation:**
- **`border: none;`**: Removes any border that may have been previously applied to the element.

---

### **Summary**

- **`border`**: Defines the border around an element. It can be customized in terms of width, style, and color.
- **`border-radius`**: Adds rounded corners to the border.
- **Shorthand Notation**: The `border` property supports shorthand notation to specify width, style, and color in one line.
- **No Border**: You can remove borders by setting the border style to `none`.

Would you like to move on to the next topic or explore more examples of borders?