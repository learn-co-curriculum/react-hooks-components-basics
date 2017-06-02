# React Components

## Overview

We'll introduce components, explain why they're important, and create them in two different ways. 

## Objectives
1. Create components using `React.createClass()`
2. Render a component with children using `React.createClass()`
3. Create components by extending the `React.Component` class
4. Pass in a component when using `React.createElement()`

## Components?
Now that we know how to render basic elements in React, let's kick things up a notch. Let's start by learning about React components!

While HTML elements are the basic building blocks of an application (for example, a `<div>`), a React application usually consists of several React _components_ combined together. Unlike the simple HTML elements, React components are smarter and bigger. They allow you to add event handlers, store internal state, communicate with parent components, and so on.

You're going to learn all of that stuff, but for now, we'll take things slow and focus on creating components that just render out some basic HTML. Once we know how to do that, the door's wide open to making our components a lot more dynamic in later lessons. Onwards!

## Old school

Let's start by talking about `React.createClass()`. While this method of creating React components has been since deprecated(NOTE!! Please do not use this syntax.) It's important to know what its syntax looks like. A lot of old React tutorials and guides will use this syntax. That is typically a sign to use a newer tutorial as React has changed alot since then and more than just the `React.createClass()` will no longer work. 

`React.createClass()` takes one argument: an object that is basically the specification of your component. The _only_ requirement for this specification is that your object has a `render()` method — everything else is optional. The reason for `render()` being required is, of course, that React needs to know _what_ it should show on our screen!

More specifically, `render()` needs to return a _single_ child (that optionally has children of its own). Let's take a look at how we would create a component that renders a `<button>` with some text:

```js
const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});
```

Notice how the variable is capitalized? This is a convention: components are always capitalized. We're creating our _own_ button component (that optionally has added behavior), which is why it's called `Button`. The element we're returning is the lowercase `button` though, which translates to the `<button>` HTML element.

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

## ES6 Syntax

With ES6, React adopted a newer syntax that is more succinct. The syntax looks like this:

```js
class YourComponent extends React.Component {
  render() {
    // Your React Elements
  }
 }
 ```
 
Lets look at how we would define a small Button component:

```js
class Button extends React.Component {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
}
```

Or with the ShoppingList component example we used with the older syntax:

```js
class ShoppingList extends React.Component {
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, 'Bananas'),
      React.createElement('li', {}, 'Vanilla ice cream'),
      React.createElement('li', {}, 'Chocolate'),
    ]);
  }
}
```

As you can see, we're extending the base `React.Component` class, and adding in any methods for our component specification. In this case, that's just the `render()` method.

## Nesting components

So far, we've only created basic HTML elements using `React.createElement()`. However, instead of passing in a string, we can also pass in a React component! For example, to create a `<div>` with two `Button` components, we would do the following:

```js
const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button),
]);
```

Again, note that HTML elements are strings, while components are passed by reference!

## Resources
- [React Top-Level API](https://facebook.github.io/react/docs/top-level-api.html)
