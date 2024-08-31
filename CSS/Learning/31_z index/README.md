### **Lesson: CSS `z-index` Property**

The **`z-index`** property in CSS controls the stacking order of elements on a web page. It determines which element appears on top when multiple elements overlap. The `z-index` only applies to positioned elements (i.e., those with `position` set to `relative`, `absolute`, `fixed`, or `sticky`).

### **1. The `z-index` Property**

- **`z-index: auto;`**: The default value, meaning the stacking order follows the normal document flow.
- **`z-index: number;`**: Defines the stacking order. A higher `z-index` value means the element will be on top of elements with a lower `z-index`.

- Elements with no `z-index` or `z-index: auto` will stack according to their order in the HTML (later elements appear on top).

---

### **2. Example 1: Basic `z-index` with `position: relative`**

In this example, two overlapping elements will demonstrate how `z-index` affects which one appears on top.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box {
    width: 200px;
    height: 200px;
    position: relative; /* Position must be set for z-index to work */
}

.box1 {
    background-color: lightblue;
    z-index: 1; /* Box 1 will be on top */
}

.box2 {
    background-color: lightcoral;
    margin-top: -100px; /* Overlap with Box 1 */
    z-index: 2; /* Box 2 will be on top */
}
```

#### **Explanation:**
- **`position: relative;`**: The `z-index` property only applies to elements that have their position set to `relative`, `absolute`, `fixed`, or `sticky`.
- **`z-index: 1;`** for `.box1` and **`z-index: 2;`** for `.box2`: Box 2 will appear on top of Box 1 due to its higher `z-index` value.
- The negative `margin-top` of Box 2 causes it to overlap with Box 1.

---

### **3. Example 2: `z-index` with `position: absolute`**

Using `z-index` with absolute positioning allows precise control over stacking when elements are removed from the document flow.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Absolute Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="parent">
        <div class="child child1">Child 1</div>
        <div class="child child2">Child 2</div>
    </div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.parent {
    position: relative;
    width: 400px;
    height: 300px;
    background-color: lightgray;
}

.child {
    width: 150px;
    height: 150px;
    position: absolute;
}

.child1 {
    background-color: lightgreen;
    top: 50px;
    left: 50px;
    z-index: 2; /* Child 1 will be on top */
}

.child2 {
    background-color: lightpink;
    top: 100px;
    left: 100px;
    z-index: 1; /* Child 2 will be underneath Child 1 */
}
```

#### **Explanation:**
- **`position: absolute;`**: Both child elements are positioned absolutely within the `.parent` container.
- **`z-index: 2;`** for `.child1` and **`z-index: 1;`** for `.child2`: Child 1 will appear on top of Child 2 due to its higher `z-index`.

---

### **4. Example 3: Auto `z-index` Behavior**

When `z-index` is not explicitly set (or set to `auto`), elements stack based on the order they appear in the HTML.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Auto Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box auto1">Box 1</div>
    <div class="box auto2">Box 2</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box {
    width: 200px;
    height: 200px;
    position: relative;
}

.auto1 {
    background-color: lightblue;
}

.auto2 {
    background-color: lightcoral;
    margin-top: -100px; /* Overlap with Box 1 */
}
```

#### **Explanation:**
- **`z-index: auto;`**: Without an explicit `z-index`, stacking is determined by the order of elements in the HTML. Since `.auto2` comes after `.auto1`, it will appear on top, even without a `z-index` setting.

---

### **5. Example 4: `z-index` with Negative Values**

A negative `z-index` moves an element behind other elements that have a `z-index` of zero or higher.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Negative Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
    <div class="box box3">Box 3</div>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.box {
    width: 200px;
    height: 200px;
    position: relative;
}

.box1 {
    background-color: lightblue;
    z-index: 1;
}

.box2 {
    background-color: lightcoral;
    margin-top: -100px;
    z-index: -1; /* Box 2 will be behind Box 1 */
}

.box3 {
    background-color: lightgreen;
    margin-top: -100px;
    z-index: 2; /* Box 3 will be on top of both Box 1 and Box 2 */
}
```

#### **Explanation:**
- **`z-index: -1;`**: Box 2 is positioned behind Box 1 because of the negative `z-index`.
- **`z-index: 2;`**: Box 3 is positioned on top of both Box 1 and Box 2 due to its higher `z-index` value.

---

### **Summary**

- **`z-index: auto;`**: The element follows the normal stacking order based on HTML.
- **`z-index: number;`**: The higher the `z-index` number, the higher the element is in the stack.
- **Negative `z-index` values**: Place the element behind others with a `z-index` of zero or higher.
- The `z-index` only applies to elements with a `position` other than `static` (i.e., `relative`, `absolute`, `fixed`, or `sticky`).