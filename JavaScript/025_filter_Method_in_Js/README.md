# Higher Order Function: `filter()` in JavaScript

---

## 1. What Is a Higher Order Function?

A **higher-order function** is a function that takes other functions as arguments or returns a function. These functions are a key part of JavaScript’s functional programming capabilities.

### Example of a Higher-Order Function

```js
function higherOrder(fn) {
    return fn();
}

function sayHello() {
    return "Hello!";
}

console.log(higherOrder(sayHello));  // Output: "Hello!"
```

---

## 2. The `filter()` Function

The **`filter()`** function is a higher-order function that **creates a new array** with all elements that **pass the test implemented by the provided function**.

### Syntax

```js
array.filter(callback(element, index, array))
```

- **callback**: A function that is called for each element in the array. It receives the following parameters:
  - **element**: The current element being processed.
  - **index**: The index of the current element (optional).
  - **array**: The original array (optional).
- **Returns**: A new array with elements that passed the test in the callback function.

---

## 3. How `filter()` Works

The `filter()` method processes each element in the array and returns a new array containing only the elements that meet the condition defined in the callback function.

### Example 1: Filtering Even Numbers

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4, 6]
```

Here, `filter()` returns a new array with only the even numbers from the original `numbers` array.

---

## 4. Using `filter()` with Objects

You can use `filter()` to work with arrays of objects to filter based on specific properties.

### Example 2: Filtering Objects Based on Property Value

```js
const users = [
    { name: "Mahmoud", age: 26 },
    { name: "Sara", age: 20 },
    { name: "John", age: 30 }
];

const adults = users.filter(user => user.age >= 21);

console.log(adults);  // Output: [{ name: "Mahmoud", age: 26 }, { name: "John", age: 30 }]
```

In this example, we filter out users whose age is greater than or equal to 21.

---

## 5. Using `filter()` with Index

`filter()` also provides the index of the element as an optional second argument.

### Example 3: Filtering Elements Based on Their Index

```js
const numbers = [10, 20, 30, 40, 50];
const filteredNumbers = numbers.filter((num, index) => index % 2 === 0);

console.log(filteredNumbers);  // Output: [10, 30, 50]
```

In this case, `filter()` returns only the elements at even indices.

---

## 6. Differences Between `filter()` and `map()`

- **`filter()`** creates a new array with elements that pass the test.
- **`map()`** transforms every element of an array and returns a new array.

### Example 4: `filter()` vs `map()`

```js
const numbers = [1, 2, 3, 4, 5];

const filtered = numbers.filter(num => num > 3);
console.log(filtered);  // Output: [4, 5]

const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]
```

`filter()` removes items that don’t meet the condition, while `map()` applies a transformation to all elements.

---

## 7. Chaining `filter()` with Other Array Methods

You can chain `filter()` with other methods, such as `map()`, for more complex data transformations.

### Example 5: Filtering and Mapping

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenSquared = numbers
    .filter(num => num % 2 === 0)  // Filter even numbers
    .map(num => num * num);        // Square the filtered numbers

console.log(evenSquared);  // Output: [4, 16, 36]
```

---

## 8. Filtering with Complex Conditions

You can use complex conditions in the callback function for `filter()`.

### Example 6: Filtering Numbers Based on Multiple Conditions

```js
const numbers = [10, 25, 30, 50, 60];
const result = numbers.filter(num => num > 20 && num < 60);

console.log(result);  // Output: [25, 30, 50]
```

This example filters numbers that are greater than 20 but less than 60.

---

## 9. Common Mistakes with `filter()`

### Mistake 1: Forgetting to Return a Value

Forgetting to return a value from the callback will result in an empty array.

```js
const numbers = [1, 2, 3, 4];
const result = numbers.filter(num => {
    num > 2;  // No return statement
});

console.log(result);  // Output: []
```

Always return a value in the callback for `filter()` to work correctly.

---

## 10. Summary

- The **`filter()`** function creates a new array containing only the elements that pass the test in the callback function.
- It is a higher-order function because it takes another function as an argument.
- You can use `filter()` for tasks like removing elements based on specific criteria, filtering objects, or applying complex conditions.