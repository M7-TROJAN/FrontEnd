
# مفهوم Hoisting في JavaScript
ال **Hoisting** او "الرفع" في جافا سكريبت هو مفهوم بيشير للطريقة الي ال "JavaScript engine" بيتعامل بيهاا مع التصريحات "ال (declarations)" داخل الكود قبل ما ينفذ الكود فعليًا.

## مثال توضيحي:

لنفترض عندنا البرنامج التالي:

```js
console.log("Hello, Mahmoud");
console.log("Hello, world");
// another line of code;
// another line of code;
var x = 10;
// another line of code;
let y = 4;
```

قبل تنفيذ الكود، JavaScript بتعمل **hoisting** للتصريحات اللي بتستخدام `var` و `let` بترفع ال (declaration) بتاعهم لفوق خالص . يعني JavaScript بتتعامل كأن الكود مكتوب بالشكل ده:

```js
var x; // Hoisting happens here
let y; // Hoisting happens here
console.log("Hello, Mahmoud");
console.log("Hello, world);
// another line of code;
// another line of code;
x = 10; // x gets assigned the value 10
// another line of code;
y = 4; // y gets assigned the value 4
```

## ملاحظات مهمة:

### 1. تعامل ال Hoisting مع `var`

في حالة `var`، بيتم رفع المتغير لكن بدون القيمة بتاعته. يعني لو حاولت تطبع قيمة `x` قبل ما تعين لها قيمة، هتلاقيها `undefined`.

#### مثال:

```js
console.log(x); // undefined
var x = 10;
```

### 2. Hoisting مع `let` و `const`
بالنسبة لـ `let` و `const`، بيتم رفع التصريح لكن بتفضل المتغيرات في حاجة اسمها "Temporal Dead Zone" لحد ما يوصل التنفيذ لسطر التعريف الفعلي. لو حاولت تستخدم المتغير قبل ما يتم تعيينه، هيحصل خطأ.

#### مثال:

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 4;
```

### 3. Hoisting مع الدوال
بالنسبة للدوال (functions)، بيتم رفع التصريح والتعريف بتاعهم بالكامل لفوق، فممكن تنادي الدالة قبل ما تكتبها في الكود.

#### مثال:

```js
sayHello(); // This works fine
function sayHello() {
   console.log("Hello!");
}
```

## الخلاصة:
- مع `var`، بيتم رفع المتغير لكن بدون تعيين القيمة، وبيكون `undefined` لحد ما تعين له قيمة.
- مع `let` و `const`، بيتم رفع التصريح لكن بيكون في "Temporal Dead Zone"، ولو حاولت تستخدمهم قبل التعيين هيظهر خطأ.
- الدوال بتترفع بالكامل (التصريح والتعريف)، فممكن تنادي الدالة قبل ما تكتبها.

الهوستينج ممكن يسبب سلوك غير متوقع في الكود، عشان كده بنفضل استخدام `let` و `const` لتجنب المشاكل المحتملة مع `var`.
