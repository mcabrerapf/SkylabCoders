# SASS extend

- Create a `_placeholders.scss` partial in your base directory and @import it in your main `.scss` file.
- Create a placeholder for `%clearfix` and `@extend` it on the appropriate selectors. (Also remove the `.clearfix` class from the markup.)
- Create a `.navlist--inline` class like the one on the right.
- `@extend` that class on elements that match the pattern. (_Hint: checkout the header and footer styles._)

Let's get modular

```
.navlist--inline {
  list-style-type: none;

  li {
    display: inline-block;
  }

  a {
    display: block;
  }
}
```