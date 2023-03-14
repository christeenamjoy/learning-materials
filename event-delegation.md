Event delegation is a technique in which a single event listener is attached to a parent element, 
instead of attaching event listeners to each individual child element. This approach is often used
when there are many child elements that need to have the same event behavior, such as a list of items
that need to be clicked or hovered over.

This is useful when you have many child elements that require the same event listener, 
as it can help improve performance by reducing the number of event listeners attached to the DOM.

To implement event delegation, you add an event listener to a parent element and use the 
# event.target
property to determine which child element triggered the event using its id which is bubbled to the parent. 
You can then perform your desired action on the child element.
