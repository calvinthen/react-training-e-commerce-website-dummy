import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  theme:{
    extend:{
      colors:{
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    }
  }
})
