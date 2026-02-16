# HTML Quick Reference Guide

## HTML Overview

HTML (HyperText Markup Language) is the foundational language for building web pages and applications. It provides a standardized way to structure and present content on the web, using a system of markup tags to define elements such as text, images, links, and more.

Key benefits include:
- **Clear content structure:** HTML organizes information so browsers can display it consistently across devices.
- **Separation of concerns:** By focusing on structure, HTML works hand-in-hand with CSS for styling and JavaScript for interactivity.
- **Interactivity via the DOM:** Browsers convert HTML into the Document Object Model (DOM), a tree-like structure that JavaScript can use to dynamically update content, styles, and layout.
- **Universal compatibility:** HTML is supported by all modern browsers, making it the standard for web content delivery.

HTML’s straightforward syntax and universal support make it the starting point for any web project, whether you’re building a simple landing page or a complex web application.

---

## HTML Document Structure

Every HTML page follows a standard structure that ensures browsers interpret and display content correctly. Understanding this structure is essential for building reliable and maintainable web applications.

A minimal HTML document includes the following elements:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Heading</h1>
        <p>Paragraph text.</p>
    </body>
</html>
```

**Key components:**
- **`<!DOCTYPE html>`:** Declares the document as HTML5, ensuring consistent rendering across browsers.
- **`<html>`:** The root element that wraps all content on the page.
- **`<head>`:** Contains metadata, links to stylesheets, scripts, and the page title (not visible on the page itself).
- **`<body>`:** Holds all visible content, such as headings, paragraphs, images, and links.

This structure provides a solid foundation for any web page, making it easier to expand and maintain as your project grows.

---

## HTML Tags

HTML tags are the core building blocks for structuring content on a web page. Each tag defines a specific type of content or layout, helping browsers interpret and display information as intended.

**Types of tags:**
- **Paired tags:** Most elements use an opening and closing tag (e.g., `<p>...</p>`, `<div>...</div>`), wrapping the content they affect.
- **Self-closing (void) tags:** Some tags do not wrap content and are self-contained (e.g., `<img>`, `<br>`, `<hr>`, `<input>`).

Example usage:

```html
<div>
    <p>This is a paragraph inside a div.</p>
    <img src="logo.png" alt="Logo">
</div>
```

**Key points:**
- Tags are case-insensitive, but lowercase is standard.
- Proper nesting and closing of tags help ensure consistent rendering across browsers.
- Self-closing tags do not require a separate closing tag.

---

## Common Tags

A handful of HTML tags are used in nearly every web project. These tags help organize content, create navigation, display images, and build lists.

**Frequently used tags:**
- **Headings:** `<h1>` to `<h6>` define headings, with `<h1>` as the most important.
- **Paragraphs:** `<p>` wraps blocks of text.
- **Links:** `<a>` creates hyperlinks to other pages or resources.
- **Images:** `<img>` embeds images.
- **Lists:** `<ul>` (unordered), `<ol>` (ordered), and `<li>` (list item) organize content into lists.
- **Containers:** `<div>` is a block-level container for grouping elements; `<span>` is an inline container for styling or scripting.
- **Line breaks:** `<br>` inserts a line break within text.

Example usage:

```html
<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">Visit Example</a>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

---

## Elements and Attributes

HTML elements are the fundamental units of a web page, defined by tags that specify their role and content. Each element can also include attributes—key-value pairs that provide additional details or modify behavior.

**How elements and attributes work:**
- **Elements:** Defined by a start tag, content, and an end tag (e.g., `<p>Text</p>`). Some elements are self-closing (e.g., `<img>`).
- **Attributes:** Placed inside the opening tag to supply extra information, such as identifiers, classes, or configuration options.

**Common attributes:**
- `href`: Specifies the destination URL for links (`<a>`).
- `src`: Defines the image source (`<img>`).
- `alt`: Provides alternative text for images, improving accessibility.
- `id`: Assigns a unique identifier to an element.
- `class`: Assigns one or more class names for styling or scripting.

Example usage:

```html
<img src="logo.png" alt="Site Logo" width="100" height="100">
<a href="https://www.example.com" target="_blank">Open in new tab</a>
```

**Best practices:**
- Use descriptive `alt` text for images to support accessibility.
- Assign `id` and `class` attributes thoughtfully to enable targeted styling and scripting.
- Only include attributes that are relevant to the element’s purpose.

---

## Inline and Block Elements

HTML elements are categorized as either block-level or inline-level, which affects how they appear and behave on the page.

**Block-level elements:**
- Start on a new line and stretch to fill the container’s full width.
- Commonly used for larger structural sections of a page.
- Examples: `<div>`, `<h1>`–`<h6>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<form>`

**Inline elements:**
- Do not start on a new line; only take up as much width as their content requires.
- Used for formatting or grouping small portions of content within block elements.
- Examples: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<input>`

Example usage:

```html
<div>
    <span>This is inline</span>
    <p>This is block</p>
</div>
```

**Best practices:**
- Use block elements to define the main structure and layout of your page.
- Use inline elements for styling or marking up small pieces of content within blocks.

---

## Input Elements and Input Types

Input elements are essential for collecting user data in web forms. The `<input>` tag is highly versatile, supporting a variety of types to handle different kinds of input.

**Common input types:**
- **`text`:** Single-line text input for general data.
- **`password`:** Obscured text input for sensitive data.
- **`email`:** Validates and collects email addresses.
- **`number`:** Accepts numeric values, often with min/max constraints.
- **`checkbox`:** Allows selection of one or more options.
- **`radio`:** Enables selection of a single option from a group.
- **`submit`:** Button to submit the form.

Example usage:

```html
<form>
    <input type="text" placeholder="Your name">
    <input type="email" placeholder="Your email">
    <input type="password" placeholder="Password">
    <input type="checkbox"> I agree
    <input type="submit" value="Send">
</form>
```

**Best practices:**
- Use the appropriate input type for the data you want to collect; this improves usability and accessibility.
- Always provide `placeholder` or `label` elements to guide users.
- Combine input types with validation attributes (like `required`, `min`, `max`, or `pattern`) for better data quality.