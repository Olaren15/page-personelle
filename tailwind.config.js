/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {},
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ],
    darkMode: 'class'
}
