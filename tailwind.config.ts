export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton SC"', "sans-serif"],
        caveat: ["Caveat", "cursive"],
        ibm: ['"IBM Plex Mono"', "monospace"],
        jetbrains: ['"JetBrains Mono"', "monospace"],
        kanit: ["Kanit", "sans-serif"],
        patrick: ['"Patrick Hand SC"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ['"Rubik Spray Paint"', "cursive"],
        shantell: ['"Shantell Sans"', "cursive"],
        space: ['"Space Mono"', "monospace"],
        zcool: ['"ZCOOL KuaiLe"', "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        night: "#152357", // Dark blue for night sky
        sunset: "#2c55db", // Sky blue for sunset/sunny sky
        sunrise: "#efb456", // Yellow-orange for the sun
        twilight: "#171e36",
      },
      backgroundImage: {
        "night-sky": "linear-gradient(30deg, #152357, #171e36)",
        "sunny-sky":
          "radial-gradient(circle at top right, #efb456, #2c55db, #152357)",
      },
    },
  },
  plugins: [],
} satisfies Config;
