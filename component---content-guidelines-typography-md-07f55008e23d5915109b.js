(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{XqJm:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return b}));t("q1tI");var r=t("7ljp"),a=t("ElOL");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={},p={_frontmatter:o},s=a.a;function b(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(s,l({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Well-defined typography styles in combination with a design system layout grid will create structured content."),Object(r.b)("h2",null,"Base"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),"<p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>\n")),Object(r.b)("h2",null,"Headings"),Object(r.b)("p",null,"Headings are made with styles for ",Object(r.b)("inlineCode",{parentName:"p"},"<h1>")," through ",Object(r.b)("inlineCode",{parentName:"p"},"<h6>")," tags."),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),"<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n")),Object(r.b)("h2",null,"Text elements"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),"<a>Anchor</a><br />\n<em>Emphasis</em><br />\n<small>Small</small><br />\n<strong>Strong</strong><br />\n<u>Underline</u>\n")),Object(r.b)("h2",null,"How this page is built"),Object(r.b)("p",null,"To make the typography examples working, we had to provide global styles for all the exmaples. It can be done\nin ",Object(r.b)("inlineCode",{parentName:"p"},"src/@bridgetool/gatsby-theme-dev/components/live-preview-wrapper.js")," file."),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-js"}),'import React from "react"\nimport milligramStyles from "!!raw-loader!milligram/dist/milligram.css"\nimport { Frame } from "@bridgetool/gatsby-theme-dev"\n\nfunction LivePreviewWrapper({ children }) {\n  return (\n    <Frame>\n      <style>{milligramStyles}</style>\n      <div>{children}</div>\n    </Frame>\n  )\n}\n\nexport default LivePreviewWrapper\n')),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"raw-loader")," to get the content of your CSS file and output it in ",Object(r.b)("inlineCode",{parentName:"p"},"<style>")," tag\ninside ",Object(r.b)("inlineCode",{parentName:"p"},"<Frame>"),". This way, you can provide any global CSS, and it will only\napply to the examples not to the documentation pages."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-guidelines-typography-md-07f55008e23d5915109b.js.map