### **Lesson: Wrapping and White Space**

In CSS, controlling how text wraps and how white space is handled within elements is essential for creating flexible, responsive, and user-friendly layouts. Two key properties that manage text wrapping and white space behavior are `white-space` and `word-wrap`.

---

### **1. `white-space` Property**

The `white-space` property controls how white space inside an element is handled, and it also affects how text wraps. Here are the main values:

- **`normal`**: Default. Text wraps when necessary, and consecutive white spaces are collapsed into a single space.
- **`nowrap`**: Text does not wrap; it stays on a single line and may overflow its container.
- **`pre`**: Text preserves both spaces and line breaks (like the `<pre>` element in HTML).
- **`pre-wrap`**: Text preserves spaces and line breaks, but also wraps when necessary.
- **`pre-line`**: Text preserves line breaks, but consecutive white spaces are collapsed.

#### **Example 1: Controlling White Space**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>White Space Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="normal-space">This is a sentence with normal white space behavior.     Multiple spaces are collapsed.</div>
    
    <div class="nowrap-space">This is a very long sentence that will not wrap onto a new line. It will overflow its container.</div>
    
    <div class="pre-space">This     text    preserves
        both spaces    and line breaks.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.normal-space {
    white-space: normal;  /* Default behavior: spaces collapse, text wraps */
    width: 250px;
    border: 1px solid #000;
    margin-bottom: 10px;
}

.nowrap-space {
    white-space: nowrap;  /* Text will not wrap */
    width: 250px;
    border: 1px solid #000;
    overflow: hidden;
    margin-bottom: 10px;
}

.pre-space {
    white-space: pre;  /* Text preserves spaces and line breaks */
    width: 250px;
    border: 1px solid #000;
}
```

#### **Explanation:**
- **`white-space: normal;`**: The default behavior. Text wraps automatically, and consecutive white spaces are collapsed into a single space.
- **`white-space: nowrap;`**: Text stays on a single line and does not wrap. If the text is too long, it overflows its container.
- **`white-space: pre;`**: Text preserves both white spaces and line breaks, which can be useful for displaying code or formatted text.

---

### **2. `word-wrap` and `overflow-wrap`**

The `word-wrap` property (now known as `overflow-wrap`) allows you to control the behavior of long words that might overflow their container. This is useful when you need to handle long words or URLs that would otherwise break the layout.

- **`normal`**: Words break only at allowed break points (like spaces).
- **`break-word`**: Words will break at any point if necessary to prevent overflow.

#### **Example 2: Controlling Word Wrapping**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Wrap Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="normal-wrap">ThisIsAReallyLongWordThatWillOverflowIfNotHandledProperly.</div>
    
    <div class="break-word">ThisIsAReallyLongWordThatWillBreakOntoANewLineWhenItExceedsTheContainerWidth.</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.normal-wrap {
    width: 250px;
    border: 1px solid #000;
    white-space: normal;  /* Default wrapping behavior */
    margin-bottom: 10px;
}

.break-word {
    width: 250px;
    border: 1px solid #000;
    white-space: normal;
    overflow-wrap: break-word;  /* Allows words to break to prevent overflow */
}
```

#### **Explanation:**
- **`overflow-wrap: normal;`**: Words will not break unless there's a natural break point (e.g., a space or hyphen).
- **`overflow-wrap: break-word;`**: Words will break at any point if necessary to prevent overflow, which helps with long words or URLs that don’t contain spaces.

---

### **3. Practical Use Cases of Wrapping and White Space**

These properties are vital in responsive design and text formatting. For example, preserving white space is crucial in code editors, while controlling word wrapping is essential for handling long text in narrow containers, such as on mobile devices.

#### **Example 3: Real-World Scenario**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-World Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="code-example">
        <pre>
            function example() {
                console.log("This code block preserves spacing and line breaks.");
            }
        </pre>
    </div>
    
    <div class="long-url">
        Here is a long URL that needs to be wrapped correctly: https://www.example.com/thisisaverylongurlthatisnotgoingtofitinthesmallcontainer.
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.code-example pre {
    white-space: pre;  /* Preserves spaces and line breaks in code */
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #000;
}

.long-url {
    width: 250px;
    white-space: normal;
    overflow-wrap: break-word;  /* Ensures the long URL wraps properly */
    border: 1px solid #000;
    padding: 10px;
}
```

#### **Explanation:**
- **`white-space: pre;`**: Used in code blocks to preserve formatting.
- **`overflow-wrap: break-word;`**: Used for URLs or long words to prevent overflow, ensuring the content fits within the container.

---

### **Summary**

- **`white-space`** controls how white space and text wrapping are handled within an element.
  - **`normal`**: Default behavior. Text wraps, and white spaces collapse.
  - **`nowrap`**: Text does not wrap; it stays on a single line.
  - **`pre`**: Preserves white spaces and line breaks.
  - **`pre-wrap`**: Preserves white spaces and line breaks, but text still wraps when necessary.
  - **`pre-line`**: Preserves line breaks, but white spaces collapse.
- **`overflow-wrap` (or `word-wrap`)** handles long words or URLs to prevent overflow.
  - **`normal`**: Words break only at natural break points.
  - **`break-word`**: Words break at any point to prevent overflow.

These properties help you control text behavior in various layouts, ensuring content is displayed properly across different devices and screen sizes.