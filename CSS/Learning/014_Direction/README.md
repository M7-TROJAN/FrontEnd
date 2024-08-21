### **Lesson: Direction**

The `direction` property in CSS is used to specify the text direction of an element's content. This property is important when dealing with languages that are written from right to left (e.g., Arabic, Hebrew) as well as in creating layouts that need to adapt to different writing directions.

The `direction` property has two possible values:

- **`ltr` (left to right)**: This is the default value. It indicates that the text is to be written from left to right, as is common in most Western languages like English, Spanish, and French.
- **`rtl` (right to left)**: This value indicates that the text should be written from right to left, as in languages like Arabic and Hebrew.

This property is often used together with the `unicode-bidi` property to fully control the text direction in more complex scenarios.

---

### **1. Basic Usage of `direction`**

#### **Example 1: Left-to-Right (LTR) Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Direction LTR Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="ltr-text">
        This text is written in a left-to-right direction.
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.ltr-text {
    direction: ltr;  /* Left to right is the default text direction */
    background-color: lightyellow;
    padding: 10px;
    border: 2px solid black;
}
```

#### **Explanation:**
- **`direction: ltr;`**: Specifies that the text direction is left to right. This is the default behavior for most Western languages.

---

### **2. Right-to-Left (RTL) Text**

For languages like Arabic or Hebrew, where the text is read from right to left, you use the `rtl` value of the `direction` property.

#### **Example 2: Right-to-Left (RTL) Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Direction RTL Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="rtl-text">
        هذا النص مكتوب من اليمين إلى اليسار.
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.rtl-text {
    direction: rtl;  /* Right to left text direction for languages like Arabic */
    background-color: lightblue;
    padding: 10px;
    border: 2px solid black;
}
```

#### **Explanation:**
- **`direction: rtl;`**: Specifies that the text direction is right to left. This is common in languages like Arabic or Hebrew.

---

### **3. Mixed Directional Text**

When combining left-to-right (LTR) and right-to-left (RTL) text within the same element, the `direction` property can be used in combination with `unicode-bidi` to control how text is displayed.

- **`unicode-bidi: embed;`**: Embeds the element within the specified direction.
- **`unicode-bidi: isolate;`**: Isolates the text so it doesn’t mix with surrounding content.

#### **Example 3: Mixed Directional Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mixed Directional Text Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="mixed-text">
        This is an English sentence. <span class="rtl-span">وهذا نص عربي</span> followed by more English text.
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.mixed-text {
    direction: ltr;
    background-color: lightgray;
    padding: 10px;
    border: 2px solid black;
}

.rtl-span {
    direction: rtl;
    unicode-bidi: embed;
    background-color: lightpink;
}
```

#### **Explanation:**
- **`.rtl-span { direction: rtl; unicode-bidi: embed; }`**: The span element with Arabic text is isolated and displayed in a right-to-left direction within the surrounding left-to-right text. The `unicode-bidi: embed;` ensures that the direction is properly respected without interfering with the parent text direction.

---

### **4. Direction in Layouts**

Changing the direction property also affects layout behavior, such as the position of block elements, text alignment, and the starting point of list items. In an `rtl` context, elements will begin from the right side instead of the left.

#### **Example 4: Layout with `direction` Property**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Direction Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="layout-container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.layout-container {
    direction: rtl;  /* Right to left layout */
    background-color: lightgreen;
    padding: 20px;
}

.box {
    display: inline-block;
    background-color: darkgreen;
    color: white;
    padding: 10px;
    margin-right: 10px;
}
```

#### **Explanation:**
- **`direction: rtl;`**: The boxes will be positioned from right to left instead of the default left-to-right layout.
- **`.box` elements**: These elements are displayed inline and will align from the right when the container has an `rtl` direction.

---

### **Summary**

- **`direction`**: Specifies the text direction (LTR or RTL) of an element's content.
  - **`ltr`**: Left-to-right, the default for most Western languages.
  - **`rtl`**: Right-to-left, used for languages like Arabic and Hebrew.
- **`unicode-bidi`**: Enhances control over text direction when mixing LTR and RTL content.
- The `direction` property affects not only text flow but also layout positioning, text alignment, and the order of block elements.