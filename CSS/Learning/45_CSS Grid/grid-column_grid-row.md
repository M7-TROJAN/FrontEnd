### CSS Grid: Full Guide to `grid-column` and `grid-row` Properties

The `grid-column` and `grid-row` properties in CSS Grid are used to control the placement and size of grid items within the grid. These properties allow you to specify how many columns or rows a grid item should span, as well as where it should start and end within the grid.

#### Syntax Overview

- **`grid-column: start / end;`**
- **`grid-row: start / end;`**

These properties define where a grid item begins and ends within a grid. The start and end positions are defined by grid lines.

### 1. `grid-column` Property

The `grid-column` property is used to define which columns a grid item should span.

**Syntax**:
```css
grid-column: <start-line> / <end-line>;
```
- **`start-line`**: The grid line where the item should start.
- **`end-line`**: The grid line where the item should end.

**Example 1: Simple Grid Layout**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Column Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
      gap: 10px;
    }
    .item1 {
      grid-column: 1 / 3; /* Spans from column 1 to column 3 */
    }
    .item2 {
      grid-column: 3 / 5; /* Spans from column 3 to column 5 */
    }
    .item3 {
      grid-column: 1 / 5; /* Spans all columns */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
  </div>
</body>
</html>
```
**Explanation**:
- **Item 1** spans two columns (from line 1 to line 3).
- **Item 2** spans the next two columns (from line 3 to line 5).
- **Item 3** spans all four columns.

### 2. `grid-row` Property

The `grid-row` property is similar to `grid-column`, but it controls the grid item's row span.

**Syntax**:
```css
grid-row: <start-line> / <end-line>;
```
- **`start-line`**: The grid line where the item should start.
- **`end-line`**: The grid line where the item should end.

**Example 2: Row Spanning**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Row Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
      grid-template-rows: repeat(3, 100px); /* 3 equal rows */
      gap: 10px;
    }
    .item1 {
      grid-row: 1 / 3; /* Spans from row 1 to row 3 */
    }
    .item2 {
      grid-row: 2 / 4; /* Spans from row 2 to row 4 */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
  </div>
</body>
</html>
```
**Explanation**:
- **Item 1** spans two rows (from line 1 to line 3).
- **Item 2** spans two rows as well (from line 2 to line 4).

### 3. Combining `grid-column` and `grid-row`

You can use both `grid-column` and `grid-row` together to control both the column and row span of a grid item.

**Example 3: Full Grid Control**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Column and Row Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
      grid-template-rows: repeat(3, 100px); /* 3 equal rows */
      gap: 10px;
    }
    .item1 {
      grid-column: 1 / 3;
      grid-row: 1 / 2; /* Spans 2 columns and 1 row */
    }
    .item2 {
      grid-column: 3 / 5;
      grid-row: 1 / 3; /* Spans 2 columns and 2 rows */
    }
    .item3 {
      grid-column: 1 / 5;
      grid-row: 3 / 4; /* Spans all columns in the last row */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
  </div>
</body>
</html>
```
**Explanation**:
- **Item 1** spans two columns and occupies one row.
- **Item 2** spans two columns and two rows.
- **Item 3** spans all four columns in the last row.

### 4. Span Keyword

The `span` keyword is a convenient way to specify how many rows or columns a grid item should span without having to manually calculate the end line.

**Example 4: Using `span`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Span Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
      grid-template-rows: repeat(3, 100px); /* 3 equal rows */
      gap: 10px;
    }
    .item1 {
      grid-column: span 2; /* Spans 2 columns */
      grid-row: span 1; /* Spans 1 row */
    }
    .item2 {
      grid-column: span 2; /* Spans 2 columns */
      grid-row: span 2; /* Spans 2 rows */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
  </div>
</body>
</html>
```
**Explanation**:
- **Item 1** spans two columns using `span 2`.
- **Item 2** spans both two columns and two rows.

### 5. Named Grid Lines

You can name grid lines to make it easier to control where grid items start and end.

**Example 5: Named Grid Lines**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Named Grid Lines Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: [start] 1fr [middle] 1fr [end];
      grid-template-rows: [top] 100px [bottom];
      gap: 10px;
    }
    .item1 {
      grid-column: start / middle;
      grid-row: top / bottom;
    }
    .item2 {
      grid-column: middle / end;
      grid-row: top / bottom;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
  </div>
</body>
</html>
```
**Explanation**:
- The grid lines are named as **`start`**, **`middle`**, and **`end`** for columns, and **`top`** and **`bottom`** for rows.
- **Item 1** is placed between the `start` and `middle` grid lines.
- **Item 2** is placed between the `middle` and `end` grid lines.

### Use Cases and Scenarios

- **Dashboard Layouts**: Create flexible dashboards where widgets span different columns and rows.
- **Complex Layouts**: Implement magazine-like layouts where articles and images occupy custom grid areas.
- **Responsive Grids**: Combine `grid-column` and `grid-row` with media queries to create responsive designs that rearrange based on screen size.