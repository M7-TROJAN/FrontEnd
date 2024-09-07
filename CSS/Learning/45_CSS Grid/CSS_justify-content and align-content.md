### CSS Grid: `justify-content` and `align-content` Properties - Full Guide

In CSS Grid, `justify-content` and `align-content` are two essential properties that help control the alignment of grid items within the grid container. These properties work on the entire grid and manage how the grid content is positioned within the grid container when there's extra space available.

---

#### 1. **`justify-content` Property**

The `justify-content` property controls the horizontal alignment of the grid within the container. It defines how the grid is positioned along the inline (horizontal) axis.

##### Syntax:
```css
.grid-container {
  justify-content: value;
}
```

##### Possible Values:

- **start**: Aligns the grid to the start of the container.
- **end**: Aligns the grid to the end of the container.
- **center**: Centers the grid within the container.
- **stretch**: Stretches the grid to fill the entire width of the container (default value).
- **space-between**: Distributes grid tracks evenly with no space at the edges.
- **space-around**: Distributes grid tracks evenly with equal space around them.
- **space-evenly**: Distributes grid tracks evenly with equal space between them and at the edges.

##### Example:

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  gap: 10px;
}

.item {
  background-color: lightcoral;
  padding: 20px;
  text-align: center;
}
```

This example centers the grid content horizontally within the container.

---

#### 2. **`align-content` Property**

The `align-content` property controls the vertical alignment of the grid within the container. It defines how the grid is positioned along the block (vertical) axis.

##### Syntax:
```css
.grid-container {
  align-content: value;
}
```

##### Possible Values:

- **start**: Aligns the grid to the start of the container.
- **end**: Aligns the grid to the end of the container.
- **center**: Centers the grid within the container.
- **stretch**: Stretches the grid to fill the entire height of the container (default value).
- **space-between**: Distributes grid tracks evenly with no space at the edges.
- **space-around**: Distributes grid tracks evenly with equal space around them.
- **space-evenly**: Distributes grid tracks evenly with equal space between them and at the edges.

##### Example:

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  align-content: space-between;
  gap: 10px;
}

.item {
  background-color: lightgreen;
  padding: 20px;
  text-align: center;
}
```

This example distributes the grid content vertically with equal space between the rows.

---

### Combining `justify-content` and `align-content`

You can use both `justify-content` and `align-content` together to control the alignment of the grid in both the horizontal and vertical directions.

##### Example:

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
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, 100px);
  justify-content: space-around;
  align-content: space-evenly;
  height: 400px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

In this example, the grid content is spaced evenly in both the horizontal and vertical directions, creating a balanced layout with space around the grid items.

---

### Important Notes:

- **Difference between `align-items` and `align-content`:** 
  - `align-items` adjusts the alignment of grid items within their individual grid cells.
  - `align-content` adjusts the alignment of the entire grid structure within the container.
  
- **Spacing:** These properties are especially useful when the grid does not fully occupy the container, and you need to control how the extra space is distributed.

This should give you a thorough understanding of how `justify-content` and `align-content` work in CSS Grid and how to use them effectively in different scenarios.