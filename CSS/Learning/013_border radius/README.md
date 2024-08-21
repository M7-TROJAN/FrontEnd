### **Lesson: Border Radius**

The `border-radius` CSS property allows you to create rounded corners on elements. This property can be applied to any block-level or inline element, and it controls the radius of the element's corners. It's widely used to add a softer, more visually appealing look to elements, especially in modern web design.

---

### **1. Basic Usage of `border-radius`**

- **`border-radius`**: This property can take a single value, which applies to all four corners of the element. Alternatively, you can specify up to four values to control each corner individually.

#### **Example 1: Basic Border Radius**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border Radius Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">This is a box with rounded corners.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box {
    background-color: lightblue;
    padding: 20px;
    border: 2px solid blue;
    border-radius: 15px;  /* Creates rounded corners with a 15px radius */
}
```

#### **Explanation:**
- **`border-radius: 15px;`**: This creates rounded corners with a 15-pixel radius on all four corners of the `.box` element.

---

### **2. Advanced Usage: Controlling Each Corner Separately**

You can apply different `border-radius` values to each corner. This is useful when you want to create unique shapes or designs.

- **Single value (`border-radius: 15px;`)**: Applies to all corners.
- **Two values (`border-radius: 15px 30px;`)**: The first value applies to the top-left and bottom-right corners, and the second value applies to the top-right and bottom-left corners.
- **Four values (`border-radius: 10px 20px 30px 40px;`)**: The values apply to the top-left, top-right, bottom-right, and bottom-left corners respectively.

#### **Example 2: Custom Border Radius for Each Corner**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Border Radius Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="custom-box">This box has different border-radius values for each corner.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.custom-box {
    background-color: lightgreen;
    padding: 20px;
    border: 2px solid green;
    border-radius: 10px 20px 30px 40px;  /* Different radius for each corner */
}
```

#### **Explanation:**
- **`border-radius: 10px 20px 30px 40px;`**: The corners of the box will have different radius values:
  - **Top-left corner**: 10px
  - **Top-right corner**: 20px
  - **Bottom-right corner**: 30px
  - **Bottom-left corner**: 40px

---

### **3. Creating Circular Elements with `border-radius`**

You can create perfect circles or ellipses by using the `border-radius` property in combination with equal width and height for the element.

#### **Example 3: Circular Element**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circular Element Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="circle"></div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.circle {
    background-color: lightcoral;
    width: 100px;
    height: 100px;
    border-radius: 50%;  /* Creates a circle by setting border-radius to 50% */
    border: 2px solid red;
}
```

#### **Explanation:**
- **`border-radius: 50%;`**: When combined with equal width and height, this creates a circular shape. The element becomes a perfect circle because the `border-radius` is 50% of the element's width and height.

---

### **4. Elliptical Border Radius**

By using two values (horizontal and vertical radii), you can create elliptical shapes.

#### **Example 4: Elliptical Shape**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elliptical Border Radius Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="ellipse"></div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.ellipse {
    background-color: lightseagreen;
    width: 200px;
    height: 100px;
    border-radius: 50% / 25%;  /* Creates an elliptical shape */
    border: 2px solid teal;
}
```

#### **Explanation:**
- **`border-radius: 50% / 25%;`**: The first value (50%) applies to the horizontal radius, and the second value (25%) applies to the vertical radius, resulting in an elliptical shape.

---

### **5. Shorthand Notation for `border-radius`**

- **Shorthand Notation**: You can specify the `border-radius` in a shorthand notation by providing values for horizontal and vertical radii for each corner.

#### **Example 5: Shorthand Notation**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shorthand Border Radius Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="shorthand-box">Shorthand Border Radius</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.shorthand-box {
    background-color: lightpink;
    padding: 20px;
    border: 2px solid pink;
    border-radius: 20px 40px 60px 80px / 10px 20px 30px 40px;
}
```

#### **Explanation:**
- **`border-radius: 20px 40px 60px 80px / 10px 20px 30px 40px;`**: This applies horizontal and vertical radii for each corner, creating a unique and more complex shape.

---

### **Summary**

- **`border-radius`**: Controls the rounding of corners on an element.
  - A single value applies to all four corners.
  - Multiple values allow customization of individual corners.
  - **`50%`** creates a circular element when width and height are equal.
- You can also create elliptical shapes and complex designs using the shorthand notation.