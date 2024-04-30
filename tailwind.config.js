/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                "clr-Primary-Orange": "hsl(26, 100%, 55%)",
                "clr-Pale-orange": "hsl(25, 100%, 94%)",
                "clr-Very-dark-blue": "hsl(220, 13 %, 13 %)",
                "clr-Dark-grayish-blue": "hsl(219, 9%, 45%)",
                "clr-Grayish-blue": "hsl(220, 14%, 75%)",
                "clr-Light-grayish-blue": " hsl(223, 64%, 98%)",
                "clr-White": "hsl(0, 0%, 100%)",
                "clr-light-black-overlay": "#000000ab",
            },
            gridTemplateColumns: {
                "40%1fr": "40% 1fr",
            },
            container: {
                center: true,
                padding: "15px",
                screens: {
                    "576px": "540px",
                    "768px": "720px",
                    "992px": "960px",
                    "1200px": "1140px",
                    "1400px": "1320px",
                },
            },
        },
    },
    plugins: [],
};
