# React Components

## Objectives
1. Explain how to create components using `React.createClass()`
2. Explain how to create components by extending the `React.Component` class

## Components?
Now that we know how to render basic elements in React, let's kick things up a notch. Let's start by learning about
React components!

While HTML elements are the basic building blocks of an application (for example, a `<div>`), a React application
usually consists of several React _components_ combined together. Unlike the simple HTML elements, React components are
smarter and bigger. They allow you to add event handlers, store internal state, communicate with parent components, and
so on.

You're going to learn all of that stuff, but for now, we'll take things slow and focus on creating components that just
render out some basic HTML. Once we know how to do that, the door's wide open to making our components a lot more
dynamic in later lessons. Onwards!

## Old school
Let's start by creating a React component using `React.createClass()`. While this method of creating React components
is outdated (in a sense), it's important to know what its syntax looks like. Most React tutorials and guides still use
this syntax, so if you see it in the wild, now you know what it is!

`React.createClass()` takes one argument: an object that is basically the specification of your component. The _only_
requirement for this specification is that your object has a `render()` method — everything else is optional. The reason
for `render()` being required is, of course, that React needs to know _what_ it should show on our screen!

More specifically, `render()` needs to return a _single_ child (that optionally has children of its own). Let's take a
look at how we would create a component that renders a `<button>` with some text:

```js
const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});
```

Notice how the variable is capitalized? This is a convention: components are always capitalized. We're creating our
_own_ button component (that optionally has added behavior), which is why it's called `Button`. The element we're
returning is the lowercase `button` though, which translates to the `<button>` HTML element.

Now let's render a component with some children:

```js
const ShoppingList = React.createClass({
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, 'Bananas'),
      React.createElement('li', {}, 'Vanilla ice cream'),
      React.createElement('li', {}, 'Chocolate'),
    ]);
  }
});
```

## New school
With the introduction and widespread adoption of ES2015, it's time we got with the program and starting coding using
these new features! Using the class system in ES2015, we can create React component classes. Let's recreate our button
from above:

```js
class Button extends React.Component {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
}
```

As you can see, we're extending the base `React.Component` class, and adding in any methods for our component
specification. In this case, that's just the `render()` method.

## Nesting components
So far, we've only created basic HTML elements using `React.createElement()`. However, instead of passing in a string,
we can also pass in a React component!

## Resources
- [React Top-Level API](https://facebook.github.io/react/docs/top-level-api.html)
