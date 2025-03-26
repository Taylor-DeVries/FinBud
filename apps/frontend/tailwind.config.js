/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
        '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
        //     ...createGlobPatternsForDependencies(__dirname)
      ],
    theme: {
        extend: {
            colors: {
                secondary: "0F0F0F",
                blue: "#5298b8",
                dark_blue: "#3a6d85",
                light_blue: "#639db8",
                light_blue_bg: "#f8fafc"
            },
            screens: {
                lg: { min: "1025px" }, // screens larger than 1024px
                md: { min: "769px" }, // screens larger than 768px
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
