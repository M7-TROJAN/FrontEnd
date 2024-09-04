### Lesson: CSS `animation`

خاصية CSS Animation تسمح لمطوري الويب بإنشاء حركات ديناميكية لعناصر الواجهة باستخدام CSS. تستخدم هذه الخاصية مفهوم الإطارات الرئيسية (Keyframes) لتحديد التغييرات في الخصائص الواجهة، مثل اللون والحجم والموضع والشفافية وغيرها، عبر فترة زمنية محددة.

يمكن تحديد عدة خصائص في خاصية CSS Animation، بما في ذلك:

animation-name: تحدد اسم الحركة التي تريد تطبيقها.
animation-duration: تحدد مدة الحركة بالثواني أو الأجزاء العشرية من الثانية.
animation-timing-function: تحدد الطريقة التي يتم فيها تشغيل الحركة، مثل الانتقال السلس أو الانتقال التدريجي أو التأخير.
animation-delay: تحدد تأخير بدء الحركة.
animation-iteration-count: تحدد عدد مرات تكرار الحركة.
animation-direction: تحدد اتجاه حركة العنصر، مثل الانتقال من اليمين إلى اليسار أو العكس.
animation-fill-mode: تحدد ماذا يحدث قبل وبعد تشغيل الحركة، مثل تطبيق الحركة على العنصر قبل بدء التشغيل.
animation-play-state: تحدد ما إذا كانت الحركة تعمل أو متوقفة.


CSS `animation` allows you to animate the properties of an element over time, creating engaging and dynamic effects. Unlike `transition`, which animates changes between states, `animation` gives you full control over keyframes, timing, and the entire animation cycle.

### **Key Properties of `animation`:**
1. **`@keyframes`**: Defines the sequence of steps in the animation.
2. **`animation-name`**: Specifies the name of the keyframes to use.
3. **`animation-duration`**: Defines the duration of the animation (e.g., in seconds or milliseconds).
4. **`animation-timing-function`**: Specifies the speed curve of the animation.
5. **`animation-delay`**: Sets a delay before the animation starts.
6. **`animation-iteration-count`**: Defines how many times the animation should play (e.g., `infinite` for continuous play).
7. **`animation-direction`**: Specifies whether the animation should play in reverse on alternate cycles.
8. **`animation-fill-mode`**: Determines the state of the element before and after the animation.
9. **`animation-play-state`**: Allows you to pause and resume the animation.

### **Basic Structure of CSS Animation:**
1. Define the animation using `@keyframes`.
2. Apply the animation to an element using the animation properties.

### **Example 1: Simple Animation**

#### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

#### **CSS:**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    animation: moveBox 2s ease-in-out infinite;
}

/* Defining the keyframes */
@keyframes moveBox {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(200px);
    }
    100% {
        transform: translateX(0);
    }
}
```

##### **Explanation:**
- **`@keyframes moveBox`**: Defines the animation sequence. The element moves horizontally from `0` to `200px` and then back to `0`.
- **`animation: moveBox 2s ease-in-out infinite;`**: The animation named `moveBox` runs for `2 seconds` with an `ease-in-out` timing function, and it repeats infinitely.

---

### **Example 2: Multi-Step Animation**

You can animate multiple properties and add more steps in the animation.

#### **CSS:**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    animation: changeBox 4s linear infinite;
}

@keyframes changeBox {
    0% {
        transform: translateX(0);
        background-color: lightblue;
    }
    25% {
        transform: translateX(100px);
        background-color: lightgreen;
    }
    50% {
        transform: translateX(200px);
        background-color: lightcoral;
    }
    75% {
        transform: translateX(100px);
        background-color: lightyellow;
    }
    100% {
        transform: translateX(0);
        background-color: lightblue;
    }
}
```

##### **Explanation:**
- This animation has four steps (`0%`, `25%`, `50%`, `75%`, `100%`), each changing both the position and background color of the `.box`.
- The animation runs in a `linear` fashion and repeats infinitely.

---

### **Example 3: Controlling Animation Direction and Iteration Count**

You can control how many times the animation runs and whether it reverses direction.

#### **CSS:**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    animation: bounceBox 3s ease-in-out 3 alternate;
}

@keyframes bounceBox {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-150px);
    }
    100% {
        transform: translateY(0);
    }
}
```

##### **Explanation:**
- **`animation: bounceBox 3s ease-in-out 3 alternate;`**: The animation runs for `3 seconds`, repeats `3 times`, and alternates direction (bouncing back and forth).
- The element moves up and down like a bouncing ball.

---

### **Example 4: Using `animation-fill-mode`**

`animation-fill-mode` determines the styles applied before and after the animation. 

#### **CSS:**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    animation: growBox 3s forwards;
}

@keyframes growBox {
    0% {
        width: 100px;
        height: 100px;
    }
    100% {
        width: 200px;
        height: 200px;
    }
}
```

##### **Explanation:**
- **`animation-fill-mode: forwards;`**: After the animation completes, the element retains the final state (i.e., stays at `200px` width and height).

---

### **Example 5: Pausing and Resuming Animation**

You can pause and resume animations using `animation-play-state`.

#### **CSS:**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    animation: rotateBox 5s linear infinite;
    animation-play-state: paused; /* Initially paused */
}

.box:hover {
    animation-play-state: running; /* Start on hover */
}

@keyframes rotateBox {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

##### **Explanation:**
- **`animation-play-state: paused;`**: The animation is paused by default.
- When the user hovers over the `.box`, the animation starts (rotating the box).

---

### **Animation Shorthand**

You can combine all the animation properties into a single shorthand:

```css
animation: animation-name duration timing-function delay iteration-count direction fill-mode play-state;
```

For example:
```css
animation: rotateBox 2s ease-in-out 1s infinite alternate forwards;
```

### **Use Cases**
- **Loading Indicators**: Animating spinners or progress bars.
- **Interactive Elements**: Enhancing buttons, menus, and dropdowns with animated effects.
- **Page Transitions**: Creating smooth transitions between sections or pages.
- **Visual Feedback**: Highlighting changes in content, such as error messages or success indicators.