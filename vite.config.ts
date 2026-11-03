import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: mode === 'development'
        ? {
            plugins: [
              'react-dev-locator',
            ],
          }
        : undefined,
    }),
    tsconfigPaths()
  ],
}))
