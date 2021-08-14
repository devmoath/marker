const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,

    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: 'media',

    theme: {
        extend: {},
    },

    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@devmoath/tailwindcss-typography-rtl'),
        plugin(function ({ addBase }) {
            addBase({
                html: { direction: 'rtl', scrollBehavior: 'smooth' },
            });
        }),
    ],
};
