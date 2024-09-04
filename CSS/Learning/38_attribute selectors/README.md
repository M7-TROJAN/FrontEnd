### Lesson: CSS Attribute Selectors

CSS attribute selectors allow you to style HTML elements based on the presence or value of their attributes. This provides a powerful way to target elements dynamically based on their attributes, without the need for adding specific classes or IDs.

There are several types of attribute selectors:

1. **[attribute]**: Selects elements with a specific attribute.
2. **[attribute="value"]**: Selects elements with an attribute that matches a specific value.
3. **[attribute~="value"]**: Selects elements with an attribute value containing a specific word in a space-separated list.
4. **[attribute^="value"]**: Selects elements with an attribute value that starts with a specific value.
5. **[attribute$="value"]**: Selects elements with an attribute value that ends with a specific value.
6. **[attribute*="value"]**: Selects elements with an attribute value that contains a specific substring.

Let's break down these selectors with examples.

---

### **1. [attribute]**

This selector targets elements that have a specific attribute, regardless of the attribute's value.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Selectors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <input type="text" placeholder="Enter your name">
    <input type="email" placeholder="Enter your email">
    <input type="submit" value="Submit">
</body>
</html>
```

```css
input[placeholder] {
    border: 2px solid blue;
}
```

##### **Explanation:**
- **`input[placeholder]`**: This selector styles all `<input>` elements that have a `placeholder` attribute, regardless of its value.
- In this case, both the text input and the email input will have a blue border.

---

### **2. [attribute="value"]**

This selector targets elements with a specific attribute value.

#### **Example:**

```css
input[type="email"] {
    background-color: lightyellow;
}
```

##### **Explanation:**
- **`input[type="email"]`**: This selector targets `<input>` elements where the `type` attribute is exactly `"email"`.
- The email input field will have a light yellow background.

---

### **3. [attribute~="value"]**

This selector targets elements where the attribute's value is a space-separated list of words, and one of the words matches the specified value.

#### **Example:**

```html
<p class="tagline intro-text">Welcome to the site!</p>
<p class="tagline">Enjoy your stay.</p>
```

```css
p[class~="intro-text"] {
    font-weight: bold;
    color: green;
}
```

##### **Explanation:**
- **`p[class~="intro-text"]`**: This selector targets `<p>` elements where the `class` attribute contains the word `"intro-text"` in a space-separated list.
- The first paragraph will be styled with bold text and green color, while the second will not be affected.

---

### **4. [attribute^="value"]**

This selector targets elements where the attribute value starts with a specific string.

#### **Example:**

```css
a[href^="https"] {
    color: green;
}
```

##### **Explanation:**
- **`a[href^="https"]`**: This selector targets all `<a>` (anchor) elements where the `href` attribute value starts with `"https"`.
- Links that use the secure HTTPS protocol will have green text.

---

### **5. [attribute$="value"]**

This selector targets elements where the attribute value ends with a specific string.

#### **Example:**

```css
a[href$=".pdf"] {
    color: red;
}
```

##### **Explanation:**
- **`a[href$=".pdf"]`**: This selector targets all `<a>` elements where the `href` attribute ends with `".pdf"`.
- Links pointing to PDF files will have red text.

---

### **6. [attribute*="value"]**

This selector targets elements where the attribute value contains a specific substring.

#### **Example:**

```css
img[src*="logo"] {
    border: 2px solid purple;
}
```

##### **Explanation:**
- **`img[src*="logo"]`**: This selector targets all `<img>` elements where the `src` attribute contains the substring `"logo"`.
- Any image file with `"logo"` in its filename will have a purple border.

---

### **Use Cases**
- **Form Styling**: You can target form inputs based on their type, placeholder, name, or other attributes.
- **Link Styling**: Style links differently based on their protocols or file types (e.g., PDF, email links).
- **Image Styling**: Apply specific styles to images based on their source path or filename.

### **Summary**
Attribute selectors are a powerful way to style elements dynamically based on the attributes they have and their values. They allow for more flexible and precise styling without needing to add extra classes or IDs.