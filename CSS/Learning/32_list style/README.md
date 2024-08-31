### **Lesson: CSS `list-style` Property**

The **`list-style`** property in CSS is used to control the appearance of list items, such as bullets, numbers, or custom markers. It applies to both ordered (`<ol>`) and unordered (`<ul>`) lists, as well as any HTML element with `display: list-item`.

The `list-style` property is a shorthand for the following individual properties:

- **`list-style-type`**: Defines the type of bullet or marker for list items.
- **`list-style-position`**: Specifies whether the bullet/marker appears inside or outside the list item's content.
- **`list-style-image`**: Allows for a custom image to be used as the bullet or marker.

---

### **1. Example 1: Basic `list-style-type`**

In this example, we'll see how different values of `list-style-type` affect the bullets or numbering in lists.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Style Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Unordered List with Custom List Style Types</h1>
    <ul class="custom-list">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
    </ul>

    <h1>Ordered List with Custom List Style Types</h1>
    <ol class="custom-list-ol">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
    </ol>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.custom-list {
    list-style-type: square; /* Use square bullets instead of the default disc */
}

.custom-list-ol {
    list-style-type: upper-roman; /* Use Roman numerals */
}
```

#### **Explanation:**
- **`list-style-type: square;`**: The unordered list (`<ul>`) uses square bullets instead of the default circular ones.
- **`list-style-type: upper-roman;`**: The ordered list (`<ol>`) uses uppercase Roman numerals (I, II, III) instead of numbers (1, 2, 3).

---

### **2. Example 2: `list-style-position`**

The `list-style-position` property specifies whether the bullet or marker is placed inside or outside the list item's content box.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Style Position Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>List with Different List Style Positions</h1>
    <ul class="list-inside">
        <li>Inside Position - Item 1</li>
        <li>Inside Position - Item 2</li>
        <li>Inside Position - Item 3</li>
    </ul>

    <ul class="list-outside">
        <li>Outside Position - Item 1</li>
        <li>Outside Position - Item 2</li>
        <li>Outside Position - Item 3</li>
    </ul>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.list-inside {
    list-style-position: inside; /* Bullets are inside the content box */
}

.list-outside {
    list-style-position: outside; /* Bullets are outside the content box */
}
```

#### **Explanation:**
- **`list-style-position: inside;`**: The bullet is placed inside the content area of each list item. If the text wraps, it aligns with the bullet.
- **`list-style-position: outside;`**: The bullet is outside the content area, maintaining the default list layout where wrapped text aligns under the text, not the bullet.

---

### **3. Example 3: `list-style-image`**

You can replace the default bullets with custom images using the `list-style-image` property.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Style Image Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Unordered List with Custom Image Bullets</h1>
    <ul class="custom-image-list">
        <li>Item with custom bullet 1</li>
        <li>Item with custom bullet 2</li>
        <li>Item with custom bullet 3</li>
    </ul>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.custom-image-list {
    list-style-image: url('bullet.png'); /* Replace bullets with a custom image */
}
```

#### **Explanation:**
- **`list-style-image: url('bullet.png');`**: The list items use the `bullet.png` image as the bullet. This allows you to customize the appearance of list markers with any image you choose.

---

### **4. Example 4: `list-style` Shorthand**

You can combine all three properties—`list-style-type`, `list-style-position`, and `list-style-image`—into a single `list-style` shorthand property.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Style Shorthand Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>List Style Shorthand Example</h1>
    <ul class="shorthand-list">
        <li>Shorthand Property Item 1</li>
        <li>Shorthand Property Item 2</li>
        <li>Shorthand Property Item 3</li>
    </ul>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.shorthand-list {
    list-style: square inside url('bullet.png'); /* Shorthand: list-style-type, list-style-position, list-style-image */
}
```

#### **Explanation:**
- **`list-style: square inside url('bullet.png');`**: This shorthand combines:
  - **`list-style-type: square;`**: Square bullets.
  - **`list-style-position: inside;`**: Bullets inside the content area.
  - **`list-style-image: url('bullet.png');`**: Custom image as the bullet.

If a part of the shorthand is omitted, it defaults to the property’s initial value.

---

### **Summary**

- **`list-style-type`**: Changes the type of list marker (e.g., `disc`, `circle`, `square`, `decimal`, `lower-alpha`, `upper-roman`).
- **`list-style-position`**: Controls whether the marker is inside or outside the content box of the list item (`inside`, `outside`).
- **`list-style-image`**: Replaces the marker with a custom image.
- **`list-style`**: Shorthand to combine all three properties.