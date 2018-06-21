# React Components


## Overview

We'll introduce the heart of React: components. This will include explaining why
they're important, and examining a few examples. If the idea and application of
components doesn't click immediately, _do not worry!_ The several moving parts
required to understand how to use them will fall into place as we move forward. 


## Objectives

1. Understand React components
2. Create React components and show the HTML they create


## Introduction

Let's examine a high level overview of what a React component is before we
implement one. The official [React documentation on components][react-component]
says it best:

>Components let you split the UI into independent, reusable pieces, and think
>about each piece in isolation.

Components modularize both _functionality_ and _presentation_ in our code. In
order to understand how powerful this is, consider just how intricate web
applications can become. The difficulty in logically arranging, architecting,
and programming these web applications increases with their size. Components are
like little packages: they help us keep everything organized and predictable
while abstracting the ['boiler plate'][boiler-plate] code. 

Enough of a description -- let's see some examples! While the possibilities of
what we can do with components are endless, the first thing we need to
understand about them is the ways in which they act as code templates. Let's
start simply and build up from there using the following as an example:


## React Application Idea

Let's imagine we want a blog post online describing the fact (note: not opinion) of why Bjarne Stroustrup has the [perfect lecture oration][bjarne-stroustrup]. 

Naturally, we want our blog to display comments made by readers that agree with our statement. In summary, we want an application that displays an opinion and responses to that opinion (like a 'comments' section). 

We will flesh out this example by following two steps:

1. write the components
2. use the components

---

#### Step 1 -- write the components

First, let's make a component to showcase an opinion:

```javascript
class Blog extends React.Component {
  render() {
    return (
      <div>
        Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
      </div>
    )
  }
}
```

When React creates this element and adds it to the DOM, the resulting HTML will look just as you would expect:

```HTML
<div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
```

Ok, that takes care of our opinion part. Now let's make a component to display a single user's comment:

```javascript
class Comment extends React.Component {
  render() {
    return (
      <div>
        Naturally, I agree with this article.
      </div>
    )
  }
}
```

...and the HTML when React actually adds this component to the DOM:

```HTML
<div>Naturally, I agree with this article.</div>
```

In both of our examples, React is taking JavaScript code, interpreting that special HTML/JavaScript mixup within the `render()`'s `return()` statement, and spitting out plain old HTML that browsers will know how to represent to the user.

Now that we have our components in hand, it's time to actually use them.


---

#### Step 2 -- use the components

Now that we have these components written, all we need to do is make sure some other component is making use of them in it's `render` method. Every React application has some top level component(s). Very often, this top level component is simply called `App`. Let's assume just that for our example:

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Blog />
        <Comment />
      </div>
    )
  }
}
```

Hold on there, Whoa Nelly, hold up, **ples stahp**. What is going on in that `return` block?! That is an abomination! It is neither real HTML nor real JavaScript! Instead, it is some vulgar mashup of the two, an unholy merger! 

If this is your first time seeing JSX, which is React's syntax brainchild, your mind is likely trying to read both HTML and JavaScript at the same time and short circuiting just like this cat:

![](https://media2.giphy.com/media/vDurI6FYH7qi4/giphy.gif)

We will dive deeper into JSX (which is actually quite wonderful) later. For now just take it for granted and trust it's wonkiness. 

What we are seeing in this `App` component's `render` method is a straightforward description of what we want: "Hey `App` component! When you render, I want you to also be responsible for making both the `Blog` and the `Comment` component!". Of course, because computers still listen to us (for now) it will do just that! What do you think the resulting HTML will look like?

```HTML
<div>
  <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  <div>Naturally, I agree with this article.</div>
</div>
```

This unpacks logically. The `App` component (being our top level component) wraps around both `Blog` and `Comment`, and we already know what they look like when they are turned into HTML. 

As you may expect, in our example above, we would refer to the `App` component as both the `Comment` and `Blog` component's _parent_ component. Inversely, we refer to `Comment` and `Blog` as _children_ components of `App`.


## Summary

We just introduced simplified, bare bones, React components. They are used to house modularized front end code. In our example, and which is often the case, they contain information on how a portion of our application should be turned into HTML. 

Going forward, we will continue with this example and show how components can be re-used and how they can be written as dynamic templates, where their content is interchangeable. 


## Resources
- [React Top-Level API](https://reactjs.org/docs/react-api.html)

[react-component]: https://reactjs.org/docs/components-and-props.html
[boiler-plate]: https://en.wikipedia.org/wiki/Boilerplate_code
[bjarne-stroustrup]: https://www.youtube.com/watch?v=JBjjnqG0BP8
