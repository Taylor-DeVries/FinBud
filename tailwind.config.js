/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                secondary: "0F0F0F",
                blue: "#5298b8",
                dark_blue: "#3a6d85",
                light_blue: "#639db8", //"#68accc",
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
