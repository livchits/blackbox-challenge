import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh(), svgr()],
};
