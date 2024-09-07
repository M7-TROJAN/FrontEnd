
# Lesson: `grid-template-columns` and `grid-template-rows` in CSS Grid

The `grid-template-columns` and `grid-template-rows` properties are essential in CSS Grid layout. These properties define the structure of the grid by specifying the size and number of columns and rows in a grid container.

Let's break down both properties with explanations and examples:

---

### 1. Basic Usage of `grid-template-columns` and `grid-template-rows`

These properties allow you to define the number of columns and rows and their sizes. You can specify the size in units like `px`, `em`, `%`, or using the special `fr` (fractional unit).

#### HTML:

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

#### CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 100px 150px;
  gap: 10px;
}

.item {
  background-color: lightblue;
  border: 1px solid #333;
  text-align: center;
  line-height: 100px;
}
```

#### Explanation:
- **grid-template-columns: 100px 200px;**  
  This defines two columns in the grid: the first column is 100px wide, and the second column is 200px wide.
  
- **grid-template-rows: 100px 150px;**  
  This defines two rows: the first row is 100px high, and the second row is 150px high.

- **gap: 10px;**  
  Adds 10px of space between the grid items.

---

### 2. Using `fr` Units

The `fr` unit represents a fraction of the available space in the grid container. It distributes space in proportion to the number of `fr` units.

#### CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}
```

#### Explanation:
- **grid-template-columns: 1fr 2fr;**  
  The grid has two columns. The first column will take up 1 fraction of the available space, while the second column will take up 2 fractions. This means the second column will be twice as wide as the first column.

---

### 3. Repeating Patterns with `repeat()`

The `repeat()` function allows you to repeat the same column or row definition multiple times.

#### CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 10px;
}
```

#### Explanation:
- **grid-template-columns: repeat(3, 1fr);**  
  This creates three equal columns, each taking up one fraction of the available space.

- **grid-template-rows: repeat(2, 150px);**  
  This creates two rows, each 150px high.

---

## 4. Using `minmax()` Function

The `minmax()` function allows you to set a minimum and maximum size for grid tracks. This is particularly useful for responsive design.

```html
<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 2fr);
    grid-template-rows: 100px;
    gap: 10px;
}

.item {
    background-color: lightgreen;
    text-align: center;
    padding: 20px;
}
```

In this example:
- `grid-template-columns: minmax(100px, 1fr) minmax(100px, 2fr);` defines two columns:
  - The first column has a minimum width of 100px and can grow up to 1 fraction of the available space.
  - The second column has a minimum width of 100px and can grow up to 2 fractions of the available space.

## 5. Using `auto-fill`

The `auto-fill` keyword allows the grid to automatically create as many columns as can fit in the container.

```html
<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}

.item {
    background-color: lightcoral;
    text-align: center;
    padding: 20px;
}
```

In this example:
- `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));` creates as many columns as will fit into the container, each with a minimum width of 150px and a maximum of 1 fraction of the available space.

## 6. Combining `minmax()` and `auto-fill` for a Responsive Grid

```html
<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: 100px;
    gap: 10px;
}

.item {
    background-color: lightseagreen;
    text-align: center;
    padding: 20px;
}
```

This setup allows the grid to be highly responsive:
- As the container width changes, more or fewer columns are created.
- Each column will always be at least 100px wide, but it can grow to fill the available space.

### 7. Defining Auto Rows and Columns

You can also use the `auto` keyword to allow rows or columns to automatically size themselves based on the content.

#### CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 150px;
  gap: 10px;
}
```

#### Explanation:
- **grid-template-columns: 1fr auto;**  
  The first column takes up 1 fraction of the available space, while the second column sizes itself automatically based on its content.

- **grid-template-rows: auto 150px;**  
  The first row sizes itself based on the height of its content, and the second row is fixed at 150px.

---

### 8. Complex Grid Layout

You can mix and match different units to create complex grid layouts.

#### CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 100px;
  grid-template-rows: 100px auto 150px;
  gap: 15px;
}
```

#### Explanation:
- **grid-template-columns: 1fr 2fr 100px;**  
  This creates three columns: the first takes 1 fraction of the space, the second takes 2 fractions, and the third is a fixed 100px wide.

- **grid-template-rows: 100px auto 150px;**  
  This creates three rows: the first is 100px high, the second sizes itself based on content, and the third is fixed at 150px.

---

### Summary:
- **`grid-template-columns`** defines the width of each column.
- **`grid-template-rows`** defines the height of each row.
- You can use fixed units (`px`, `%`), flexible units (`fr`), and even auto-sizing based on content.
- The `repeat()` function helps create repetitive column/row structures.

By mastering these properties, you gain fine control over the layout of grid-based designs.
