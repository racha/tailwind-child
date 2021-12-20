const plugin = require('tailwindcss/plugin');

const childSelect = plugin(function ({ addVariant, theme, e }) {
  const childEls = theme('childElements');
  HTMLTags.forEach(tag => {
    addVariant(`child-${tag}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const newClass = e(`child-${tag}${separator}${className}`);
        return `.${newClass} ${tag}`
      })
    });
    addVariant(`direct-child-${tag}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const newClass = e(`direct-child-${tag}${separator}${className}`);
        return `.${newClass} > ${tag}`
      })
    });
  })
},
{
  theme: {
    childElements: ['html', 'base', 'head', 'link', 'meta', 'style', 'title', 'address', 'article', 'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'main', 'nav', 'section', 'body', 'blockquote', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre', 'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr', 'area', 'audio', 'img', 'map', 'track', 'video', 'embed', 'iframe', 'object', 'param', 'picture', 'portal', 'source', 'svg', 'math', 'canvas', 'noscript', 'script', 'del', 'ins', 'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea', 'details', 'dialog', 'menu', 'summary', 'slot', 'template', 'acronym', 'applet', 'basefont', 'bgsound', 'big', 'blink', 'center', 'content', 'dir', 'font', 'frame', 'frameset', 'hgroup', 'h1','h2','h3','h4','h5', 'h6', 'image', 'keygen', 'marquee', 'menuitem', 'nobr', 'noembed', 'noframes', 'plaintext', 'rb', 'rtc', 'shadow', 'spacer', 'strike', 'tt', 'xmp']
  }
});

module.exports = childSelect;