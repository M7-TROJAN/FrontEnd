### Lesson: CSS `transition`

CSS `transition` allows you to create smooth animations when changing CSS properties over a specified duration. Transitions are useful for improving user experience by making changes feel less abrupt, such as when hovering over buttons, opening dropdowns, or interacting with elements.

### **Key Properties of `transition`:**
1. **`transition-property`**: Specifies the CSS property to apply the transition to.
2. **`transition-duration`**: Defines the duration of the transition (e.g., in seconds or milliseconds).
3. **`transition-timing-function`**: Specifies the speed curve of the transition (e.g., `ease`, `linear`, `ease-in`, `ease-out`, `cubic-bezier()`).
4. **`transition-delay`**: Sets a delay before the transition starts.

### **Example 1: Basic Transition**

#### **HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transition Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="btn">Hover over me!</button>
</body>
</html>
```

#### **CSS:**

```css
.btn {
    padding: 10px 20px;
    background-color: lightblue;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: blue;
    color: white;
}
```

##### **Explanation:**
- **`transition: background-color 0.3s ease;`**: This line applies a transition to the `background-color` property. It will take `0.3 seconds` to complete and will use the `ease` timing function, which starts slow, speeds up, and then slows down at the end.
- When you hover over the button, the background color changes smoothly from `lightblue` to `blue`.

---

### **Example 2: Multiple Properties Transition**

You can apply transitions to multiple properties at once.

#### **CSS:**

```css
.btn {
    padding: 10px 20px;
    background-color: lightblue;
    color: black;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease-in;
}

.btn:hover {
    background-color: blue;
    color: white;
    transform: scale(1.1);
}
```

##### **Explanation:**
- **`transition: background-color 0.3s ease, transform 0.2s ease-in;`**: This applies a transition to both the `background-color` and `transform` properties. The `background-color` transition takes `0.3 seconds` with an `ease` timing function, while the `transform` transition (scaling up) takes `0.2 seconds` with an `ease-in` timing function.
- On hover, the button changes color and scales up slightly, creating a smooth and responsive effect.

---

### **Example 3: Transition with Delay**

You can add a delay to your transition so that it starts after a specified period.

#### **CSS:**

```css
.btn {
    padding: 10px 20px;
    background-color: lightblue;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease-in 0.1s; /* 0.1s delay for transform */
}

.btn:hover {
    background-color: blue;
    color: white;
    transform: scale(1.1);
}
```

##### **Explanation:**
- **`transform 0.2s ease-in 0.1s;`**: This applies a `0.1 second` delay before the `transform` (scaling) transition begins.
- When you hover over the button, the background color changes immediately, but the scaling effect happens after a short delay.

---

### **Transition Shorthand**
Instead of writing out each transition property separately, you can use the shorthand `transition` property, which takes the following form:
```css
transition: property duration timing-function delay;
```
For example:
```css
transition: background-color 0.3s ease 0.1s;
```

### **Use Cases**
- **Hover Effects**: Creating smooth changes in button colors, sizes, or shadows.
- **State Changes**: Transitioning between different element states, such as expanding/collapsing sections or changing modal visibility.
- **Form Feedback**: Smoothly indicating validation results by transitioning border or background colors.