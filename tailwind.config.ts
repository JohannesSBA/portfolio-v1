import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "teal-blue": {
          "50": "#e9ffff",
          "100": "#c8ffff",
          "200": "#99feff",
          "300": "#53f9ff",
          "400": "#06eaff",
          "500": "#00ccf1",
          "600": "#00a1ca",
          "700": "#007fa2",
          "800": "#086682",
          "900": "#0a4a61",
          "950": "#00384c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
