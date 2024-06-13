import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3142,
    strictPort: false,
  },
  preview: {
    host: "0.0.0.0",
    port: '4220'
  },
  plugins: [
    vue(),
    UnoCSS(),
    viteSingleFile(),
    viteBuildScript()
  ],
})


function viteBuildScript() {
  return {
    name: 'vite-build-script',
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === 'production') {
        return html.replace(/<body>/, `<body><script data-website-id="3f2943a6-8acf-4178-ac46-f03513479632" async src="https://stats.chromatone.center/script.js"></script>`);
      }
      return html;
    },
  };
}