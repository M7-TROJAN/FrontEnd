### **Lesson: Font Weight**

The `font-weight` property in CSS is used to control the thickness or boldness of text. It allows you to emphasize or de-emphasize text by changing how heavy the characters appear. This property is essential for creating visual hierarchy and readability in web design.

---

### **1. Basic Syntax of `font-weight`**

The syntax for `font-weight` is straightforward:

```css
selector {
    font-weight: value;
}
```

The `value` can be:

- **Keyword Values**:
  - **`normal`**: The default weight (usually equivalent to 400).
  - **`bold`**: Makes the text bold (usually equivalent to 700).
  - **`lighter`**: A lighter version of the parent element's font weight.
  - **`bolder`**: A bolder version of the parent element's font weight.

- **Numeric Values**:
  - **`100` to `900`**: These represent different levels of font weight. Typically:
    - **`100`**: Thin.
    - **`200`**: Extra Light.
    - **`300`**: Light.
    - **`400`**: Normal (Regular).
    - **`500`**: Medium.
    - **`600`**: Semi-Bold.
    - **`700`**: Bold.
    - **`800`**: Extra Bold.
    - **`900`**: Black (Heavy).

---

### **2. Example: Using `font-weight`**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Weight Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="normal-weight">This is normal weight text.</h1>
    <p class="bold-weight">This is bold weight text.</p>
    <p class="light-weight">This is light weight text.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.normal-weight {
    font-weight: normal;  /* Default weight (normal) */
}

.bold-weight {
    font-weight: bold;    /* Makes the text bold */
}

.light-weight {
    font-weight: 300;     /* Makes the text lighter */
}
```

#### **Explanation:**
- **`font-weight: normal;`**: This is the default weight for text, usually around 400.
- **`font-weight: bold;`**: This makes the text bold, which is typically equivalent to a weight of 700.
- **`font-weight: 300;`**: This applies a lighter weight to the text, making it appear less bold.

---

### **3. Numeric Font Weights**

In addition to using keywords like `normal` and `bold`, you can specify numeric values to precisely control the weight of the text. This allows for finer control, especially with fonts that support multiple weight variations.

#### **Example: Using Numeric Weights**

```css
.light-text {
    font-weight: 200;  /* Extra Light weight */
}

.medium-text {
    font-weight: 500;  /* Medium weight */
}

.extra-bold-text {
    font-weight: 800;  /* Extra Bold weight */
}
```

#### **Explanation:**
- **`font-weight: 200;`**: This sets the text to an extra light weight, making it appear very thin.
- **`font-weight: 500;`**: This is a medium weight, which is slightly heavier than normal.
- **`font-weight: 800;`**: This is an extra bold weight, making the text appear very thick and heavy.

---

### **4. Combining `font-weight` with Other Font Properties**

The `font-weight` property is often combined with other font properties like `font-style` and `font-variant` to create more visually appealing and readable text.

#### **Example: Combining Properties**

```css
.bold-italic {
    font-weight: bold;    /* Bold text */
    font-style: italic;   /* Italicized text */
}
```

This creates text that is both bold and italic, often used for emphasizing specific words or headings.

---

### **5. Font Weight in Shorthand Property**

You can include the `font-weight` property in the `font` shorthand declaration along with other font-related properties.

#### **Example: Using Shorthand for Font Weight**

```css
h1 {
    font: bold 1.5rem/2rem "Arial", sans-serif;
}
```

This sets the text to bold with a specific font size, line height, and font family.

---

### **6. Browser Support**

The `font-weight` property is fully supported across all modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge
- Internet Explorer

There should be no issues with cross-browser compatibility when using this property.

---

### **7. Use Cases for `font-weight`**

- **Headings and Titles**: You often use `font-weight: bold;` to make headings and titles stand out.
- **Highlighting Important Information**: Bold text can be used to emphasize important points in your content.
- **Light Text for Subtlety**: You might use lighter text for less important information or to create a more modern and minimalist look.

---

### **Summary**

- **`font-weight`**: Controls the thickness or boldness of text.
  - **Keyword Values**: `normal`, `bold`, `lighter`, `bolder`.
  - **Numeric Values**: Ranging from `100` (thin) to `900` (black/heavy).
- **Use Cases**: Bold text is often used for headings, important information, and emphasis. Lighter text can create a subtle or minimalist appearance.
- **Combining Properties**: Works well with `font-style` and `font-variant` to create more refined typography.

Would you like to explore specific use cases for font weight, or move on to the next lesson?