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
                midnight: ['"Midnight"', ...defaultTheme.fontFamily.sans],

            },
            scale: {
                '70': '.70',
            },
            colors:{
                primary: '#9E0B26',
                secondary: '#C9C4C0',
            },
            backgroundImage: theme => ({
                'background-image': "url('/images/portada/feria_Huancaro_portada.webp')",
                'manto': "url('/public/images/paginaPrincipal/fondo_manto.png')",
                'concrete': "url('/public/images/paginaPrincipal/concrete_bg.jpg')",
                'concrete-50': "url('/public/images/paginaPrincipal/concrete-50.png')",

              })
        },
    },

    plugins: [forms, require("flowbite/plugin")],
};
