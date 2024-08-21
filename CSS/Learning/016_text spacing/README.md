### **Lesson: Text Spacing**

In CSS, text spacing refers to the management of space between and around text elements. This includes properties like `letter-spacing`, `word-spacing`, and `line-height`. These properties are essential for creating a visually pleasing and readable design, particularly when dealing with typography on the web.

The main text spacing properties are:

1. **`letter-spacing`**: Controls the space between individual characters (letters).
2. **`word-spacing`**: Controls the space between words.
3. **`line-height`**: Controls the height of lines, or the amount of space between lines of text.
4. **`text-indent`**: Controls the indentation of the first line of text.

---

### **1. `letter-spacing`**

The `letter-spacing` property is used to increase or decrease the space between characters in a text element.

#### **Example 1: Adjusting Letter Spacing**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Letter Spacing Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="letter-spacing-normal">This is normal letter spacing.</p>
    <p class="letter-spacing-wide">This is wide letter spacing.</p>
    <p class="letter-spacing-narrow">This is narrow letter spacing.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.letter-spacing-normal {
    letter-spacing: normal;  /* Default letter spacing */
}

.letter-spacing-wide {
    letter-spacing: 3px;  /* Adds 3 pixels of space between each character */
}

.letter-spacing-narrow {
    letter-spacing: -1px;  /* Reduces space between characters by 1 pixel */
}
```

#### **Explanation:**
- **`letter-spacing: normal;`**: This is the default spacing between characters.
- **`letter-spacing: 3px;`**: Increases the space between characters by 3 pixels.
- **`letter-spacing: -1px;`**: Decreases the space between characters by 1 pixel, making them closer together.

---

### **2. `word-spacing`**

The `word-spacing` property is used to increase or decrease the space between words in a text element.

#### **Example 2: Adjusting Word Spacing**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Spacing Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="word-spacing-normal">This is normal word spacing.</p>
    <p class="word-spacing-wide">This is wide word spacing.</p>
    <p class="word-spacing-narrow">This is narrow word spacing.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.word-spacing-normal {
    word-spacing: normal;  /* Default word spacing */
}

.word-spacing-wide {
    word-spacing: 10px;  /* Adds 10 pixels of space between each word */
}

.word-spacing-narrow {
    word-spacing: -2px;  /* Reduces space between words by 2 pixels */
}
```

#### **Explanation:**
- **`word-spacing: normal;`**: This is the default space between words.
- **`word-spacing: 10px;`**: Increases the space between words by 10 pixels.
- **`word-spacing: -2px;`**: Decreases the space between words by 2 pixels, bringing them closer together.

---

### **3. `line-height`**

The `line-height` property controls the amount of space between lines of text within a block element. This property is critical for readability, especially in paragraphs and blocks of text.

#### **Example 3: Adjusting Line Height**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Line Height Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="line-height-normal">This paragraph has normal line height. The spacing between lines is determined by the browser's default settings.</p>
    <p class="line-height-wide">This paragraph has wide line height. The lines are spaced farther apart.</p>
    <p class="line-height-narrow">This paragraph has narrow line height. The lines are closer together.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.line-height-normal {
    line-height: normal;  /* Default line height */
}

.line-height-wide {
    line-height: 2;  /* Double the normal line height */
}

.line-height-narrow {
    line-height: 0.8;  /* Reduce line height to 80% of the normal */
}
```

#### **Explanation:**
- **`line-height: normal;`**: This is the default line height, typically around 1.2 times the font size.
- **`line-height: 2;`**: Increases the space between lines to be double the normal.
- **`line-height: 0.8;`**: Decreases the space between lines, making them closer together.

---

### **4. `text-indent`**

The `text-indent` property is used to indent the first line of text within an element. This is commonly used in paragraphs to create a visual separation between blocks of text.

#### **Example 4: Text Indentation**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Indent Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="text-indent">This paragraph has an indented first line. Text indentation is often used in printed materials to denote the beginning of a new paragraph.</p>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.text-indent {
    text-indent: 50px;  /* Indents the first line of text by 50 pixels */
}
```

#### **Explanation:**
- **`text-indent: 50px;`**: The first line of the paragraph is indented by 50 pixels. This can be useful for styling articles, blogs, or any content where you want to create a traditional paragraph indentation.

---

### **Summary**

- **`letter-spacing`**: Adjusts the space between individual characters.
- **`word-spacing`**: Adjusts the space between words.
- **`line-height`**: Adjusts the space between lines of text.
- **`text-indent`**: Indents the first line of text.

These properties are fundamental to creating well-structured and visually appealing text on your website, ensuring readability and proper alignment.