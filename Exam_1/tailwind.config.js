/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            "animation": {
                shimmer: "shimmer 2s linear infinite"
            },
            "keyframes": {
                shimmer: {
                    from: {
                        "backgroundPosition": "0 0"
                    },
                    to: {
                        "backgroundPosition": "-200% 0"
                    }
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
