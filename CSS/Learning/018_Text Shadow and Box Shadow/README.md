### **Lesson: Text Shadow and Box Shadow**

In CSS, shadows can be added to text and elements to create depth and visual interest. There are two main types of shadow properties:

1. **`text-shadow`**: Adds shadow effects to text.
2. **`box-shadow`**: Adds shadow effects to box elements, such as divs, buttons, and other block-level elements.

---

### **1. `text-shadow`**

The `text-shadow` property applies shadow effects to text. It accepts the following values:
- **Horizontal Offset**: Moves the shadow left or right.
- **Vertical Offset**: Moves the shadow up or down.
- **Blur Radius**: Makes the shadow softer by blurring it.
- **Color**: Specifies the color of the shadow.

#### **Example 1: Applying Text Shadows**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Shadow Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="text-shadow-default">This text has a basic shadow.</h1>
    <h1 class="text-shadow-blur">This text has a blurred shadow.</h1>
    <h1 class="text-shadow-colored">This text has a colored shadow.</h1>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.text-shadow-default {
    text-shadow: 2px 2px 0px black;  /* Basic shadow with no blur */
}

.text-shadow-blur {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);  /* Shadow with blur effect */
}

.text-shadow-colored {
    text-shadow: 3px 3px 5px red;  /* Shadow with red color */
}
```

#### **Explanation:**
- **`text-shadow: 2px 2px 0px black;`**: Creates a shadow 2 pixels to the right and 2 pixels down, with no blur.
- **`text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);`**: Creates a shadow with a blur radius of 10 pixels, using a semi-transparent black color.
- **`text-shadow: 3px 3px 5px red;`**: Creates a shadow with a red color and a slight blur.

---

### **2. `box-shadow`**

The `box-shadow` property adds shadows to box elements like divs, buttons, and containers. It accepts similar values as `text-shadow`:
- **Horizontal Offset**: Moves the shadow left or right.
- **Vertical Offset**: Moves the shadow up or down.
- **Blur Radius**: Blurs the shadow to make it softer.
- **Spread Radius**: Expands or contracts the shadow's size.
- **Color**: Specifies the shadow's color.
- **Inset (Optional)**: Makes the shadow appear inside the element instead of outside.

#### **Example 2: Applying Box Shadows**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Shadow Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box-shadow-default">This box has a basic shadow.</div>
    <div class="box-shadow-blur">This box has a blurred shadow.</div>
    <div class="box-shadow-inset">This box has an inset shadow.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box-shadow-default {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    box-shadow: 5px 5px 0px gray;  /* Basic shadow with no blur */
    margin-bottom: 20px;
}

.box-shadow-blur {
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);  /* Shadow with blur effect */
    margin-bottom: 20px;
}

.box-shadow-inset {
    width: 200px;
    height: 100px;
    background-color: lightcoral;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);  /* Inset shadow */
}
```

#### **Explanation:**
- **`box-shadow: 5px 5px 0px gray;`**: Creates a shadow 5 pixels to the right and 5 pixels down, with no blur, and a gray color.
- **`box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);`**: Creates a larger shadow with a blur radius of 15 pixels, using a semi-transparent black color.
- **`box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);`**: Creates an inset shadow, making the shadow appear inside the box rather than outside.

---

### **3. Combining Multiple Shadows**

You can apply multiple shadows to an element by separating them with commas. This technique is useful for creating more complex effects, like a glow or layered shadows.

#### **Example 3: Multiple Shadows**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Shadows Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box-multiple-shadows">This box has multiple shadows.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box-multiple-shadows {
    width: 200px;
    height: 100px;
    background-color: lightyellow;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 0, 0, 0.5);  /* Multiple shadows */
}
```

#### **Explanation:**
- **`box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 0, 0, 0.5);`**: Creates two shadows. The first shadow is black and offset to the bottom-right, while the second shadow is red and offset to the top-left.

---

### **Summary**

- **`text-shadow`**:
  - Adds shadow effects to text.
  - Values include horizontal and vertical offset, blur radius, and color.
- **`box-shadow`**:
  - Adds shadow effects to box elements (e.g., divs, buttons).
  - Values include horizontal and vertical offset, blur radius, spread radius, and color.
  - Can also be applied as an inset shadow.
- **Multiple Shadows**: You can apply more than one shadow by separating them with commas.