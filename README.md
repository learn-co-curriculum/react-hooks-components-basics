# React Components Basics

## Overview

We'll introduce the heart of React: components. This will include explaining why
they're important and examining a few examples. If the idea and application of
components don't click immediately, _do not worry!_ The different moving parts
required to understand how to use them will fall into place as we move forward.

## Objectives

1. Understand React components
2. Create React components and show the HTML they create

## Introduction

Let's examine a high level overview of what a React component is before we
implement one. The official [React documentation on components][react-component]
says it best:

> Components let you split the UI into independent, reusable pieces, and think
> about each piece in isolation.

Components modularize both _functionality_ and _presentation_ in our code. In
order to understand how powerful this is, consider just how intricate web
applications can become. The difficulty in logically arranging, architecting,
and programming these web applications increases with their size. Components are
like little packages: they help us keep everything organized and predictable
while abstracting the ['boiler plate'][boiler-plate] code. Each component
contains a snippet of code that describes what it should render to the DOM.

## React Application Idea

Enough of a description &mdash; let's see some examples! While the possibilities
of what we can do with components are endless, the first thing we need to
understand about them is the ways in which they act as code templates. Let's
start simply and build up from there using the following as an example:

Let's imagine we want a blog article describing the fact (note: not opinion) of
why Bjarne Stroustrup has the [perfect lecture oration][bjarne-stroustrup]. We
also want our blog article to display comments made by readers.

#### Step 1: write the components

First, let's make a component to showcase an opinion:

```javascript
function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}
```

Take a moment to read that code line by line:

- a function, `Article`, is declared
- what it should return is explicitly provided (we tell React "Hey, when you
  want to put this component on the DOM, here is what it should become!")

When React creates this element and adds it to the DOM, the resulting HTML will
look just as you would expect:

```html
<div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
```

Let's see what it would look like, were we to only render this one component, in the DOM:

![](https://curriculum-content.s3.amazonaws.com/react/component-article-example.png)

Ok, that takes care of our `Article` part of our application. Now let's make a
component to display a single user's comment:

```javascript
function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}
```

Take the time to read that component line by line. Here is the HTML that this
would create when added to the DOM:

```html
<div>Naturally, I agree with this article.</div>
```

In both of our examples, React is taking JavaScript code, interpreting that
special HTML/JavaScript syntax within the `return()` statement, and
spitting out plain old HTML that browsers will know how to represent to the
user.

Once we have our components in hand, it's time to actually use them.

#### Step 2: use the components

Now that we have these components written, all we need to do is make sure some
other component is making use of them in its return statement. Every React
application has some top level component(s). Very often, this top level
component is simply called `App`. For our example, here's what it might look
like:

```javascript
function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}
```

Here we can see JSX coming into play a bit more. The code inside the `return()`
still looks a lot like regular HTML, but in addition to rendering a regular old
HTML div element we're also rendering our two components. We've created code
that is not only well structured and modular, but also a straightforward
description of what we want the `App` component to do: render the article first,
followed by the comment. Here is what the resulting HTML will look like:

```html
<div>
  <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  <div>Naturally, I agree with this article.</div>
</div>
```

![](https://curriculum-content.s3.amazonaws.com/react/component-article-comment-example.png)

This unpacks logically. The `App` component (being our top level component)
wraps around both `Article` and `Comment`, and we already know what they look
like when they are turned into HTML.

As you may expect, we refer to the `App` component as both the `Comment` and
`Article` component's _parent_ component. Inversely, we refer to `Comment` and
`Article` as _children_ components of `App`.

## A Note on Classes

As you're exploring the React documentation, and finding other resources on
React on the internet, you'll probably notice there are multiple syntaxes you
can use for creating components: **function** components and **class**
components.

A **function** component looks like this:

```js
function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}
```

Or this, using the arrow function syntax:

```js
const Comment = () => <div>Naturally, I agree with this article.</div>;
```

A **class** component looks like this:

```js
class Comment extends React.Component {
  render() {
    return <div>Naturally, I agree with this article.</div>;
  }
}
```

For many years, the only way to work with certain key features of React &mdash;
_state_ and _lifecycle_ &mdash; was to use **class** components. Since the
introduction of [**hooks**][hooks] in React 16.8, this is no longer true, and function
components can be used for (almost) everything that class components can.

React's recommendation is that _new_ components are written as function
components; but class components will continue to be supported as well. React is
also planning to [rewrite their documentation][react docs rewrite] to focus on
function components and hooks in the near future.

You'll learn more about class components later on, so that when you encounter
them in legacy code, you'll still be able to work with them. However, for the
time being, we'll just be focusing on function components.

## Summary

We just introduced simplified, bare bones, React components. They are used to
house modularized front end code. In our example, which is often the case, they
contain information on how a portion of our application should be turned into
HTML.

Going forward, we will continue with this example and show how components can be
re-used and how they can be written as dynamic templates, where their content is
interchangeable.

## Resources

- [React Top-Level API](https://reactjs.org/docs/react-api.html)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

[react-component]: https://reactjs.org/docs/components-and-props.html
[boiler-plate]: https://en.wikipedia.org/wiki/Boilerplate_code
[bjarne-stroustrup]: https://www.youtube.com/watch?v=JBjjnqG0BP8
[react docs rewrite]: https://github.com/reactjs/reactjs.org/issues/3308
[hooks]: https://reactjs.org/docs/hooks-intro.html
