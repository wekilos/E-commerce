/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                "2xs": "360px",
                xs: "414px",
                sm: "640px",
                md: "768px",
                md2: "850px",
                lg: "1024px",
                xl: "1250px",
                "2xl": "1350px",
                "2xl2": "1400px",
                "3xl": "1500px",
                "4xl": "1700px",
                "5xl": "1800px",
                "6xl": "2000px",
                "6xl2": "2100px",
                "7xl": "2350px",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                green: "#32BB78",
                "green-100": "#E0FFF0",
                "green-200": "#A1F7CD",
                "green-300": "#5AE1A0",
                "green-700": "#1D965C",
                "green-900": "#127042",
                passive: "#898D91",
                neutral: "#BFC0CB",
                "neutral-100": "#F9FAFB",
                "neutral-100-50": "#F9FAFB50",
                "neutral-200": "#F4F4F6",
                "neutral-300": "#E9EAEE",
                "neutral-400": "#D3D4DC",
                "neutral-600": "#A9ABB9",
                "neutral-700": "#818391",
                "neutral-800": "#585A68",
                "neutral-900": "#2F313F",
                "neutral-900-50": "#2F313F50",
                purple: "#5B68F6",
                "purple-100": "#EBECFF",
                "purple-200": "#B8BEFF",
                "purple-300": "#848FFF",
                "purple-700": "#4450D5",
                "purple-900": "#313887",
                red: "#EB4755",
                "red-100": "#FEE7E9",
                "red-200": "#FCC5C9",
                "red-300": "#F9868F",
                "red-700": "#c91d2b",
                "red-900": "#981b25",
                yellow: "#FFD400",
                "yellow-100": "#FFF8D6",
                "yellow-200": "#FFF0A8",
                "yellow-300": "#FFE566",
                "yellow-700": "#FFB200",
                "yellow-900": "#FF8800",
                black: "#000",
                "black-100": "#0006",
                "black-secondary": "#24292F",
                background: "rgba(242, 245, 249 ,1);",
            },
            fontSize: {
                xsm: ".813rem",
            },
            spacing: {
                128: "32rem",
                256: "64rem",
            },
        },
        // fontWeight: {
        //     thin: "100",
        //     hairline: "100",
        //     extralight: "200",
        //     light: "300",
        //     normal: "400",
        //     medium: "500",
        //     semibold: "600",
        //     bold: "700",
        //     extrabold: "800",
        //     "extra-bold": "800",
        //     black: "900",
        // },
        fontFamily: {
            regular: "gilroy-regular",
            medium: "gilroy-medium",
            semi: "gilroy-semibold",
            bold: "gilroy-bold",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
