import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                100: "repeat(100, minmax(0, 1fr))",
                15: "repeat(15, minmax(0, 1fr))",
                20: "repeat(20, minmax(0, 1fr))",
                25: "repeat(25, minmax(0, 1fr))",
                30: "repeat(30, minmax(0, 1fr))",
                35: "repeat(35, minmax(0, 1fr))",
                40: "repeat(40, minmax(0, 1fr))",
                45: "repeat(45, minmax(0, 1fr))",
                50: "repeat(50, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                100: "repeat(100, minmax(0, 1fr))",
            },
        },
    },

    plugins: [forms, require("flowbite/plugin")],
};
