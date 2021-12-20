# tailwind-child
A [TailwindCSS](https://tailwindcss.com/ "TailwindCSS") Plugin that lets you target child elements.

```html
<ul class="child-span:child-li:text-red-500 child-li:text-blue-500 direct-child-span:font-bold">
	<li>List Item 1</li>
	<li>List Item 2</li>
	<span>Span Item 1</span>
	<li><span>Span Item 2 (within a li)</span></li>
	<li>List Item 4</li>
</ul>
```

Results in:

```css
.child-li\:text-blue-500 li {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.child-span\:child-li\:text-red-500 li span {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.direct-child-span\:font-bold > span {
  font-weight: 700;
}
```
Includes all default HTML tags:
```javascript
    childTags: {
      html: "html",
      base: "base",
      head: "head",
      link: "link",
      meta: "meta",
      style: "style",
      title: "title",
      address: "address",
      article: "article",
      aside: "aside",
      footer: "footer",
      header: "header",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      main: "main",
      nav: "nav",
      section: "section",
      body: "body",
      blockquote: "blockquote",
      dd: "dd",
      div: "div",
      dl: "dl",
      dt: "dt",
      figcaption: "figcaption",
      figure: "figure",
      hr: "hr",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      ul: "ul",
      a: "a",
      abbr: "abbr",
      b: "b",
      bdi: "bdi",
      bdo: "bdo",
      br: "br",
      cite: "cite",
      code: "code",
      data: "data",
      dfn: "dfn",
      em: "em",
      i: "i",
      kbd: "kbd",
      mark: "mark",
      q: "q",
      rp: "rp",
      rt: "rt",
      ruby: "ruby",
      s: "s",
      samp: "samp",
      small: "small",
      span: "span",
      strong: "strong",
      sub: "sub",
      sup: "sup",
      time: "time",
      u: "u",
      var: "var",
      wbr: "wbr",
      area: "area",
      audio: "audio",
      img: "img",
      map: "map",
      track: "track",
      video: "video",
      embed: "embed",
      iframe: "iframe",
      object: "object",
      param: "param",
      picture: "picture",
      portal: "portal",
      source: "source",
      svg: "svg",
      math: "math",
      canvas: "canvas",
      noscript: "noscript",
      script: "script",
      del: "del",
      ins: "ins",
      caption: "caption",
      col: "col",
      colgroup: "colgroup",
      table: "table",
      tbody: "tbody",
      td: "td",
      tfoot: "tfoot",
      th: "th",
      thead: "thead",
      tr: "tr",
      button: "button",
      datalist: "datalist",
      fieldset: "fieldset",
      form: "form",
      input: "input",
      label: "label",
      legend: "legend",
      meter: "meter",
      optgroup: "optgroup",
      option: "option",
      output: "output",
      progress: "progress",
      select: "select",
      textarea: "textarea",
      details: "details",
      dialog: "dialog",
      menu: "menu",
      summary: "summary",
      slot: "slot",
      template: "template",
      acronym: "acronym",
      applet: "applet",
      basefont: "basefont",
      bgsound: "bgsound",
      big: "big",
      blink: "blink",
      center: "center",
      content: "content",
      dir: "dir",
      font: "font",
      frame: "frame",
      frameset: "frameset",
      hgroup: "hgroup",
      image: "image",
      keygen: "keygen",
      marquee: "marquee",
      menuitem: "menuitem",
      nobr: "nobr",
      noembed: "noembed",
      noframes: "noframes",
      plaintext: "plaintext",
      rb: "rb",
      rtc: "rtc",
      shadow: "shadow",
      spacer: "spacer",
      strike: "strike",
      tt: "tt",
      xmp: "xmp"
    }
```

But expandable using `theme/extend`

```javascript
module.exports = {
  content: [],
  theme: {
    extend: {
      childTags: {
        custom: 'custom',
        ".selector": ".selector",
      },
    },
  },
  plugins: [],
}
```

You can even use custom `class/ID` selectors like `.selector` in example above. Which will generate:

```css
.child-someEl\:bg-black custom {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.child-\.selector\:bg-purple-500 .selector {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
```