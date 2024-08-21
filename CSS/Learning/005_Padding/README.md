What is `padding` and then We will discuss what shorthand is in CSS.

## **Lesson: Padding**

The `padding` property in CSS is used to create space around an element's content, inside of any defined borders. It effectively controls the amount of space between the content of an element and its border.

### **Padding Directions**

You can specify padding for all sides of an element (top, right, bottom, and left) or for specific sides individually.

### **Example 1: Padding on All Sides**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padding Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="padding-all">This div has equal padding on all sides.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.padding-all {
    padding: 20px; /* Adds 20px padding to the top, right, bottom, and left */
    background-color: lightblue;
    border: 2px solid blue;
}
```

#### **Explanation:**
- **`padding: 20px;`** sets the padding to 20px on all four sides of the `div` element. This creates equal space between the content and the border on all sides.

---

### **Example 2: Padding with Different Values for Each Side**

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padding with Different Values</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="padding-sides">This div has different padding on each side.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.padding-sides {
    padding-top: 10px;    /* Adds 10px padding to the top */
    padding-right: 20px;  /* Adds 20px padding to the right */
    padding-bottom: 30px; /* Adds 30px padding to the bottom */
    padding-left: 40px;   /* Adds 40px padding to the left */
    background-color: lightgreen;
    border: 2px solid green;
}
```

#### **Explanation:**
- **`padding-top: 10px;`** sets the top padding to 10px.
- **`padding-right: 20px;`** sets the right padding to 20px.
- **`padding-bottom: 30px;`** sets the bottom padding to 30px.
- **`padding-left: 40px;`** sets the left padding to 40px.
- Each side can have different padding values, allowing for asymmetric layouts.

---

### **Example 3: Shorthand Padding**

Shorthand notation allows you to set padding for all four sides in a single line of code.

#### **HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padding Shorthand</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="padding-shorthand">This div uses shorthand for padding.</div>
</body>
</html>
```

#### **CSS File (`style.css`):**

```css
.padding-shorthand {
    padding: 10px 20px 30px 40px; /* Top Right Bottom Left */
    background-color: lightcoral;
    border: 2px solid red;
}
```

#### **Explanation:**
- **`padding: 10px 20px 30px 40px;`** sets the padding for each side in the following order: top, right, bottom, left. 
    - **`10px`**: top padding
    - **`20px`**: right padding
    - **`30px`**: bottom padding
    - **`40px`**: left padding

This shorthand method is more concise and easier to read when setting different padding values for each side.

---

## **Understanding Shorthand in CSS**

Shorthand in CSS is a way to condense multiple CSS properties into a single line of code. It helps reduce the amount of code you write, making your stylesheets cleaner and easier to manage.

### **Example: Background Shorthand**

```css
background: #FF0000 url("./programming-background-collage.jpg") no-repeat 50% 50% / 100px 100px;
```

This shorthand combines several background properties:
- **`#FF0000`**: background color
- **`url("./programming-background-collage.jpg")`**: background image
- **`no-repeat`**: background repeat behavior
- **`50% 50%`**: background position (centered in this case)
- **`/ 100px 100px`**: background size (width and height of 100px each)

### **Example: Padding Shorthand**

```css
padding: 20px;
```

This shorthand is equivalent to:
```css
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

### **Why Use Shorthand?**
- **Efficiency**: Shorthand reduces the number of lines of code you need to write.
- **Readability**: It makes your CSS more readable and organized, especially for common styles like margin, padding, and background.
- **Maintainability**: It's easier to update styles when they are defined in a shorthand format.

---