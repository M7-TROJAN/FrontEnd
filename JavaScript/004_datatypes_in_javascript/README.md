# Datatypes in JavaScript

JavaScript supports various data types, which are used to store and manipulate values. They are categorized into **primitive** and **non-primitive** (reference) types. Understanding these types is essential for effective coding in JavaScript.

---

## 1. Primitive Data Types

Primitive data types are basic data types that represent single values. They are immutable, meaning their values cannot be changed once set.

### The Primitive Types:
1. **Number**
2. **String**
3. **Boolean**
4. **Undefined**
5. **Null**
6. **Symbol** (introduced in ES6)
7. **BigInt** (introduced in ES11)

Let’s explore each in detail.

---

### 1.1 Number

- Represents numeric values, including integers and floating-point numbers.
- In JavaScript, numbers are always stored as **64-bit floating-point** values.

#### Example:

```js
let age = 26;            // Integer
let price = 19.99;       // Floating-point
```

### Operations on Numbers:

```js
let sum = 10 + 5;        // Addition
let product = 6 * 7;     // Multiplication
let division = 10 / 2;   // Division
let modulus = 9 % 2;     // Remainder of 9 / 2 = 1
```

#### Special Number Values:
- `Infinity` (positive/negative)
- `NaN` (Not-a-Number)

```js
console.log(1 / 0);      // Infinity
console.log("hello" * 2); // NaN (invalid operation)
```

---

### 1.2 String

- Represents a sequence of characters (text).
- Strings are enclosed in either **single quotes (`'`)**, **double quotes (`"`)**, or **backticks (` ` `)** for template literals.

#### Example:

```js
let firstName = 'Mahmoud';  // Single quotes
let lastName = "Mohamed";   // Double quotes
let fullName = `My name is ${firstName} ${lastName}`;  // Template literal
```

### String Operations:

```js
let greeting = "Hello, " + firstName;  // Concatenation
let length = fullName.length;          // Get string length
```

---

### 1.3 Boolean

- Represents logical values: `true` or `false`.
- Booleans are commonly used in conditional statements.

#### Example:

```js
let isAdult = true;
let isStudent = false;
```

#### Example in Condition:

```js
if (isAdult) {
  console.log("User is an adult.");
} else {
  console.log("User is not an adult.");
}
```

---

### 1.4 Undefined

- A variable is `undefined` when it is declared but has not been assigned a value.

#### Example:

```js
let x;
console.log(x);  // Output: undefined
```

- `undefined` is a type and a value at the same time.

---

### 1.5 Null

- Represents an **intentional absence** of any object value.
- It is used when you want to intentionally empty a variable.

#### Example:

```js
let job = null;  // Job is intentionally set to "no value"
```

#### Note:
- `null` is often confused with `undefined`, but they are different. `null` is an intentional value, while `undefined` is the default when no value is assigned.

---

### 1.6 Symbol (ES6)

- A `Symbol` is a unique and immutable data type often used as object property keys to avoid property name collisions.
- Every `Symbol` is unique.

#### Example:

```js
let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(sym1 === sym2);  // Output: false
```

---

### 1.7 BigInt (ES11)

- The `BigInt` type is used to represent integers that are larger than the limit of the `Number` type (`2^53 - 1`).
- To create a BigInt, append an **`n`** to the end of an integer.

#### Example:

```js
let largeNumber = 1234567890123456789012345678901234567890n;
```

---

## 2. Non-Primitive Data Types

Non-primitive (or reference) data types can store collections of values and more complex entities. In JavaScript, objects are non-primitive.

### The Main Non-Primitive Types:
1. **Object**
2. **Array**
3. **Function**

Let’s look into these in detail.

---

### 2.1 Object

- An object is a collection of **key-value pairs**.
- Keys (or properties) are strings (or Symbols), and values can be any data type.

#### Example:

```js
let person = {
  name: 'Mahmoud',
  age: 26,
  isDeveloper: true
};
```

#### Accessing Object Properties:

```js
console.log(person.name);        // Output: Mahmoud
console.log(person['age']);      // Output: 26
```

---

### 2.2 Array

- Arrays are used to store multiple values in a single variable.
- They are a special type of object in JavaScript.

#### Example:

```js
let colors = ['red', 'green', 'blue'];
console.log(colors[0]);  // Output: red
```

#### Array Methods:

```js
colors.push('yellow');      // Adds 'yellow' to the end
let firstColor = colors.shift();  // Removes the first element
```

---

### 2.3 Function

- Functions are reusable blocks of code that can take inputs (parameters) and return outputs.
- Functions themselves are objects in JavaScript.

#### Example:

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Mahmoud'));  // Output: Hello, Mahmoud!
```

---

## 3. Dynamic Typing in JavaScript

JavaScript is a **dynamically typed** language, meaning the type of a variable is determined at runtime and can change.

#### Example:

```js
let data = 42;         // Initially a Number
data = 'Hello';        // Now a String
```

---

## 4. Checking Data Types

To check the data type of a variable, use the `typeof` operator.

#### Example:

```js
let name = "Mahmoud";
let age = 26;
let isStudent = false;

console.log(typeof name);      // Output: string
console.log(typeof age);       // Output: number
console.log(typeof isStudent); // Output: boolean
```

### Special Cases with `typeof`:
- `typeof null` returns `"object"`, which is considered a **bug** in JavaScript.
- `typeof NaN` returns `"number"`, even though `NaN` stands for **Not-a-Number**.

---

## Summary of Data Types in JavaScript

| Primitive Types       | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| `Number`              | Represents numeric values.                                    |
| `String`              | Represents text (character sequences).                        |
| `Boolean`             | Represents `true` or `false`.                                 |
| `Undefined`           | A variable that has been declared but not assigned a value.   |
| `Null`                | Represents no value (intentional absence).                    |
| `Symbol`              | Represents a unique, immutable value (ES6).                   |
| `BigInt`              | Represents large integers (ES11).                             |

| Non-Primitive Types   | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| `Object`              | Represents a collection of key-value pairs.                   |
| `Array`               | Represents an ordered collection of values.                   |
| `Function`            | Represents reusable blocks of code.                           |

Understanding these types helps in writing clean and efficient JavaScript code, enabling dynamic behavior and structure in web applications.