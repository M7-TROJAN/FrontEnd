
# وحدة تخطيط Flexbox في CSS

يُعد Flexbox (Flexible Box) أحد أهم أدوات CSS التي تُستخدم لتحسين تصميم وترتيب العناصر داخل صفحات الويب. يعمل Flexbox على توزيع العناصر بطريقة مرنة ومتجاوبة، مما يجعل تصميم الواجهات أكثر سهولة ومرونة.

## ماذا كنا نستخدم قبل Flexbox؟

قبل ظهور Flexbox، كنا نستخدم عدة أدوات لتنظيم العناصر داخل الصفحات، مثل:

- **Block**: تُستخدم لتقسيم الأقسام المختلفة في الموقع.
- **Inline**: تُستخدم لعرض العناصر بجوار بعضها داخل النص.
- **Table**: تُستخدم لتنظيم البيانات في هيكلية شبيهة بالجداول.
- **Positioned**: تُستخدم للتحكم في مواقع العناصر بشكل دقيق باستخدام الخصائص `absolute` و `relative`.

## ما هي خاصية Flexbox في CSS؟

خاصية Flexbox تُستخدم لتوزيع العناصر داخل العنصر الأب بشكل مرن، حيث تمكّن المصممين من إنشاء تخطيطات متجاوبة تتكيف مع مختلف أحجام الشاشات.

تتضمن Flexbox العديد من الخصائص المهمة التي تساعد على التحكم الكامل في توزيع العناصر:

- `display: flex;`: يحوّل العنصر الأب إلى عنصر مرن.
- `flex-direction: row/column;`: يحدد اتجاه توزيع العناصر (أفقي أو عمودي).
- `justify-content: center/flex-start/flex-end/space-between/space-around;`: يتحكم في توزيع العناصر على المحور الرئيسي (أفقي أو عمودي).
- `align-items: center/flex-start/flex-end/stretch/baseline;`: يتحكم في توزيع العناصر على المحور الثانوي (عمودي).
- `flex-wrap: wrap/nowrap;`: يحدد ما إذا كانت العناصر تلتف على عدة أسطر أو تبقى في سطر واحد.
- `flex-grow: number;`: يحدد مقدار التوسع الذي يمكن أن يملأه العنصر ضمن المساحة المتاحة.
- `flex-shrink: number;`: يتحكم في إمكانية تصغير حجم العنصر.
- `flex-basis: length;`: يحدد الحجم الأساسي للعنصر قبل توزيع المساحة المتبقية.

### مثال على استخدام Flexbox:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

## الفرق بين `display:flex` و `display:block`

- **display: block**: يجعل العنصر يشغل المساحة الكاملة في العرض ويعرض العناصر بشكل عمودي.
- **display: flex**: يحوّل العنصر الأب إلى عنصر مرن بحيث يتم توزيع العناصر الداخلية بشكل مرن ومتجاوب.

### مثال توضيحي:

```css
/* استخدام display: block */
.container {
  display: block;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

/* استخدام display: flex */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin-right: 10px;
}
```

## شرح خاصية `flex-direction`

تحدد خاصية `flex-direction` اتجاه توزيع العناصر داخل العنصر الأب الذي يحتوي على `display: flex`.

القيم الممكنة:
- **row**: توزيع العناصر أفقياً من اليسار إلى اليمين (القيمة الافتراضية).
- **row-reverse**: توزيع العناصر أفقياً من اليمين إلى اليسار.
- **column**: توزيع العناصر عمودياً من الأعلى إلى الأسفل.
- **column-reverse**: توزيع العناصر عمودياً من الأسفل إلى الأعلى.

### مثال:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

## شرح خاصية `flex-wrap`

تحدد خاصية `flex-wrap` ما إذا كانت العناصر داخل العنصر الأب تلتف على عدة أسطر أو تبقى في سطر واحد.

القيم الممكنة:
- **nowrap**: تبقى العناصر في سطر واحد.
- **wrap**: تلتف العناصر على عدة أسطر.
- **wrap-reverse**: تلتف العناصر على عدة أسطر بترتيب عكسي.

### مثال:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

## شرح خاصية `align-items`

تحدد خاصية `align-items` توزيع العناصر داخل العنصر الأب على المحور العمودي.

القيم الممكنة:
- **stretch**: تمدد العناصر لملء المساحة المتاحة عمودياً (القيمة الافتراضية).
- **flex-start**: تحديد موضع العناصر في الأعلى.
- **flex-end**: تحديد موضع العناصر في الأسفل.
- **center**: تحديد موضع العناصر في المنتصف عمودياً.
- **baseline**: تحديد موضع العناصر بناءً على خط الأساس الخاص بالنص.

### مثال:

```css
.container {
  display: flex;
  align-items: center;
}
```

## شرح خاصية `justify-content`

تحدد خاصية `justify-content` توزيع العناصر داخل العنصر الأب على المحور الأفقي.

القيم الممكنة:
- **flex-start**: تحديد موضع العناصر في البداية (اليسار).
- **flex-end**: تحديد موضع العناصر في النهاية (اليمين).
- **center**: تحديد موضع العناصر في المنتصف أفقياً.
- **space-between**: توزيع العناصر بمسافات متساوية بين كل عنصر وآخر.
- **space-around**: توزيع العناصر بمسافات متساوية حول العناصر.

### مثال:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

## شرح خاصية `align-self`

تحدد خاصية `align-self` توزيع عنصر محدد داخل العنصر الأب بشكل مستقل عن توزيع باقي العناصر.

القيم الممكنة:
- **auto**: تعتمد على قيمة `align-items` للعنصر الأب.
- **stretch**: تمدد العنصر لملء المساحة المتاحة عمودياً.
- **flex-start**: تحديد موضع العنصر في الأعلى.
- **flex-end**: تحديد موضع العنصر في الأسفل.
- **center**: تحديد موضع العنصر في المنتصف عمودياً.
- **baseline**: تحديد موضع العنصر بناءً على خط الأساس الخاص بالنص.

### مثال:

```css
.item {
  align-self: center;
}
```

## شرح خاصية `flex-grow`

تحدد خاصية `flex-grow` قدرة العنصر الفرعي على التوسع داخل العنصر الأب، حيث يشير الرقم المحدد إلى نسبة التوسع مقارنةً بالعناصر الأخرى.

### مثال:

```css
.item {
  flex-grow: 2;
}
```

## شرح خاصية `flex-basis`

تحدد خاصية `flex-basis` الحجم الأولي للعنصر قبل تطبيق خصائص `flex-grow` و `flex-shrink`.

### مثال:

```css
.item {
  flex-basis: 200px;
}
```

## شرح خاصية `order`

تحدد خاصية `order` ترتيب العنصر الفرعي داخل العنصر الأب. القيمة الافتراضية هي `0`، ويمكن تغيير ترتيب العناصر بزيادة أو تقليل هذه القيمة.

### مثال:

```css
.item {
  order: 1;
}
```

--- 

---

# CSS Flexbox Layout Module

Flexbox, short for Flexible Box Layout, is a CSS layout module that allows you to design more efficient and flexible layouts. It makes it easier to align and distribute space among items in a container, even when the size of the container is unknown or dynamic.

## What Did We Use Before Flexbox?

Before Flexbox, developers used different methods to layout items:

- **Block**: Elements were arranged vertically in a block.
- **Inline**: Elements were placed next to each other in a line.
- **Table**: Tables were used to create grid-like layouts.
- **Positioned**: Absolute or relative positioning was used to place elements at specific locations.

## What Is Flexbox in CSS?

Flexbox is used to distribute space and align items inside a container (called a flex container). The goal is to create flexible, responsive layouts without using floats or positioning.

### Key Flexbox Properties:

- `display: flex;`: Turns the container into a flex container.
- `flex-direction: row/column;`: Specifies the direction of the items inside the container (horizontal or vertical).
- `justify-content: center/flex-start/flex-end/space-between/space-around;`: Aligns items along the main axis (horizontally or vertically).
- `align-items: center/flex-start/flex-end/stretch/baseline;`: Aligns items along the cross axis (opposite to the main axis).
- `flex-wrap: wrap/nowrap;`: Controls whether items should wrap to the next line if they don’t fit in one line.
- `flex-grow: number;`: Controls how much an item will grow relative to other items.
- `flex-shrink: number;`: Controls how much an item will shrink relative to other items.
- `flex-basis: length;`: Defines the initial size of an item before any space is distributed.

### Example of Flexbox:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

## The Difference Between `display:flex` and `display:block`

- **display: block**: The element takes up the full width available, and elements are stacked vertically.
- **display: flex**: The parent element becomes a flex container, and its child elements are arranged flexibly within it.

### Example:

```css
/* Using display: block */
.container {
  display: block;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

/* Using display: flex */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin-right: 10px;
}
```

## Understanding `flex-direction`

The `flex-direction` property determines the direction in which the flex container’s items are arranged.

Possible values:
- **row**: Items are arranged in a horizontal line from left to right (default).
- **row-reverse**: Items are arranged in a horizontal line from right to left.
- **column**: Items are arranged in a vertical column from top to bottom.
- **column-reverse**: Items are arranged in a vertical column from bottom to top.

### Example:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

## Understanding `flex-wrap`

The `flex-wrap` property controls whether flex items are forced onto one line or can wrap onto multiple lines.

Possible values:
- **nowrap**: Items are kept on a single line.
- **wrap**: Items wrap onto multiple lines.
- **wrap-reverse**: Items wrap onto multiple lines in reverse order.

### Example:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

## Understanding `align-items`

The `align-items` property aligns items along the cross axis (vertical axis if `flex-direction` is `row`, or horizontal axis if `flex-direction` is `column`).

Possible values:
- **stretch**: Items stretch to fill the container (default).
- **flex-start**: Items are aligned at the start of the container.
- **flex-end**: Items are aligned at the end of the container.
- **center**: Items are centered along the cross axis.
- **baseline**: Items are aligned based on their text baseline.

### Example:

```css
.container {
  display: flex;
  align-items: center;
}
```

## Understanding `justify-content`

The `justify-content` property aligns items along the main axis (horizontal axis if `flex-direction` is `row`, or vertical axis if `flex-direction` is `column`).

Possible values:
- **flex-start**: Items are packed at the start of the container.
- **flex-end**: Items are packed at the end of the container.
- **center**: Items are centered along the main axis.
- **space-between**: Items are spaced evenly with the first item at the start and the last item at the end.
- **space-around**: Items are spaced evenly with equal space around them.

### Example:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

## Understanding `align-self`

The `align-self` property allows a single item to override the `align-items` property and control its alignment on the cross axis.

Possible values:
- **auto**: Inherits the value of `align-items` from the parent container.
- **stretch**: Stretches to fill the container.
- **flex-start**: Aligns the item at the start.
- **flex-end**: Aligns the item at the end.
- **center**: Aligns the item in the center.
- **baseline**: Aligns the item based on its baseline.

### Example:

```css
.item {
  align-self: center;
}
```

## Understanding `flex-grow`

The `flex-grow` property specifies how much a flex item will grow relative to the other flex items. A higher number means the item will take up more space.

### Example:

```css
.item {
  flex-grow: 2;
}
```

## Understanding `flex-basis`

The `flex-basis` property sets the initial size of the flex item before space distribution. It acts as the base size for the item.

### Example:

```css
.item {
  flex-basis: 200px;
}
```

## Understanding `order`

The `order` property controls the order in which flex items are displayed in the flex container. By default, all items have an `order` value of 0, but you can change this to reorder items.

### Example:

```css
.item {
  order: 1;
}
```