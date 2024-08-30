### **Lesson: Font Variant**

The `font-variant` property in CSS is used to control the presentation of text, particularly when you want to enable specific stylistic features of fonts. The most common use case is enabling small caps, but it also offers options for dealing with numbers, ligatures, and more advanced typography.

---

### **1. Basic Syntax of `font-variant`**

The syntax for `font-variant` is as follows:

```css
selector {
    font-variant: value;
}
```

The `value` can be:

- **`normal`**: The default value where no special typography is applied.
- **`small-caps`**: Transforms lowercase text into uppercase letters, but with a smaller size. This is commonly used in headings or special cases.

There are also advanced properties like `font-variant-ligatures`, `font-variant-numeric`, and others that allow for more detailed typography control, but we'll focus on the basics here.

---

### **2. Example: Using `font-variant` for Small Caps**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Variant Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="normal-text">This is normal text.</h1>
    <p class="small-caps-text">This is text in small caps.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.normal-text {
    font-variant: normal;  /* Default text style */
}

.small-caps-text {
    font-variant: small-caps;  /* Transforms lowercase letters to smaller uppercase letters */
}
```

#### **Explanation:**
- **`font-variant: normal;`**: This is the default setting, with no changes to the text.
- **`font-variant: small-caps;`**: Converts lowercase letters to uppercase, but in a smaller size. Small caps are often used in titles, headers, and certain formal documents to create a refined and elegant look.

---

### **3. Advanced Usage: Numeric and Ligatures Variants**

In addition to small caps, `font-variant` can be used to control the appearance of numbers, ligatures (special character combinations), and other typographic features.

#### **Example: Using Numeric and Ligature Variants**

```css
.numeric-oldstyle {
    font-variant-numeric: oldstyle-nums;  /* Old style numbers with varying heights */
}

.ligatures-styling {
    font-variant-ligatures: common-ligatures;  /* Enables common ligatures like 'ff', 'fi', etc. */
}
```

#### **Explanation:**
- **`font-variant-numeric: oldstyle-nums;`**: Changes the appearance of numbers to have varying heights, similar to traditional typesetting.
- **`font-variant-ligatures: common-ligatures;`**: Enables common ligatures in fonts, such as combining characters like "fi" into a single glyph for improved readability.

---

### **4. Combining `font-variant` with Other Font Properties**

You can combine `font-variant` with other font properties like `font-style`, `font-weight`, and `font-size` to achieve a more polished and sophisticated look.

#### **Example: Combining Font Properties**

```css
.special-text {
    font-style: italic;            /* Italicized text */
    font-weight: bold;             /* Bold text */
    font-variant: small-caps;      /* Small caps style */
    font-size: 1.5rem;             /* Larger font size */
}
```

This combination creates a stylized text with bold, italic, and small caps applied.

---

### **5. Shorthand Property for Fonts**

The `font` shorthand property allows you to include `font-variant` along with other font-related properties.

#### **Example: Using Shorthand for Font Variant**

```css
h1 {
    font: small-caps bold 1.5rem/1.8rem "Georgia", serif;
}
```

This sets the text to small caps, bold, with a specific font size and line height, using the Georgia font with a serif fallback.

---

### **6. Browser Support**

The `font-variant` property has broad support across modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge

Some of the advanced features like `font-variant-numeric` or `font-variant-ligatures` may have partial support depending on the browser and font being used, so always test in the relevant environments.

---

### **Summary**

- **`font-variant`**: A CSS property that controls the stylistic features of fonts.
  - **Common Values**:
    - **`normal`**: Default text style.
    - **`small-caps`**: Converts lowercase letters to uppercase but in a smaller size.
  - **Advanced Values**: Control numbers (`font-variant-numeric`) and ligatures (`font-variant-ligatures`).
- **Use Cases**: Often used for special formatting in headings, titles, or formal documents.
- **Combining Properties**: Can be used with other font properties like `font-style` and `font-weight` for more refined typography.