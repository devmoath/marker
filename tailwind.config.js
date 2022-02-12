const styles = require('@tailwindcss/typography/src/styles');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: 'media',

    theme: {
        extend: {
            container: {
                center: true,
            },
            typography: {
                DEFAULT: {
                    css: {
                        blockquote: {
                            ...styles.DEFAULT.css[0].blockquote,
                            borderLeft: 'none',
                            borderRightWidth: '0.25rem',
                            borderRightColor: 'var(--tw-prose-quote-borders)',
                            marginRight: '-10px',
                            paddingRight: '20px',
                        },
                        table: {
                            ...styles.DEFAULT.css[0].table,
                            textAlign: 'auto'
                        }
                    },
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

/*
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
    --tw-prose-invert-body: #d1d5db;
    --tw-prose-invert-headings: #fff;
    --tw-prose-invert-lead: #9ca3af;
    --tw-prose-invert-links: #fff;
    --tw-prose-invert-bold: #fff;
    --tw-prose-invert-counters: #9ca3af;
    --tw-prose-invert-bullets: #4b5563;
    --tw-prose-invert-hr: #374151;
    --tw-prose-invert-quotes: #f3f4f6;
    --tw-prose-invert-quote-borders: #374151;
    --tw-prose-invert-captions: #9ca3af;
    --tw-prose-invert-code: #fff;
    --tw-prose-invert-pre-code: #d1d5db;
    --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
    --tw-prose-invert-th-borders: #4b5563;
    --tw-prose-invert-td-borders: #374151;
    overflow-wrap: break-word;
    --tw-prose-body: var(--tw-prose-invert-body);
    --tw-prose-headings: var(--tw-prose-invert-headings);
    --tw-prose-lead: var(--tw-prose-invert-lead);
    --tw-prose-links: var(--tw-prose-invert-links);
    --tw-prose-bold: var(--tw-prose-invert-bold);
    --tw-prose-counters: var(--tw-prose-invert-counters);
    --tw-prose-bullets: var(--tw-prose-invert-bullets);
    --tw-prose-hr: var(--tw-prose-invert-hr);
    --tw-prose-quotes: var(--tw-prose-invert-quotes);
    --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);
    --tw-prose-captions: var(--tw-prose-invert-captions);
    --tw-prose-code: var(--tw-prose-invert-code);
    --tw-prose-pre-code: var(--tw-prose-invert-pre-code);
    --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);
    --tw-prose-th-borders: var(--tw-prose-invert-th-borders);
    --tw-prose-td-borders: var(--tw-prose-invert-td-borders);
    font-size: 1.125rem;
    line-height: 1.7777778;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    margin: 0;
    font-weight: 500;
    font-style: italic;
    color: var(--tw-prose-quotes);
    border-left-width: 0.25rem;
    border-left-color: var(--tw-prose-quote-borders);
    quotes: "\201C""\201D""\2018""\2019";
    margin-top: 1.6666667em;
    margin-bottom: 1.6666667em;
    padding-left: 1em;
* */
