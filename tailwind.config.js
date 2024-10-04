/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#5298b8", //light blue
                secondary: "0F0F0F",
                blue: "#5298b8",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#5298b8", // light blue
                    secondary: "#0F0F0F", // dark
                },
            },
        ],
    },
};
