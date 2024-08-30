### **Lesson: Font Size**

The `font-size` property in CSS is used to control the size of the text within an element. Choosing the right font size is crucial for readability, especially when designing for different screen sizes and devices. The `font-size` property can be set using various units like pixels (px), em, rem, percentages (%), and more.

---

### **1. Basic Syntax of `font-size`**

The syntax for `font-size` is straightforward:

```css
selector {
    font-size: value;
}
```

Here, `value` can be specified in various units, such as pixels (`px`), ems (`em`), or percentages (`%`).

---

### **2. Common Units for `font-size`**

- **Pixels (`px`)**: Defines the font size in pixels. It's an absolute unit, meaning it remains fixed regardless of the user's settings or screen resolution.

- **Ems (`em`)**: A relative unit that is based on the font size of the parent element. For example, if the parent element has a font size of 16px, setting `font-size: 1.5em;` will result in a font size of 24px.

- **Root Ems (`rem`)**: Similar to `em`, but instead of being relative to the parent element, it's relative to the root element (`<html>`). This ensures consistency across different parts of the document.

- **Percentages (`%`)**: Font size is set as a percentage of the parent element's font size. For example, `font-size: 150%;` would be 1.5 times the size of the parent element's font size.

---

### **3. Example: Using `font-size` with Different Units**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="font-px">This is a heading with font-size in pixels (24px).</h1>
    <p class="font-em">This is a paragraph with font-size in em units (1.5em).</p>
    <p class="font-rem">This is a paragraph with font-size in rem units (1.5rem).</p>
    <p class="font-percent">This is a paragraph with font-size in percentage (150%).</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
html {
    font-size: 16px; /* Base font size for rem units */
}

.font-px {
    font-size: 24px; /* Absolute size in pixels */
}

.font-em {
    font-size: 1.5em; /* Relative to the parent element's font size */
}

.font-rem {
    font-size: 1.5rem; /* Relative to the root element's font size (16px) */
}

.font-percent {
    font-size: 150%; /* 150% of the parent element's font size */
}
```

#### **Explanation:**
- **`font-size: 24px;`**: Sets the font size to 24 pixels, a fixed size regardless of screen or parent size.
- **`font-size: 1.5em;`**: Sets the font size to 1.5 times the size of the parent element's font size.
- **`font-size: 1.5rem;`**: Sets the font size to 1.5 times the root element's font size (in this case, 24px if the root font size is 16px).
- **`font-size: 150%;`**: Sets the font size to 150% of the parent element's font size.

---

### **4. Responsive Font Sizes**

Responsive design requires font sizes to adapt to different screen sizes and resolutions. To achieve this, relative units like `em`, `rem`, and percentages are often preferred over fixed units like `px`.

#### **Example: Responsive Font Size**

You can adjust font sizes for different screen sizes using media queries.

##### **CSS Example (`style.css`):**

```css
html {
    font-size: 16px;
}

body {
    font-size: 1rem;  /* Base size */
}

@media (max-width: 600px) {
    body {
        font-size: 0.9rem;  /* Slightly smaller font size for smaller screens */
    }
}

@media (min-width: 1024px) {
    body {
        font-size: 1.1rem;  /* Slightly larger font size for larger screens */
    }
}
```

#### **Explanation:**
- **Media Queries**: Adjust the font size based on the screen width. Smaller screens get smaller fonts, while larger screens get larger fonts.
- **Responsive Design**: Ensures that your text remains readable and properly sized across different devices.

---

### **5. Best Practices for Font Sizing**

- **Use Relative Units**: Prefer using `em`, `rem`, or `%` for font sizes to create a more flexible and responsive design.
- **Set a Base Font Size**: Define a base font size in your root element (`<html>`) to make your font sizes easier to manage with `rem`.
- **Adjust for Different Devices**: Use media queries to adjust font sizes for different screen sizes, ensuring readability on both small and large screens.

---

### **6. Shorthand Notation for Fonts**

The `font` shorthand property allows you to set all the font-related properties (like `font-size`, `font-family`, and others) in a single declaration.

#### **Example: Shorthand Font Declaration**

```css
h1 {
    font: italic bold 24px/30px "Arial", sans-serif;
}
```

#### **Explanation:**
- **`italic bold 24px/30px "Arial", sans-serif;`**: This sets the font style (italic), weight (bold), size (24px), line height (30px), and font family (Arial, with a sans-serif fallback).

---

### **Summary**

- **`font-size`**: Controls the size of the text. Can be set using various units like `px`, `em`, `rem`, or `%`.
  - **Pixels (`px`)**: Absolute size, fixed and doesn't change based on screen size.
  - **Ems (`em`)**: Relative to the font size of the parent element.
  - **Root Ems (`rem`)**: Relative to the font size of the root element (`<html>`).
  - **Percentages (`%`)**: Relative to the parent element's font size.
- **Responsive Font Sizes**: Use relative units and media queries to make your fonts responsive and adaptable to different screen sizes.
- **Shorthand**: The `font` shorthand property can be used to set multiple font properties at once.