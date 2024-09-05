### CSS Flexbox: The Complete Guide

CSS Flexbox is one of the most powerful layout models in CSS, providing a flexible way to arrange elements in a container. Flexbox is especially useful for creating responsive designs, as it allows you to easily align and distribute space among items in a container, even when the size of the items is unknown or dynamic.

Flexbox operates on a container (flex container) and its direct children (flex items). It was designed to make layout tasks easier and offers a high degree of control over how elements align, space out, and resize.

---

### **1. Flex Container and Flex Items**

A **flex container** is an element with `display: flex;` or `display: inline-flex;`. Inside this container are **flex items**, which are the direct children of the container.

---

### **2. Flex Container Properties**

These properties are applied to the flex container to control the layout and alignment of flex items.

1. **`display: flex;`**  
   - Establishes the container as a flex container.
   - Makes the container's children (flex items) flexible.

2. **`flex-direction`**  
   - Defines the direction in which flex items are placed in the flex container.
   - Values:
     - `row` (default): Items are placed in a row (left to right).
     - `row-reverse`: Items are placed in a reversed row (right to left).
     - `column`: Items are placed in a column (top to bottom).
     - `column-reverse`: Items are placed in a reversed column (bottom to top).

3. **`justify-content`**  
   - Controls the alignment of flex items along the main axis (horizontal if `flex-direction: row`).
   - Values:
     - `flex-start` (default): Items are aligned at the start of the container.
     - `flex-end`: Items are aligned at the end.
     - `center`: Items are centered.
     - `space-between`: Items are evenly spaced with the first item at the start and the last item at the end.
     - `space-around`: Items are evenly spaced with equal space around them.

4. **`align-items`**  
   - Controls the alignment of flex items along the cross axis (vertical if `flex-direction: row`).
   - Values:
     - `stretch` (default): Items stretch to fill the container.
     - `flex-start`: Items align at the start of the container.
     - `flex-end`: Items align at the end.
     - `center`: Items align in the center.
     - `baseline`: Items align at the baseline of the content.

5. **`align-content`**  
   - Aligns flex lines (if there are multiple lines, such as when flex-wrap is applied).
   - Values:
     - `stretch` (default): Lines stretch to fill the container.
     - `flex-start`: Lines are packed at the start.
     - `flex-end`: Lines are packed at the end.
     - `center`: Lines are centered.
     - `space-between`: Lines are evenly spaced.
     - `space-around`: Lines are evenly spaced with space around them.

6. **`flex-wrap`**  
   - Controls whether flex items are forced into a single line or can wrap onto multiple lines.
   - Values:
     - `nowrap` (default): All items are in a single line.
     - `wrap`: Items wrap onto multiple lines.
     - `wrap-reverse`: Items wrap onto multiple lines in reverse order.

---

### **3. Flex Item Properties**

These properties are applied to individual flex items to control their size and behavior inside the flex container.

1. **`flex-grow`**  
   - Defines the ability of a flex item to grow if necessary.
   - A value of `1` allows the item to grow and fill available space.
   - A value of `0` prevents the item from growing.

2. **`flex-shrink`**  
   - Defines the ability of a flex item to shrink if necessary.
   - A value of `1` allows the item to shrink.
   - A value of `0` prevents the item from shrinking.

3. **`flex-basis`**  
   - Defines the default size of an element before the remaining space is distributed. Can be a length or percentage.

4. **`flex`**  
   - Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   - Example: `flex: 1 1 200px;` (flex-grow: 1, flex-shrink: 1, flex-basis: 200px).

5. **`align-self`**  
   - Allows the alignment of an individual flex item to be overridden.
   - Values:
     - `auto` (default): Inherits the value from the parent.
     - `stretch`: Stretches the item to fill the container.
     - `flex-start`: Aligns the item at the start.
     - `flex-end`: Aligns the item at the end.
     - `center`: Centers the item.
     - `baseline`: Aligns the item at the baseline.

---

### **4. Example: Basic Flexbox Layout**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html>
```

#### **CSS:**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #444;
    padding: 20px;
    height: 200px;
}

.item {
    background-color: #f68383;
    padding: 20px;
    color: white;
    border-radius: 5px;
}
```

##### **Explanation:**
- **`.container { display: flex; }`**: This makes the container a flex container.
- **`justify-content: space-between;`**: Flex items are evenly spaced.
- **`align-items: center;`**: Flex items are centered along the cross axis.

---

### **5. Example: Flexbox Wrapping**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Wrapping</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
</body>
</html>
```

#### **CSS:**
```css
.container {
    display: flex;
    flex-wrap: wrap;
    background-color: #444;
    padding: 20px;
}

.item {
    background-color: #f68383;
    padding: 20px;
    color: white;
    margin: 10px;
    flex: 1 1 150px;
}
```

##### **Explanation:**
- **`flex-wrap: wrap;`**: This allows the flex items to wrap onto multiple lines if there isn't enough space on one line.
- **`flex: 1 1 150px;`**: The items will take up equal space and have a basis of 150px. They can grow or shrink as necessary.

---

### **Use Cases for Flexbox**

- **Responsive Layouts**: Flexbox is ideal for responsive designs because it easily adjusts to different screen sizes and device orientations.
- **Centering Elements**: Flexbox makes centering items vertically and horizontally much simpler.
- **Navigation Bars**: It's perfect for creating navigation bars, aligning items evenly, and distributing space.
- **Grids**: Flexbox can be used to create flexible grid layouts without the complexity of traditional CSS grid techniques.