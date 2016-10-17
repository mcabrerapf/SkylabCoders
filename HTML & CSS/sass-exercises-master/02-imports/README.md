# SASS imports

Update your Sass structure to look something like this...

```
sass
    /base
        _base.scss
    /modules
        _all.scss
        _header.scss
        _footer.scss
        _kittens.scss
        _info.scss
    application.scss
```

- Move ALL styles from `application.scss` to more modular/organized locations.
- Update `application.scss` to _@import_ your new partials.
