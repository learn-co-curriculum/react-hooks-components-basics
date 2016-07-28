# React Components

## Objectives

1. Explain how to create components using `React.createClass()`
2. Explain how to create components by extending the `React.Component` class

## Overview

We should start by showing students how they can use `React.createClass()` —
still no JSX! (And remember, have them add the `<script>` tags.)

```javascript
const View = React.createClass({
  render() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Hello, world!'))
    )
  }
})
```

And they can then render this component the usual way with `ReactDOM.render()`.

Then introduce them to the ES6 class-based way of creating components:

```javascript
class App extends React.Component {
  render() {
    return (
      // blah blah blah
    )
  }
}
```

## Resources

- [Reusable Components](https://facebook.github.io/react/docs/reusable-components.html)
