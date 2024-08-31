### **Lesson: CSS Overflow Property**

The **`overflow`** property in CSS controls how content is handled when it overflows the boundaries of its container. This property is essential when dealing with elements with fixed dimensions or limited space.

---

### **1. The `overflow` Property**

The `overflow` property can take several values:

- **`visible`**: The content is not clipped and will overflow the container (this is the default value).
- **`hidden`**: The content is clipped, and the overflow is not visible.
- **`scroll`**: The content is clipped, and scrollbars are added to view the rest of the content.
- **`auto`**: The content is clipped, and scrollbars appear only when necessary.

---

### **2. Example 1: Overflow Visible (Default)**

When overflow is set to `visible`, content that exceeds the container's dimensions will still be visible.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="overflow-visible">This content is overflowing the container.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.overflow-visible {
    width: 200px;
    height: 100px;
    background-color: lightcoral;
    overflow: visible;  /* Content overflows, and remains visible */
}
```

#### **Explanation:**
- **`overflow: visible;`**: Allows the content to overflow the boundaries of the container without clipping it.

---

### **3. Example 2: Overflow Hidden**

Setting overflow to `hidden` ensures that content that exceeds the container's dimensions is clipped and not visible.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Hidden Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="overflow-hidden">This content is overflowing the container but will be clipped.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.overflow-hidden {
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    overflow: hidden;  /* Content overflows, but is clipped */
}
```

#### **Explanation:**
- **`overflow: hidden;`**: Clips the content that exceeds the container's dimensions, hiding the overflowed portion.

---

### **4. Example 3: Overflow Scroll**

When overflow is set to `scroll`, scrollbars are added to the container, allowing users to scroll and see the hidden content.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Scroll Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="overflow-scroll">This content is overflowing the container, and scrollbars will be added.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.overflow-scroll {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    overflow: scroll;  /* Adds scrollbars to view overflowed content */
}
```

#### **Explanation:**
- **`overflow: scroll;`**: Clips the content but adds scrollbars, allowing the user to scroll through the hidden content.

---

### **5. Example 4: Overflow Auto**

With `auto`, scrollbars are only added when necessary (i.e., when content overflows the container). If no overflow occurs, no scrollbars are added.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Auto Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="overflow-auto">This content is overflowing the container. Scrollbars will be added only if needed.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.overflow-auto {
    width: 200px;
    height: 100px;
    background-color: lightyellow;
    overflow: auto;  /* Adds scrollbars only if content overflows */
}
```

#### **Explanation:**
- **`overflow: auto;`**: Similar to `scroll`, but scrollbars are added only when necessary.

---

### **6. Example 5: Overflow X and Overflow Y**

You can control horizontal (`overflow-x`) and vertical (`overflow-y`) overflow separately.

##### **CSS Example:**

```css
.overflow-x-y {
    width: 200px;
    height: 100px;
    background-color: lightpink;
    overflow-x: scroll;  /* Adds horizontal scrollbar */
    overflow-y: hidden;  /* Hides vertical overflow */
}
```

#### **Explanation:**
- **`overflow-x: scroll;`**: Adds a horizontal scrollbar if content overflows horizontally.
- **`overflow-y: hidden;`**: Hides any vertical overflow, clipping the content.

---

### **Summary**

- **`overflow: visible;`**: The content is not clipped and can overflow the container.
- **`overflow: hidden;`**: The content is clipped, and overflow is hidden.
- **`overflow: scroll;`**: Scrollbars are added to allow users to view overflowed content.
- **`overflow: auto;`**: Scrollbars are added only when necessary.
- **`overflow-x` and `overflow-y`**: Control horizontal and vertical overflow separately.