### **Lesson: CSS Table Styling**

Tables in HTML allow you to organize data in rows and columns. CSS offers numerous properties to style tables, making them more visually appealing and easier to read. In this lesson, we'll cover essential CSS properties for table styling, including border styling, cell padding, alignment, and more.

---

### **1. Basic Table Example**

We'll start with a basic table structure and add some basic CSS styling to improve its appearance.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Table Style Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Styled Table Example</h1>
    <table class="basic-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>Engineer</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Designer</td>
            </tr>
            <tr>
                <td>Emily Johnson</td>
                <td>35</td>
                <td>Developer</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.basic-table {
    width: 100%;
    border-collapse: collapse; /* Removes space between cells */
    margin: 20px 0;
}

.basic-table th, .basic-table td {
    border: 1px solid #ddd; /* Adds a border around cells */
    padding: 8px; /* Adds padding inside cells */
    text-align: left; /* Aligns text to the left */
}

.basic-table th {
    background-color: #f2f2f2; /* Adds a background color to header cells */
    font-weight: bold; /* Makes the header text bold */
}
```

#### **Explanation:**
- **`border-collapse: collapse;`**: Removes the space between the table cells so that borders of adjacent cells are merged.
- **`border: 1px solid #ddd;`**: Adds a light grey border around each cell.
- **`padding: 8px;`**: Adds space between the cell content and the cell border, improving readability.
- **`background-color: #f2f2f2;`**: Adds a light grey background to the header cells to differentiate them from the data cells.

---

### **2. Example 2: Adding Hover Effects**

To enhance the user experience, you can add hover effects to the table rows. This highlights a row when the user hovers over it.

##### **CSS Example (`style.css`):**

```css
.basic-table tr:hover {
    background-color: #f1f1f1; /* Light background on hover */
}
```

#### **Explanation:**
- **`tr:hover`**: Targets table rows and applies a background color when the user hovers over them.

---

### **3. Example 3: Zebra Striping**

Zebra striping (alternating row colors) helps improve the readability of table data by visually separating rows.

##### **CSS Example (`style.css`):**

```css
.basic-table tbody tr:nth-child(odd) {
    background-color: #f9f9f9; /* Light grey for odd rows */
}
```

#### **Explanation:**
- **`tr:nth-child(odd)`**: Targets every odd row in the table's body and applies a light grey background color to create a striped effect.

---

### **4. Example 4: Responsive Table**

Tables can be tricky to display on smaller screens. One solution is to make the table horizontally scrollable when necessary.

##### **CSS Example (`style.css`):**

```css
.table-container {
    overflow-x: auto; /* Enables horizontal scrolling */
}

.basic-table {
    width: 100%;
    min-width: 600px; /* Sets a minimum width to ensure table doesn't shrink too much */
}
```

##### **HTML Example (`index.html`):**

Wrap the table in a div with the class `table-container`:

```html
<div class="table-container">
    <table class="basic-table">
        <!-- Table content here -->
    </table>
</div>
```

#### **Explanation:**
- **`overflow-x: auto;`**: Allows the table to be horizontally scrollable if it exceeds the screen width.
- **`min-width: 600px;`**: Sets a minimum width for the table to prevent it from collapsing too much on smaller screens.

---

### **5. Example 5: Full Table Styling with Borders, Alignment, and Hover**

Here's a more comprehensive example, combining several CSS properties for a fully styled table.

##### **HTML Example (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fully Styled Table Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Fully Styled Table Example</h1>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>Engineer</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Designer</td>
            </tr>
            <tr>
                <td>Emily Johnson</td>
                <td>35</td>
                <td>Developer</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

##### **CSS Example (`style.css`):**

```css
.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 18px;
    text-align: left;
}

.styled-table th, .styled-table td {
    padding: 12px 15px;
    border: 1px solid #ddd;
}

.styled-table th {
    background-color: #009879;
    color: white;
    text-transform: uppercase;
}

.styled-table tbody tr:nth-child(odd) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:hover {
    background-color: #f1f1f1;
}
```

#### **Explanation:**
- **`font-size: 18px;`**: Increases the font size for better readability.
- **`background-color: #009879;`**: Adds a bold green background to the header cells for a modern look.
- **`color: white;`**: Changes the text color in the header to white to contrast against the green background.
- **`text-transform: uppercase;`**: Converts the header text to uppercase.
- **`nth-child(odd)`**: Applies zebra striping to the rows.
- **`tr:hover`**: Adds a subtle hover effect to rows.

---

### **Summary**

- **`border-collapse`**: Merges adjacent cell borders.
- **`padding`**: Adds space inside cells for better readability.
- **`nth-child()`**: Applies styles to specific rows (e.g., odd/even rows).
- **`tr:hover`**: Adds interactivity with hover effects.
- **`overflow-x: auto;`**: Makes tables responsive by enabling horizontal scrolling.

This lesson covers essential table styling techniques, helping you create professional-looking tables.