# Hoisting in JavaScript

---

## 1. What is Hoisting?

**Hoisting** is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") to the top of their containing scope before the code is executed. This means that you can use variables and functions before you declare them.

However, only the declarations are hoisted, not the initializations.

---

## 2. Hoisting of Variables

In JavaScript, variables declared with `var` are hoisted to the top of their function or global scope. However, the **initial value** (if any) is not hoisted.

### Example 1: Hoisting with `var`

```js
console.log(x);  // Output: undefined
var x = 5;
console.log(x);  // Output: 5
```

- In this example, the declaration of `x` is hoisted, but the initialization (`x = 5`) is not.
- The variable `x` is defined at the top with a default value of `undefined` until it is assigned a value later in the code.

### Example 2: Without Hoisting

The above example is equivalent to this:

```js
var x;
console.log(x);  // Output: undefined
x = 5;
console.log(x);  // Output: 5
```

---

## 3. Hoisting and `let`/`const`

Variables declared with `let` and `const` are also hoisted, but they are not initialized until their definition in the code is reached. This results in a **temporal dead zone** (TDZ), where any reference to the variable before its declaration throws a `ReferenceError`.

### Example 3: Hoisting with `let`

```js
console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

Here:
- The `y` variable is hoisted but remains uninitialized, which causes a `ReferenceError` when accessed before the declaration.

### Example 4: Hoisting with `const`

```js
console.log(z);  // ReferenceError: Cannot access 'z' before initialization
const z = 20;
```

Similar to `let`, variables declared with `const` are hoisted but remain in the TDZ until the line of declaration.

---

## 4. Hoisting of Functions

Function **declarations** are fully hoisted, meaning both the function definition and body are moved to the top of the scope. As a result, you can call a function even before you declare it in the code.

### Example 5: Hoisting of Function Declarations

```js
greet();  // Output: "Hello, World!"

function greet() {
    console.log("Hello, World!");
}
```

In this case:
- The entire `greet` function is hoisted, so you can call it before its declaration.

### Example 6: Hoisting of Function Expressions

Function **expressions**, however, are not hoisted in the same way. Only the variable declaration is hoisted, but the function itself is not.

```js
console.log(sayHello);  // Output: undefined
sayHello();  // TypeError: sayHello is not a function

var sayHello = function() {
    console.log("Hello!");
};
```

Here:
- The variable `sayHello` is hoisted and initialized as `undefined`, which is why attempting to call it results in a `TypeError`.

---

## 5. Hoisting with Arrow Functions

Arrow functions are treated the same as function expressions in terms of hoisting. The variable containing the arrow function is hoisted, but the function itself is not.

### Example 7: Hoisting of Arrow Functions

```js
console.log(add);  // Output: undefined
add(2, 3);  // TypeError: add is not a function

var add = (a, b) => a + b;
```

In this example:
- The variable `add` is hoisted but is set to `undefined` until the arrow function is defined.

---

## 6. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period between the start of the block scope (or function scope) and the point where the variable is declared. Accessing a variable in this zone will throw a `ReferenceError`.

Variables declared with `let` and `const` are in the TDZ until they are initialized, unlike `var`, which gets initialized with `undefined`.

### Example 8: Temporal Dead Zone with `let`

```js
console.log(a);  // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

Here, `a` is in the TDZ until the point where `let a = 5` is reached.

---

## 7. Conclusion

- **Hoisting** allows variable and function declarations to be used before they are declared in the code.
- **`var`** is hoisted and initialized as `undefined`.
- **`let` and `const`** are hoisted but are not initialized, leading to the **temporal dead zone** until they are assigned a value.
- **Function declarations** are fully hoisted, but **function expressions** and **arrow functions** are treated like regular variables and are only available after the assignment.

Understanding hoisting helps avoid potential issues and unexpected behavior in JavaScript, especially when working with variables and functions declared in different scopes.