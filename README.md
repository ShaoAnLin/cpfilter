# Overview
This is the source resource of official website [CPFilter.com](https://cpfilter.com).

# Development
## Publish
Push to the github repository:

```git push origin master```

Push to the web hosting server:

```git-ftp push```

## Tools and Dependencies
### ReactJS
Reuse component with ReactJS. The JS file *~/js/header.js* is generated from *~/src/header.jsx*. The JS scripts could be comiled by the Babel shell command.

```./node_modules/.bin/babel src --out-dir js```

### RequireJS
Used to manage the JavaScript third party libraries. See *~/js/main.js* and *~/js/main-&lt;page&gt;.js*

### CSS
Use SASS/SCSS to organize CSS files. Convert *~/stylesheets/sass/styles.scss* to *~/stylesheets/theme.min.css*.

You could use Tools like Prepros to do the preprocessing.

### Package
Use npm to manage the installed packages.

```npm ls package-name```

Fix vulnerable npm packages.

```npm audit fix```