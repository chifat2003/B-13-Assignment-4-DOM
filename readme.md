### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans: The main differences lie in their selection mechanism, return type (single element vs. collection), and whether the returned collection is "live" or "static"

### 2. How do you create and insert a new element into the DOM?

## Ans: let veriable = document.createElement(" ");
## veriable.innerText = "This is a paragraph";
## document.body.appendChild(veriable);


### 3. What is Event Bubbling? And how does it work?

## Ans: Event bubbling is a DOM event propagation mechanism where an event triggered on a child element triggers on its parent, grandparent, and ancestors successively, moving upwards to the root.


### 4. What is Event Delegation in JavaScript? Why is it useful?

## Ans: Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code, especially when dealing with dynamic content or a large number of elements


### 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans: preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event. stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.