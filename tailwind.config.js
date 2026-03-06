import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EE5F0F",
          50: "#fff3ea",
          100: "#ffe4ce",
          200: "#ffc89d",
          300: "#ffaa6c",
          400: "#ff8c3b",
          500: "#ff5a00",
          600: "#e64e00",
          700: "#cc4300",
          800: "#a33600",
          900: "#802b00",
        },
        dark: {
          DEFAULT: "#0f0f0f",
          lighter: "#1a1a1a",
          card: "#18181b",
        }
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#EE5F0F",
              foreground: "#ffffff",
            },
          }
        }
      }
    }
    )
  ]
}

