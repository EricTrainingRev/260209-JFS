# CSS Quick Reference Guide

## CSS Overview

CSS (Cascading Style Sheets) is the standard language for styling and visually organizing web pages. By separating content (HTML) from presentation (CSS), it enables teams to build attractive, maintainable, and consistent user interfaces across projects.

**Key benefits include:**
- **Separation of concerns:** CSS keeps design and layout logic out of your HTML, making both easier to manage and update.
- **Reusability:** Styles can be shared across multiple pages or projects, promoting consistency and reducing duplication.
- **Flexibility:** CSS offers a wide range of selectors and properties, allowing for precise control over the look and feel of your site.
- **Responsiveness:** With features like media queries and flexible units, CSS helps your site adapt to any device or screen size.
- **Broad support:** All modern browsers support CSS, ensuring your designs reach the widest possible audience.

CSS is foundational for web development, providing the tools to create visually engaging, user-friendly experiences.

```css
/* Simple CSS example */
p {
	color: blue;
}
```

---

## CSS Box Model

The CSS box model is a foundational concept that describes how every element on a web page is visually structured and spaced.

**Key benefits include:**
- **Predictable layouts:** By clarifying how content, padding, borders, and margins interact, the box model helps you avoid unexpected spacing issues.
- **Fine-grained control:** Developers can adjust each part of the box (content, padding, border, margin) independently to achieve precise alignment and spacing.
- **Consistency:** A clear mental model for element sizing and spacing leads to more maintainable and consistent designs.

Every element is rendered as a rectangular box, composed of the following parts:
- **Content:** The actual text, image, or other media inside the element.
- **Padding:** The space between the content and the border.
- **Border:** The line surrounding the padding and content.
- **Margin:** The space outside the border, separating the element from others.

```css
div {
	margin: 10px;
	padding: 20px;
	border: 1px solid #333;
}
```

---

## CSS Properties

CSS properties define the specific visual aspects of HTML elements you want to control. 

**Key benefits include:**
- **Customization:** Properties let you tailor colors, spacing, typography, and layout to fit your design requirements.
- **Consistency:** By reusing property values (and leveraging variables), you can maintain a unified look and feel across your site.
- **Efficiency:** Understanding core properties helps you quickly implement and adjust styles as project needs evolve.

Common examples:
- `color`: Text color
- `background-color`: Background color
- `font-size`: Size of text
- `margin`, `padding`, `border`: Spacing and borders
- `width`, `height`: Size of elements

```css
body {
	background-color: #f0f0f0;
	font-size: 16px;
}
```

---

## Responsive Web Design

Responsive web design is the practice of building web pages that look and function well on any device, from large desktop monitors to small mobile screens. It ensures a seamless user experience regardless of screen size or orientation.

**Key benefits include:**
- **Device independence:** Your site adapts to desktops, tablets, and smartphones without separate codebases.
- **Improved usability:** Layouts, text, and images remain readable and accessible on all devices.
- **Future-proofing:** Responsive techniques help your site handle new devices and screen sizes as they emerge.

Responsive design is achieved through:
- **Flexible layouts:** Use relative units (`em`, `rem`, `%`, `vw`, `vh`) instead of fixed pixels for sizing and spacing.
- **Media queries:** Apply different styles based on device characteristics like width or orientation.
- **Flexible images and media:** Set images and videos to scale within their containers.
- **Modern layout tools:** CSS Flexbox and Grid simplify building adaptive, fluid layouts.

```css
.container {
	display: flex;
	gap: 2rem;
	padding: 2vw;
}

h1 {
	font-size: 2.5rem;
}

.sidebar {
	width: 30%;
	min-width: 200px;
}

img {
	max-width: 100%;
	height: auto;
}
```

---

## Inline, Internal, and External Styling

There are three primary ways to add CSS to your HTML, each suited to different scenarios and project sizes:

**Key benefits include:**
- **Flexibility:** Choose the approach that best fits your workflow, from quick prototypes to large-scale applications.
- **Separation of concerns:** External and internal styles help keep your HTML clean and your styles organized.
- **Maintainability:** External stylesheets make it easier to update and reuse styles across multiple pages.

**Approaches:**
- **Inline:** Add styles directly to an element using the `style` attribute. Useful for quick tests or one-off overrides, but not recommended for maintainable code.
- **Internal:** Place CSS rules inside a `<style>` tag within the HTML `<head>`. Good for single-page projects or when styles are tightly coupled to a specific page.
- **External:** Store CSS in a separate `.css` file and link it to your HTML. This is the best practice for most projects, supporting reuse and easier maintenance.

```html
<!-- Inline -->
<p style="color: green;">Inline style</p>

<!-- Internal -->
<style>
	p { color: purple; }
</style>

<!-- External -->
<link rel="stylesheet" href="styles.css">
```

---

## Class and ID Selectors

Class and ID selectors are essential tools for targeting specific elements in your HTML, enabling you to apply styles precisely where needed.

**Key benefits include:**
- **Reusability:** Classes can be applied to multiple elements, making it easy to share styles across your site.
- **Specificity:** IDs allow you to target a single, unique element for custom styling or layout adjustments.
- **Organization:** Using meaningful class and ID names helps keep your stylesheets organized and your intent clear.

**Usage:**
- `.class`: Selects all elements with the specified class attribute.
- `#id`: Selects the single element with the specified ID attribute.

```css
.highlight {
	background: yellow;
}
#main {
	border: 2px solid blue;
}
```

---

## Sibling Selectors

Sibling selectors allow you to target elements that share the same parent, enabling more dynamic and contextual styling based on document structure.

**Key benefits include:**
- **Context-aware styling:** Apply styles to elements only when they appear after or next to specific siblings.
- **Cleaner markup:** Reduce the need for extra classes or IDs by leveraging document relationships.
- **Enhanced flexibility:** Useful for styling lists, forms, or any repeated structures where order matters.

**Usage:**
- `element + element`: Adjacent sibling selector: targets the first element immediately following another.
- `element ~ element`: General sibling selector: targets all elements that follow a specified sibling.

```css
h2 + p {
	color: orange;
}
h2 ~ p {
	color: teal;
}
```

---

## Element Selectors

Element selectors target all elements of a given type.

```css
h1 {
	color: red;
}
ul {
	list-style: none;
}
```

---

## Advanced Selectors

Advanced selectors provide powerful ways to target elements based on combinations of classes, types, relationships, and more. They help you write concise, expressive CSS for complex layouts and interactions.

**Key benefits include:**
- **Precision:** Target exactly the elements you want, even in deeply nested or complex structures.
- **Efficiency:** Reduce the need for extra classes or markup by leveraging relationships and grouping.
- **Maintainability:** Cleaner, more expressive selectors make your stylesheets easier to read and update.

**Common advanced selectors:**
- `element.class`: Targets elements of a specific type with a given class.
- `element, element`: Groups multiple selectors to apply the same styles.
- `element element`: Descendant selector—targets elements nested anywhere inside another.
- `element > element`: Child selector—targets direct children only.
- `*`: Universal selector—targets all elements.

```css
p.note {
	font-style: italic;
}
h2, h3 {
	margin-bottom: 0.5em;
}
nav ul {
	list-style: none;
}
ul > li {
	padding: 4px;
}
* {
	box-sizing: border-box;
}
```

---

## Animations

CSS animations enable you to create smooth, engaging transitions and effects by changing property values over time. They help bring interfaces to life and guide user attention in a subtle, professional way.

**Key benefits include:**
- **Enhanced user experience:** Animations can make interfaces feel more responsive and intuitive.
- **Visual feedback:** Use animations to indicate state changes, loading, or interactions.
- **No JavaScript required:** Many effects can be achieved purely with CSS, simplifying your codebase.

**How it works:**
- Define keyframes with `@keyframes` to specify the animation steps.
- Apply the animation to elements using the `animation` property.

```css
/* Defines the animation sequence named 'fadeIn'.
   The animation will transition the element's opacity from 0 (invisible) to 1 (fully visible). */
@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}

/* The .fade-in class applies the 'fadeIn' animation to any element it's added to.
   - 'fadeIn' refers to the keyframes defined above.
   - '2s' sets the duration of the animation to 2 seconds.
   - 'ease-in' specifies the timing function for a smooth start. */
.fade-in {
	animation: fadeIn 2s ease-in;
}

/* Usage: Add the 'fade-in' class to an element in your HTML to animate its appearance. */
```

---

## Flexbox

Flexbox is a modern CSS layout model designed to efficiently arrange, align, and distribute space among items in a container, even when their size is unknown or dynamic. It simplifies building responsive layouts and handling complex alignment scenarios.

**Key benefits include:**
- **Flexible layouts:** Easily create both horizontal and vertical layouts that adapt to different screen sizes.
- **Alignment control:** Align items along the main and cross axes with minimal code.
- **Space distribution:** Distribute space between, around, or within items, even when their sizes differ.
- **Order management:** Change the visual order of items without altering the HTML.

**How it works:**
- Set `display: flex` on a container to activate flexbox for its children.
- Use flex properties on the container and items to control direction, alignment, and sizing.

```css
.flex-container {
	display: flex; /* Activates flexbox layout for child elements */
	justify-content: space-between; /* Distributes items along the main axis with space between */
	align-items: center; /* Aligns items along the cross axis (vertically in a row) */
}
.flex-item {
	flex: 1; /* Allows items to grow and fill available space equally */
	margin: 10px; /* Adds spacing around each item */
}
```
flexbox generator: https://cssgenerator.dev/flexbox

---

## CSS Grid

CSS Grid is a powerful two-dimensional layout system that makes it easy to design complex, responsive grid-based layouts. It allows you to control both rows and columns, making it ideal for dashboards, galleries, and application layouts.

**Key benefits include:**
- **Two-dimensional control:** Manage layout in both rows and columns simultaneously.
- **Responsive design:** Easily adapt grid layouts to different screen sizes with media queries and flexible units.
- **Simplicity:** Reduce the need for floats, positioning, or complicated markup for advanced layouts.
- **Named areas:** Assign names to grid areas for more readable and maintainable code.

**How it works:**
- Set `display: grid` on a container to activate grid layout for its children.
- Define columns and rows using properties like `grid-template-columns` and `grid-template-rows`.
- Place items using line numbers, area names, or shorthand properties.

```css
.grid-container {
	display: grid; /* Activates grid layout for child elements */
	grid-template-columns: 1fr 2fr; /* Creates two columns: first takes 1 fraction, second takes 2 */
	gap: 20px; /* Adds space between grid items */
}
.grid-item {
	background: #eee;
	padding: 10px;
}
```
Grid generator: https://cssgridgenerator.io/

---

## CSS Variables

CSS variables (also called custom properties) let you store values in one place and reuse them throughout your stylesheet. This makes it easier to maintain consistent colors, spacing, and other design tokens across your project.

**Key benefits include:**
- **Centralized control:** Update a value in one place and have it reflected everywhere the variable is used.
- **Theming:** Quickly switch themes or color schemes by changing variable values.
- **Readability:** Use meaningful names for design values, making your CSS easier to understand and maintain.

**How it works:**
- Define variables inside a selector (commonly `:root` for global scope) using `--variable-name`.
- Use variables with the `var(--variable-name)` function.

```css
:root {
	--main-color: #3498db;   /* Define a primary color variable */
	--padding: 16px;         /* Define a padding variable */
}

.box {
	background: var(--main-color); /* Use the variable for background */
	padding: var(--padding);       /* Use the variable for padding */
}
```

---

## Media Queries

Media queries allow you to apply CSS rules based on device characteristics such as screen width, height, orientation, and more. They are essential for responsive design, ensuring your site looks great on any device.

**Key benefits include:**
- **Device adaptation:** Adjust layouts, font sizes, and other styles for different screens.
- **Progressive enhancement:** Provide optimal experiences for both mobile and desktop users.
- **Maintainability:** Keep all device-specific styles in one stylesheet, reducing duplication.

**How it works:**
- Use the `@media` rule to specify conditions (e.g., max-width) and provide alternate styles inside the block.

```css
@media (max-width: 600px) {
	body {
		background: lightgray; /* Changes background color on small screens */
	}
}
```