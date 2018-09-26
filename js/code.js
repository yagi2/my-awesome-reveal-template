Reveal.initialize({
    controls: true,
    progress: true,
    slideNumber: true,
    history: true,
    center: false,
    transition: 'none',
    viewDistance: 3,
    width: 1440,
    height: 810,
    
    dependencies: [
        {
            src: 'node_modules/reveal.js/lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        },
        {
            src: 'node_modules/reveal.js/plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'node_modules/reveal.js/plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'node_modules/reveal.js/plugin/highlight/highlight.js',
            async: true,
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        },
        {
            src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js',
            async: true,
            condition: function () {
                return !!document.body.classList;
            }
        },
        {
            src: 'node_modules/reveal.js/plugin/notes/notes.js',
            async: true,
            condition: function () {
                return !!document.body.classList;
            }
        }
    ]
});

