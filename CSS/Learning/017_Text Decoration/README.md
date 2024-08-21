### **Lesson: Text Decoration**

The `text-decoration` property in CSS is used to add decorative elements to text, such as underlines, overlines, line-throughs (strikethrough), or a combination of these. This property is commonly applied to hyperlinks, headings, or any text that needs additional emphasis.

The main values of the `text-decoration` property are:

- **`underline`**: Adds a line below the text.
- **`overline`**: Adds a line above the text.
- **`line-through`**: Adds a line through the text (strikethrough).
- **`none`**: Removes any existing decoration (e.g., removes the default underline from links).
- **`text-decoration-color`**: Specifies the color of the text decoration.
- **`text-decoration-style`**: Specifies the style of the decoration (solid, dotted, dashed, etc.).
- **`text-decoration-thickness`**: Specifies the thickness of the text decoration.

---

### **1. Basic Text Decoration**

#### **Example 1: Adding Basic Decorations**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Decoration Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="underline">This text is underlined.</p>
    <p class="overline">This text has an overline.</p>
    <p class="line-through">This text has a line through it (strikethrough).</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.underline {
    text-decoration: underline;  /* Adds an underline */
}

.overline {
    text-decoration: overline;  /* Adds an overline */
}

.line-through {
    text-decoration: line-through;  /* Adds a line through the text */
}
```

#### **Explanation:**
- **`text-decoration: underline;`**: Underlines the text.
- **`text-decoration: overline;`**: Adds a line above the text.
- **`text-decoration: line-through;`**: Adds a line through the text, typically used for indicating deleted or inactive content.

---

### **2. Removing Text Decoration**

Links by default are underlined. The `text-decoration: none;` rule is often used to remove the underline from hyperlinks.

#### **Example 2: Removing Decoration from Links**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Decoration Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="#" class="no-decoration">This is a link with no underline.</a>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.no-decoration {
    text-decoration: none;  /* Removes the underline from the link */
}
```

#### **Explanation:**
- **`text-decoration: none;`**: Removes the default underline from the link, making it look like regular text.

---

### **3. Customizing Text Decoration with Color and Style**

You can customize the color and style of the text decoration using `text-decoration-color` and `text-decoration-style`.

#### **Example 3: Customizing Text Decoration**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Decoration Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="custom-decoration">This text has a dotted underline with a custom color.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.custom-decoration {
    text-decoration: underline;
    text-decoration-color: red;  /* Sets the color of the underline to red */
    text-decoration-style: dotted;  /* Sets the underline style to dotted */
}
```

#### **Explanation:**
- **`text-decoration-color: red;`**: Changes the color of the underline to red.
- **`text-decoration-style: dotted;`**: Changes the style of the underline to a dotted line, rather than the default solid line.

---

### **4. Adjusting the Thickness of the Text Decoration**

You can also adjust the thickness of the text decoration using the `text-decoration-thickness` property.

#### **Example 4: Adjusting Text Decoration Thickness**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Decoration Thickness Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="thick-underline">This text has a thick underline.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.thick-underline {
    text-decoration: underline;
    text-decoration-thickness: 3px;  /* Sets the thickness of the underline */
}
```

#### **Explanation:**
- **`text-decoration-thickness: 3px;`**: Increases the thickness of the underline to 3 pixels, making it more prominent.

---

### **5. Combining Text Decoration Properties**

You can combine `text-decoration`, `text-decoration-color`, `text-decoration-style`, and `text-decoration-thickness` in a single shorthand property for a more compact and efficient code.

#### **Example 5: Combining Text Decoration Properties**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Text Decoration Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="combined-decoration">This text has a combined text decoration.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.combined-decoration {
    text-decoration: underline dotted red;
    text-decoration-thickness: 2px;  /* Combines underline, dotted style, and red color */
}
```

#### **Explanation:**
- **`text-decoration: underline dotted red;`**: This shorthand property combines the underline, dotted style, and red color in one line of code.
- **`text-decoration-thickness: 2px;`**: Adjusts the thickness of the decoration.

---

### **Summary**

- **`text-decoration`**: Adds a decorative line (underline, overline, line-through) to text.
  - **`underline`**: Adds an underline to text.
  - **`overline`**: Adds a line above the text.
  - **`line-through`**: Adds a line through the text.
  - **`none`**: Removes decoration, often used to remove underlines from links.
- **Customization**:
  - **`text-decoration-color`**: Specifies the color of the decoration.
  - **`text-decoration-style`**: Specifies the style of the decoration (solid, dotted, dashed, etc.).
  - **`text-decoration-thickness`**: Specifies the thickness of the decoration.

These properties are useful for adding emphasis, styling links, and making text stand out in a visually appealing way. 