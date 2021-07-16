const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,

    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: false,

    theme: {
        extend: {},
    },

    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@devmoath/tailwindcss-typography-rtl'),
        require('daisyui'),
        plugin(function ({ addBase }) {
            addBase({
                html: { direction: 'rtl', scrollBehavior: 'smooth' },
            });
        }),
    ],

    daisyui: {
        themes: ['light', 'dark'],
    },
};
