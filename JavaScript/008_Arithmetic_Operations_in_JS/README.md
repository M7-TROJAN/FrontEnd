# Arithmetic Operations in JavaScript

Arithmetic operations in JavaScript are used to perform basic mathematical calculations, such as addition, subtraction, multiplication, division, and more. JavaScript provides a set of arithmetic operators that allow developers to work with numbers easily.

---

## 1. Basic Arithmetic Operators

Here are the core arithmetic operators in JavaScript:

| Operator | Operation       | Example          | Result  |
|----------|-----------------|------------------|---------|
| `+`      | Addition         | `5 + 2`          | `7`     |
| `-`      | Subtraction      | `5 - 2`          | `3`     |
| `*`      | Multiplication   | `5 * 2`          | `10`    |
| `/`      | Division         | `5 / 2`          | `2.5`   |
| `%`      | Modulus (Remainder)| `5 % 2`        | `1`     |
| `**`     | Exponentiation (ES6) | `5 ** 2`    | `25`    |

---

## 2. Addition (`+`)

The `+` operator adds two numbers together. If you use `+` with strings, it will perform **concatenation** instead of addition.

### Example:

```js
let x = 5;
let y = 3;
let sum = x + y;
console.log(sum);  // Output: 8
```

---

## 3. Subtraction (`-`)

The `-` operator subtracts one number from another.

### Example:

```js
let x = 5;
let y = 3;
let difference = x - y;
console.log(difference);  // Output: 2
```

---

## 4. Multiplication (`*`)

The `*` operator multiplies two numbers.

### Example:

```js
let x = 5;
let y = 3;
let product = x * y;
console.log(product);  // Output: 15
```

---

## 5. Division (`/`)

The `/` operator divides one number by another. Division of integers will return a floating-point number if the result isn't an integer.

### Example:

```js
let x = 5;
let y = 2;
let quotient = x / y;
console.log(quotient);  // Output: 2.5
```

---

## 6. Modulus (`%`)

The `%` operator returns the **remainder** when one number is divided by another. It's often used to check for even/odd numbers or to cycle through values.

### Example:

```js
let x = 5;
let y = 2;
let remainder = x % y;
console.log(remainder);  // Output: 1
```

#### Checking for Even/Odd Numbers:

```js
let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// Output: Odd
```

---

## 7. Exponentiation (`**`)

The `**` operator, introduced in ES6, raises the first operand to the power of the second operand (exponentiation).

### Example:

```js
let base = 5;
let exponent = 2;
let result = base ** exponent;
console.log(result);  // Output: 25
```

---

## 8. Arithmetic Expressions

You can combine multiple arithmetic operations in a single expression. Just like in mathematics, **order of operations** (also known as **PEMDAS/BODMAS**) applies:
1. **Parentheses** first
2. **Exponentiation**
3. **Multiplication** and **Division**
4. **Addition** and **Subtraction**

### Example:

```js
let result = 5 + 3 * 2;
console.log(result);  // Output: 11

let resultWithParentheses = (5 + 3) * 2;
console.log(resultWithParentheses);  // Output: 16
```

In the first example, multiplication is performed first, followed by addition. In the second example, parentheses change the order of operations, causing the addition to happen before multiplication.

---

## 9. Increment (`++`) and Decrement (`--`)

JavaScript provides special operators to increment or decrement a value by 1.

### 9.1 Increment (`++`)

- **Pre-increment**: Increases the value by 1 **before** returning the value.
- **Post-increment**: Increases the value by 1 **after** returning the value.

#### Example:

```js
let x = 5;
console.log(++x);  // Output: 6 (pre-increment)
console.log(x++);  // Output: 6 (post-increment, value becomes 7 after)
console.log(x);    // Output: 7
```

### 9.2 Decrement (`--`)

- **Pre-decrement**: Decreases the value by 1 **before** returning the value.
- **Post-decrement**: Decreases the value by 1 **after** returning the value.

#### Example:

```js
let x = 5;
console.log(--x);  // Output: 4 (pre-decrement)
console.log(x--);  // Output: 4 (post-decrement, value becomes 3 after)
console.log(x);    // Output: 3
```

---

## 10. Compound Assignment Operators

JavaScript provides **compound assignment operators** that combine an arithmetic operation with assignment. They include:

| Operator | Description                  | Example  | Equivalent To     |
|----------|------------------------------|----------|-------------------|
| `+=`     | Addition assignment           | `x += 3` | `x = x + 3`       |
| `-=`     | Subtraction assignment        | `x -= 3` | `x = x - 3`       |
| `*=`     | Multiplication assignment     | `x *= 3` | `x = x * 3`       |
| `/=`     | Division assignment           | `x /= 3` | `x = x / 3`       |
| `%=`     | Modulus assignment            | `x %= 3` | `x = x % 3`       |
| `**=`    | Exponentiation assignment     | `x **= 3`| `x = x ** 3`      |

### Example:

```js
let x = 10;
x += 5;  // x = x + 5
console.log(x);  // Output: 15

x *= 2;  // x = x * 2
console.log(x);  // Output: 30
```

---

## 11. Practical Examples

### Example 1: Calculating the Area of a Circle

```js
const radius = 5;
const pi = 3.14159;
const area = pi * (radius ** 2);

console.log(`The area of the circle is ${area}.`);
// Output: The area of the circle is 78.53975.
```

### Example 2: Incrementing a Counter

```js
let counter = 0;
counter++;  // Increment by 1
console.log(counter);  // Output: 1

counter += 5;  // Increment by 5
console.log(counter);  // Output: 6
```

---

## Summary of Arithmetic Operations

| Operator | Description       | Example          | Output  |
|----------|-------------------|------------------|---------|
| `+`      | Addition           | `5 + 2`          | `7`     |
| `-`      | Subtraction        | `5 - 2`          | `3`     |
| `*`      | Multiplication     | `5 * 2`          | `10`    |
| `/`      | Division           | `5 / 2`          | `2.5`   |
| `%`      | Modulus (Remainder)| `5 % 2`          | `1`     |
| `**`     | Exponentiation     | `5 ** 2`         | `25`    |

JavaScript provides a powerful and flexible set of arithmetic operators for performing calculations. Understanding how to use these operators, along with increment, decrement, and compound assignments, is essential for effective mathematical operations in your code.