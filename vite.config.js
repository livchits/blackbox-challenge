import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import ViteFonts from 'vite-plugin-fonts';

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [
    reactRefresh(),
    svgr(),
    ViteFonts({
      google: {
        families: [{ name: 'Ubuntu', styles: 'wght@500;700' }],
      },
    }),
  ],
};
