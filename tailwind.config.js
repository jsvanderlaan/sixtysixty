/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                intro: '#92d14f',
                q1: '#fdeb03',
                q2: '#dc98ff',
                q3: '#feff00',
                q4: '#ff32cb',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
