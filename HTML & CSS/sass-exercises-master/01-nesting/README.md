# SASS nesting

Take the code at `css/application.css` and create the proper nested SASS code at `scss/application.css`

### Hints

- Nest All the things but don't nest too deeply!!
- You don't need to nest everything (`.header`, `.footer` and `.kittens` are good place to start)
- Don't forget the `&` selector
- Feel free to refactor (`.news`, `.events`, & `.location` are ripe for pattern abstraction!)

```scss
// good
.navigation {
  li {//...}
  a  {
    //...
    &:hover { //... }
  }
}

// bad
body {
  .header {
    .navigation {
      ul {
        li {
          a {
            // ...
          }
        }
      }
    }
  }
}
```
