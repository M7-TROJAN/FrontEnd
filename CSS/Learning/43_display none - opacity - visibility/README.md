### Lesson: `display: none`, `opacity`, and `visibility`

These CSS properties control whether an element is visible or not on the webpage, and they do so in different ways. Each property has its own unique behavior and use case.

---

### **1. `display: none`**

- **Description**: When you set an element's `display` property to `none`, the element is completely removed from the document layout. It takes up no space at all on the page. It’s as if the element does not exist in the DOM.
- **Use Case**: Useful for conditionally showing or hiding elements, like in toggling menus or modals.

---

### **2. `visibility: hidden`**

- **Description**: When an element has `visibility: hidden`, it remains in the document layout but is invisible. It still occupies the space it normally would, but it cannot be seen.
- **Use Case**: Useful when you want to hide an element but preserve its layout, like in animations or loading indicators.

---

### **3. `opacity`**

- **Description**: The `opacity` property controls the transparency of an element. A value of `1` means fully visible, and `0` means fully transparent (invisible). Unlike `display: none` or `visibility: hidden`, an element with `opacity: 0` still interacts with the document layout and user interactions (e.g., clicking).
- **Use Case**: Often used in animation, hover effects, or fade-in/out transitions.

---

### **Example 1: `display: none`**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display: None</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">This box is visible</div>
    <div class="hidden-box">This box is hidden</div>
</body>
</html>
```

#### **CSS:**
```css
.box {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
}

.hidden-box {
    display: none;
    background-color: lightcoral;
    padding: 20px;
}
```

##### **Explanation:**
- The `.hidden-box` is not rendered at all. It’s completely removed from the layout, so the visible box does not leave any space for it.

---

### **Example 2: `visibility: hidden`**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visibility: Hidden</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">This box is visible</div>
    <div class="hidden-box">This box is hidden but still takes up space</div>
</body>
</html>
```

#### **CSS:**
```css
.box {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
}

.hidden-box {
    visibility: hidden;
    background-color: lightcoral;
    padding: 20px;
}
```

##### **Explanation:**
- The `.hidden-box` is invisible but still occupies space. You can see that there is an empty space where the element is supposed to be.

---

### **Example 3: `opacity`**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opacity</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">This box is fully visible</div>
    <div class="transparent-box">This box is semi-transparent</div>
</body>
</html>
```

#### **CSS:**
```css
.box {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
}

.transparent-box {
    opacity: 0.5;
    background-color: lightcoral;
    padding: 20px;
}
```

##### **Explanation:**
- The `.transparent-box` has `opacity: 0.5`, making it semi-transparent. Unlike `display: none` or `visibility: hidden`, this element is still visible but with reduced opacity.

---

### **Comparing `display: none`, `visibility: hidden`, and `opacity`**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">Visible Box</div>
    <div class="none-box">Display None Box</div>
    <div class="hidden-box">Visibility Hidden Box</div>
    <div class="opacity-box">Opacity Box</div>
</body>
</html>
```

#### **CSS:**
```css
.box {
    background-color: lightblue;
    padding: 20px;
    margin-bottom: 10px;
}

.none-box {
    display: none;
    background-color: lightcoral;
    padding: 20px;
    margin-bottom: 10px;
}

.hidden-box {
    visibility: hidden;
    background-color: lightgreen;
    padding: 20px;
    margin-bottom: 10px;
}

.opacity-box {
    opacity: 0.5;
    background-color: lightpink;
    padding: 20px;
}
```

##### **Explanation:**
- **`.none-box`**: Completely removed from the layout.
- **`.hidden-box`**: Invisible but still occupies space.
- **`.opacity-box`**: Visible but semi-transparent.

---

### **Use Cases**
- **`display: none`**: Ideal for removing elements entirely from the layout, such as hiding menu items or modals.
- **`visibility: hidden`**: Useful when you want to hide an element but maintain the space it occupies, like in animations.
- **`opacity`**: Great for fading effects or making elements semi-transparent while still allowing interactions.