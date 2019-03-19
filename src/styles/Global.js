import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

::-webkit-selection {
    background: rgba( 174, 217, 17, .6 );
    text-shadow: none;
}

::-moz-selection {
    background: rgba( 174, 217, 17, .6 );
    text-shadow: none;
}

::selection {
    background: rgba( 174, 217, 17, .6 );
    text-shadow: none;
}
article,
aside,
footer,
header,
nav,
section {
    display: block;
}


figcaption,
figure,
main {
    /* 1 */
    display: block;
}

figure {
    // margin: 1em 40px;
    margin: 0;
}

a {
    background-color: transparent;
    /* 1 */
    -webkit-text-decoration-skip: objects;
    /* 2 */
    color: #424242;
    transition: opacity 0.8s;
    text-decoration: none;
}

 @media screen and (min-width: 48em) {

a:active,
a:hover {
    outline-width: 0;
    color: #424242;
    opacity: .6;
    transition: opacity .8s;
    text-decoration: none;
}
}

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
    border-bottom: none;
    /* 1 */
    text-decoration: underline;
    /* 2 */
    text-decoration: underline dotted;
    /* 2 */
}

b,
strong {
    font-weight: inherit;
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
    font-weight: bolder;
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
}
/**
 * Add the correct font style in Android 4.3-.
 */
dfn {
    font-style: italic;
}
/**
 * Add the correct background and color in IE 9-.
 */
mark {
    background-color: #ff0;
    color: #000;
}
/**
 * Add the correct font size in all browsers.
 */
small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}
/* Embedded content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
audio,
video {
    display: inline-block;
}
/**
 * Add the correct display in iOS 4-7.
 */
audio:not([controls]) {
    display: none;
    height: 0;
}
/**
 * Remove the border on images inside links in IE 10-.
 */

/**
 * Hide the overflow in IE.
 */
svg:not(:root) {
    overflow: hidden;
}
/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
    font-family: sans-serif;
    /* 1 */
    font-size: 100%;
    /* 1 */
    line-height: 1.15;
    /* 1 */
    margin: 0;
    /* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
    /* 1 */
    overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
    /* 1 */
    text-transform: none;
}

button, html [type="button"],
/* 1 */
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
    /* 2 */
}
/**
 * Remove the inner border and padding in Firefox.
 */
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
    outline: 1px dotted ButtonText;
}
/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */
fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}
legend {
    box-sizing: border-box;
    /* 1 */
    color: inherit;
    /* 2 */
    display: table;
    /* 1 */
    max-width: 100%;
    /* 1 */
    padding: 0;
    /* 3 */
    white-space: normal;
    /* 1 */
}
/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
    display: inline-block;
    /* 1 */
    vertical-align: baseline;
    /* 2 */
}
/**
 * Remove the default vertical scrollbar in IE.
 */
textarea {
    overflow: auto;
    width: 100%;
}
/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */
[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
}
/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
}
/* Interactive
   ========================================================================== */
/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */
details,
/* 1 */
menu {
    display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
    display: list-item;
}
/* Scripting
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
canvas {
    display: inline-block;
}
/**
 * Add the correct display in IE.
 */
template {
    display: none;
}
/* Hidden
   ========================================================================== */
/**
 * Add the correct display in IE 10-.
 */
[hidden] {
    display: none;
}
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    line-height: 30px;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #161b21;
    font-size: 20px;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

p {
    margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    list-style-type: none;
}
dl {
    margin: 0;
}
dt, dd {
    margin-left: 0;
}

i {
    font-style: normal;
}
button {
    border: none;
}

img {
    max-width: 100%;
    border-style: none;
    vertical-align: middle;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-size: inherit;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #DCDCDC;
    padding: 0; 
    overflow: visible;
}


.container {
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  
  @media screen and (min-width: 48em) {
    .container {
      width: 46.75rem;
    }
  }
  
  @media screen and (min-width: 62em) {
    .container {
      width: 56.875rem;
    }
  }
  
  @media screen and (min-width: 48em) {
    .breakResponsive {
      display: inline-block;
    }
  }
  
  .wrapper {
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  
  @media screen and (min-width: 48em) {
    .wrapper {
      width: 700px;
      margin: 0 auto;
    }
  }
  
  .break {
    display: block;
  }
  .breakSmall {
    display: block;
  }
  @media screen and (min-width: 48em) {
    .breakSmall {
      display: inline-block;
    }
  }
  
  @media screen and (min-width: 48em) {
    .breakResponsive {
      display: inline-block;
    }
  }
  
  .ComponentSeparation {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 48em) {
    .ComponentSeparation {
      margin-bottom: 2rem;
    }
  }
  
  .ResponsiveImg {
    position: relative;
    padding-bottom: 75%;
  
  }
  
  .ResponsiveImg_img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }
  
  .highlight {
    transition: box-shadow .2s ease-in-out;
      box-shadow: inset 0 -0.2em 0 0 #2eec96;
  }
  
  @media screen and (min-width: 48em) {
    .highlight:hover {
      box-shadow: inset 0 -2em 0 0 #2eec96;
      transition: box-shadow .2s ease-in-out;
  
      
    }
  }
  
  .t2 {
    font-size: 1.666rem;
      line-height: 1.666rem;
  }
  
  @media screen and (min-width: 48em) {
    .t2 {
      font-size: 2.221rem;
      line-height: 2.221rem;
    }
  }
  
  .small {
    font-size: .8rem;
      line-height: 1rem;
  }

`

export default GlobalStyle