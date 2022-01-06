// Based on https://github.com/highlightjs/base16-highlightjs/blob/main/templates/default.mustache
// this file is available under the MIT license
// use the original template to use with base16

const renderTemplate = values =>
  `
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }

  code.hljs {
    padding: 3px 5px;
  }

  .hljs {
    color: #${values["base05-hex"]};
    background: #${values["base00-hex"]};
    box-shadow: inset 0px -6px 20px 0px #0000002b;
  }

  .hljs::selection,
  .hljs ::selection {
    background-color: #${values["base02-hex"]};
    color: #${values["base05-hex"]};
  }

  .hljs-formula,
  .hljs-params,
  .hljs-property
  {}

  .hljs-comment {
    color: #${values["base03-hex"]};
  }

  .hljs-tag {
    color: #${values["base04-hex"]};
  }

  .hljs-subst,
  .hljs-punctuation,
  .hljs-operator {
    color: #${values["base05-hex"]};
  }

  .hljs-operator {
    opacity: 0.7;
  }

  .hljs-bullet,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-deletion {
    color: #${values["base08-hex"]};
  }

  .hljs-symbol,
  .hljs-number,
  .hljs-link,
  .hljs-attr,
  .hljs-variable.constant_,
  .hljs-literal {
    color: #${values["base09-hex"]};
  }

  .hljs-title,
  .hljs-class .hljs-title,
  .hljs-title.class_
  {
    color: #${values["base0A-hex"]};
  }

  .hljs-strong {
    font-weight:bold;
    color: #${values["base0A-hex"]};
  }

  .hljs-code,
  .hljs-addition,
  .hljs-title.class_.inherited__,
  .hljs-string {
    color: #${values["base0B-hex"]};
  }

  .hljs-built_in,
  .hljs-doctag,
  .hljs-quote,
  .hljs-keyword.hljs-atrule,
  .hljs-regexp {
    color: #${values["base0C-hex"]};
  }

  .hljs-function .hljs-title,
  .hljs-attribute,
  .ruby .hljs-property,
  .hljs-title.function_,
  .hljs-section {
    color: #${values["base0D-hex"]};
  }

  .hljs-type,
  .hljs-template-tag,
  .diff .hljs-meta,
  .hljs-keyword {
    color: #${values["base0E-hex"]};
  }
  .hljs-emphasis {
    color: #${values["base0E-hex"]};
    font-style: italic;
  }

  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-meta .hljs-string
  {
    color: #${values["base0F-hex"]};
  }

  .hljs-meta .hljs-keyword,
  .hljs-meta-keyword {
    font-weight: bold;
  }
  `

export default renderTemplate
