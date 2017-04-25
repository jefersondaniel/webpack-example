const {h, render} = require('preact')
const styles = require('./index.scss')

render(
  h('div', {id: 'foo'}, [
    h('span', {}, ['Hello, world!']),
    h('button', {className: styles['btn-success']}, ['Click me'])
  ]),
  document.getElementById('app')
)

