### Lesson: CSS Units

CSS units are used to define lengths, sizes, and measurements in web design. These units are crucial for defining dimensions, margins, paddings, font sizes, and more. CSS supports several types of units, broadly classified into **absolute units** and **relative units**.

#### **1. Absolute Units**
Absolute units are fixed and are not affected by other elements or the viewport size. They are usually consistent across different devices and resolutions.

Common absolute units include:

- **px (pixels)**: The most common unit, representing a single dot on the screen. It remains the same regardless of screen size.
- **cm (centimeters)**: Real-world centimeters.
- **mm (millimeters)**: Real-world millimeters.
- **in (inches)**: Real-world inches (1 inch = 96 pixels).
- **pt (points)**: Traditionally used in print media (1 point = 1/72 of an inch).
- **pc (picas)**: A unit used in typography (1 pica = 12 points).

##### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Absolute Units</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Absolute Units Example</h1>
    <div class="box1">This is a 100px wide box.</div>
    <div class="box2">This is a 2cm wide box.</div>
</body>
</html>
```

```css
.box1 {
    width: 100px;
    height: 50px;
    background-color: lightblue;
}

.box2 {
    width: 2cm;
    height: 50px;
    background-color: lightgreen;
}
```

##### **Explanation:**
- **Pixels (`px`)**: Fixed, screen-based unit.
- **Centimeters (`cm`)**: Physical unit of measurement.

---

#### **2. Relative Units**
Relative units are based on the size of other elements, such as the parent element, the root element, or the viewport. They adapt to changes in layout or screen size.

Common relative units include:

- **em**: Relative to the font size of the parent element. (e.g., `2em` is twice the size of the current font size).
- **rem**: Relative to the font size of the root element (`html`). It’s a consistent and widely used unit for scalability.
- **% (percentage)**: Relative to the size of the parent element. Commonly used for width, height, padding, etc.
- **vw (viewport width)**: Relative to 1% of the viewport’s width.
- **vh (viewport height)**: Relative to 1% of the viewport’s height.
- **vmin/vmax**: Relative to the smaller or larger dimension of the viewport (either width or height).

##### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Relative Units</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Relative Units Example</h1>
    <div class="box3">This box is 50% of its container's width.</div>
    <div class="box4">This box is 10vw wide (10% of the viewport width).</div>
</body>
</html>
```

```css
.box3 {
    width: 50%;
    height: 50px;
    background-color: lightcoral;
}

.box4 {
    width: 10vw;
    height: 50px;
    background-color: lightgoldenrodyellow;
}
```

##### **Explanation:**
- **Percentage (`%`)**: The width of `.box3` is 50% of its parent element’s width.
- **Viewport Width (`vw`)**: The width of `.box4` is 10% of the viewport’s width.

---

### **Common Use Cases**

1. **Pixels (`px`)**: Often used for precise control over dimensions, such as borders or specific element sizes.
2. **Percentage (`%`)**: Useful for fluid layouts that scale with their container.
3. **em/rem**: Popular for font sizing, padding, and margins to create scalable and accessible designs.
4. **vw/vh**: Commonly used for fullscreen elements or layouts that need to adjust to different screen sizes.

---

### **3. Example: Combining Units**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combining Units</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Combining CSS Units</h1>
    <div class="container">
        <div class="box5">This box is 20em wide and 10vh tall.</div>
    </div>
</body>
</html>
```

```css
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box5 {
    width: 20em;
    height: 10vh;
    background-color: lightsteelblue;
    text-align: center;
    line-height: 10vh;
}
```

##### **Explanation:**
- **`20em`**: The width of `.box5` is 20 times the font size of its parent element.
- **`10vh`**: The height of `.box5` is 10% of the viewport height.
- **`vw/vh`**: Used in `.container` to make it full screen, with the box centered.

---

### **Summary**

- **Absolute Units** (like `px`, `cm`, `in`) are fixed and not relative to other elements or screen size.
- **Relative Units** (like `em`, `rem`, `%`, `vw`, `vh`) adapt based on the context, making them more flexible and responsive.
- Choose the right unit based on your design goals: precise control (`px`), scalable layouts (`%`, `em`), or responsive design (`vw`, `vh`).

Understanding CSS units is key to creating layouts that are both visually appealing and adaptable to different screen sizes.