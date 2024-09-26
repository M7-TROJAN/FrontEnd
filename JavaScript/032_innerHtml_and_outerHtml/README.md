# `innerHTML`, `outerHTML`, `innerText`, `outerText`, and `textContent` in JavaScript

---

## 1. Overview

JavaScript provides several properties for interacting with the content of HTML elements:
- **`innerHTML`**: Gets or sets the HTML inside an element.
- **`outerHTML`**: Gets or sets the entire HTML element, including its tags.
- **`innerText`**: Gets or sets the text inside an element (ignoring hidden elements).
- **`outerText`**: Gets or sets the text of an element, replacing the element itself.
- **`textContent`**: Gets or sets the text inside an element, including hidden elements but without parsing HTML.

---

## 2. `innerHTML`

The `innerHTML` property allows you to get or set the HTML content inside an element, including nested elements.

### Example 1: Using `innerHTML`

```html
<div id="content">
  <p>This is a <strong>paragraph</strong>.</p>
</div>

<script>
  const contentDiv = document.getElementById('content');

  // Get inner HTML
  console.log(contentDiv.innerHTML);  
  // Output: <p>This is a <strong>paragraph</strong>.</p>

  // Set new inner HTML
  contentDiv.innerHTML = '<p>Updated <em>content</em>.</p>';
</script>
```

- **Before**: `<p>This is a <strong>paragraph</strong>.</p>`
- **After**: `<p>Updated <em>content</em>.</p>`

---

## 3. `outerHTML`

The `outerHTML` property allows you to get or set the entire HTML element, including its tags.

### Example 2: Using `outerHTML`

```html
<div id="content">
  <p>This is a paragraph.</p>
</div>

<script>
  const contentDiv = document.getElementById('content');

  // Get outer HTML
  console.log(contentDiv.outerHTML);  
  // Output: <div id="content"><p>This is a paragraph.</p></div>

  // Set new outer HTML
  contentDiv.outerHTML = '<section id="newContent">New Section</section>';
</script>
```

- **Before**: `<div id="content"><p>This is a paragraph.</p></div>`
- **After**: `<section id="newContent">New Section</section>`

---

## 4. `innerText`

The `innerText` property returns the text content inside an element, excluding hidden elements and without any HTML tags.

### Example 3: Using `innerText`

```html
<div id="textContent">
  <p>This is a <span style="display: none;">hidden</span> paragraph.</p>
</div>

<script>
  const textDiv = document.getElementById('textContent');

  // Get inner text
  console.log(textDiv.innerText);  
  // Output: "This is a paragraph."

  // Set new inner text
  textDiv.innerText = 'New plain text.';
</script>
```

- **Before**: `This is a paragraph.`
- **After**: `New plain text.`

---

## 5. `outerText`

The `outerText` property gets or sets the text content of an element, replacing the element itself with text.

### Example 4: Using `outerText`

```html
<div id="replaceText">
  <p>This is a paragraph.</p>
</div>

<script>
  const replaceTextDiv = document.getElementById('replaceText');

  // Get outer text
  console.log(replaceTextDiv.outerText);  
  // Output: "This is a paragraph."

  // Set new outer text (replaces the entire element)
  replaceTextDiv.outerText = 'Replaced text.';
</script>
```

- **Before**: `<div id="replaceText"><p>This is a paragraph.</p></div>`
- **After**: `Replaced text.`

---

## 6. `textContent`

The `textContent` property retrieves the text content of an element, including hidden elements, but it returns all content as plain text, ignoring HTML tags.

### Example 5: Using `textContent`

```html
<div id="textContentExample">
  <p>This is a <span style="display: none;">hidden</span> paragraph.</p>
</div>

<script>
  const textContentDiv = document.getElementById('textContentExample');

  // Get text content
  console.log(textContentDiv.textContent);  
  // Output: "This is a hidden paragraph."

  // Set new text content
  textContentDiv.textContent = 'New content with <strong>HTML</strong>.';
</script>
```

- **Before**: `This is a hidden paragraph.`
- **After**: `New content with <strong>HTML</strong>.`

Unlike `innerHTML`, which parses and renders HTML tags, `textContent` treats everything as plain text.

---

## 7. Summary of Differences

- **`innerHTML`**: Retrieves or sets the HTML content inside an element.
- **`outerHTML`**: Retrieves or sets the entire element, including its tags.
- **`innerText`**: Retrieves or sets the visible text content inside an element, excluding hidden elements.
- **`outerText`**: Retrieves or sets the text of an element and replaces the element itself.
- **`textContent`**: Retrieves or sets all text inside an element, including hidden elements, but ignores HTML tags.

---