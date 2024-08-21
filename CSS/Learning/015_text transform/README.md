### **Lesson: Text Transform**

The `text-transform` property in CSS is used to control the capitalization of text. It can be applied to modify text to uppercase, lowercase, or capitalize the first letter of each word. This property is especially useful for styling headings, buttons, or any text where you want to enforce a particular case formatting.

The possible values for the `text-transform` property are:

- **`none`**: No transformation (this is the default value).
- **`capitalize`**: Capitalizes the first letter of each word.
- **`uppercase`**: Transforms all letters to uppercase.
- **`lowercase`**: Transforms all letters to lowercase.

---

### **1. Basic Usage of `text-transform`**

#### **Example 1: Default Text (No Transformation)**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Transform Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="default-text">This is the Default Text</h1>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.default-text {
    text-transform: none;  /* Default value, no text transformation */
}
```

#### **Explanation:**
- **`text-transform: none;`**: This is the default behavior, meaning the text is displayed as it is in the HTML content without any transformation.

---

### **2. Capitalize First Letter of Each Word**

The `capitalize` value capitalizes the first letter of each word in the text.

#### **Example 2: Capitalize Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Transform Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="capitalize-text">this text should be capitalized</h1>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.capitalize-text {
    text-transform: capitalize;  /* Capitalizes the first letter of each word */
}
```

#### **Explanation:**
- **`text-transform: capitalize;`**: This ensures that each word in the text starts with a capital letter. For example, "this text should be capitalized" becomes "This Text Should Be Capitalized".

---

### **3. Transform to Uppercase**

The `uppercase` value converts all the text to uppercase.

#### **Example 3: Uppercase Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Transform Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="uppercase-text">this text should be uppercase</h1>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.uppercase-text {
    text-transform: uppercase;  /* Transforms all text to uppercase */
}
```

#### **Explanation:**
- **`text-transform: uppercase;`**: This transforms all the letters in the text to uppercase, regardless of how they were originally written in the HTML content. For example, "this text should be uppercase" becomes "THIS TEXT SHOULD BE UPPERCASE".

---

### **4. Transform to Lowercase**

The `lowercase` value converts all the text to lowercase.

#### **Example 4: Lowercase Text**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Transform Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="lowercase-text">THIS TEXT SHOULD BE LOWERCASE</h1>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.lowercase-text {
    text-transform: lowercase;  /* Transforms all text to lowercase */
}
```

#### **Explanation:**
- **`text-transform: lowercase;`**: This transforms all the letters in the text to lowercase, regardless of how they were originally written in the HTML content. For example, "THIS TEXT SHOULD BE LOWERCASE" becomes "this text should be lowercase".

---

### **5. Practical Use Cases**

The `text-transform` property is particularly useful when styling headings, navigation links, and buttons to enforce consistent text formatting across a website.

#### **Example 5: Practical Use Case**

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Transform Practical Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="btn-uppercase">Submit</button>
    <button class="btn-lowercase">Cancel</button>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.btn-uppercase {
    text-transform: uppercase;  /* Force button text to be uppercase */
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
}

.btn-lowercase {
    text-transform: lowercase;  /* Force button text to be lowercase */
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
}
```

#### **Explanation:**
- **`.btn-uppercase { text-transform: uppercase; }`**: The text inside the "Submit" button will be forced to display in uppercase, making it more visually consistent.
- **`.btn-lowercase { text-transform: lowercase; }`**: The text inside the "Cancel" button will be forced to display in lowercase.

---

### **Summary**

- **`text-transform`**: Controls the capitalization of text.
  - **`none`**: No transformation.
  - **`capitalize`**: Capitalizes the first letter of each word.
  - **`uppercase`**: Converts all text to uppercase.
  - **`lowercase`**: Converts all text to lowercase.
- Practical for enforcing consistent text styling across various elements like headings, buttons, and navigation links.