# Dynamic React Components


## Overview

We'll take the next step with React components and examine how they can be used
as dynamic templates. 


## Objectives

1. Understand how React components can be dynamic templates
2. Create dynamic React components and show the HTML they create


## Introduction


#### Step 3 -- use the components as templates

Time to put the **modularity** aspect of components to use! Here is what the React implementation of this may look like if we were to make use of the `Comment` component in an enclosing `BlogPost` component:

```javascript
class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        {this.props.content}
      </div>  
    )
  }
}

class BlogPost extends React.Component {
  render() {
    return (
      <div id="blog-post">

        <div id="blog-content">
          Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
        </div>

        <Comment content={"I agree with this statement. - Angela Merkel"}/>
        <Comment content={"A universal truth. - Noam Chomsky"}/>
        <Comment content={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>

      </div>
    )
  }
}
```

There is quite a bit going on here. Most notably, we are passing the content information to the children components. Let's zero in on the important parts within each component's `render` method and digest it line by line:

```javascript
// Comment Component

// this.props.what!? Here, we are making use of the 'templating' nature of React
// components. Information is passed to the component itself, which can then
// dynamically render it.
<div className="comment"> // `className=` is used in place of traditional `class=`
  {this.props.contents}
</div>
```

```javascript
// BlogPost Component

<div id="block-post">
  // Following is the actual blog post content!
  <div id="blog-content">
    Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
  </div>

  // Here is where the real magic comes in: we are rendering multiple components
  // within a single parent component. Pay close attention to that funky
  // content={'blah'} portion. We are defining a variable that is passed to
  // every `Comment` component. Thereafter, we can access that `content` variable within
  // the `Comment` component via the `this.props.content` you see above.
  <Comment content={"I agree with this statement.<br/>- Angela Merkel"}/>
  <Comment content={"A universal truth.<br/>- Noam Chomsky"}/>
  <Comment content={"Truth is singular. Its ‘versions’ are mistruths<br/>- Sonmi-451"}/>

</div>
```

Just as we did before, let's look at what the resulting HTML looks like:

```HTML
<div id="blog-post">

  <div id="blog-content">
    Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
  </div>

  <div class="comment">
    I agree with this statement.<br/>- Angela Merkel
  </div>

  <div class="comment">
    A universal truth.<br/>- Noam Chomsky
  </div>

  <div class="comment">
    Truth is singular. Its ‘versions’ are mistruths<br/>- Sonmi-451
  </div>

</div>
```

...but seeing is believing so let's look at this in technicolor! Following is an inspection of the HTML and _real live DOM elements_ that React rendered when we blasted this code into a project:

<object data="https://learn-verified.s3.amazonaws.com/sample-component-video.gif" type="image/png">
  <img src="./dank-example.gif" />
</object>


Alright now! If this is the first time you have seen React syntax, take a moment. Stretch your limbs, make a sandwich, let the glorious paradigm sink in. This is a core facet of React programming, and most of what we do going forward is going to build upon this component parent/child paradigm.

## Summary

**React components:**
  - are modular, reusable, and enable a 'templating' like functionality
  - help us organize our user interfaces _functionality_ and _presentation_
  - enable us to think about each piece in isolation, improving our ability to assert structure on increasingly complex programs

While HTML elements are the basic building blocks of an application (for example, a `<div>`), a React application usually consists of several React _components_ combined together. Unlike the simple HTML elements, React components are smarter and bigger. They allow you to add event handlers, store internal state, communicate with other components, and much more.

## Looking Forward

In this README, we introduced some fundamentals of a React component. Going forward we will expand on what we can do with components, how they fit into the larger React landscape, and what built in functionality they come with.

## A Quick Note About the Past...

React is a living framework that is constantly being updated and improved upon. Compounding on that, React has spanned the transition from ES5 to ES6, (the newer version of which has had many updates, including `Class` syntax). This means old versions of React code will, in some places, look different.

In older versions a method, `React.createClass()`, was used in place of where we were defining our own `Class`es and extending the `React.component` class (see code above!). While this `React.createClass()` method of creating React components has since been deprecated, it is still present in many older code bases and tutorials. For now, we recommend sticking with the up-to-date class syntax we present, but don't be alarmed if you come across unfamiliar ways to create React components. The [React documentation][old-react] is always there for you regarding backwards compatibility.

## Resources
- [React Top-Level API](https://reactjs.org/docs/react-api.html)

[old-react]: https://reactjs.org/docs/react-without-es6.html
[react-component]: https://reactjs.org/docs/components-and-props.html
[bjarne-stroustrup]: https://www.youtube.com/watch?v=JBjjnqG0BP8
