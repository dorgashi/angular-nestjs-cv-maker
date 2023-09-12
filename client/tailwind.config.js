/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,ts}',
        './src/**/**/*.{html,ts}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
