// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import type { Options as AutoImportOptions } from 'unplugin-auto-import/types';
import Components from 'unplugin-vue-components/vite';
import type { Options as ComponentsOptions } from 'unplugin-vue-components/types';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';
import type { Options as FontsOptions } from 'unplugin-fonts/types';
import importMetaEnv from '@import-meta-env/unplugin';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// Utilities
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

//#region options
const autoImportOptions: AutoImportOptions = {
  imports: [
    'vue',
    'vue-router',
    '@vueuse/core',
    {
      from: 'vue3-toastify',
      imports: ['toast'],
    },
  ],
  dirs: ['src/composables', 'src/store'],
  dts: 'src/auto-imports.d.ts',
  eslintrc: {
    enabled: true,
  },
  vueTemplate: true,
};

const componentsOptions: ComponentsOptions = {
  dts: 'src/components.d.ts',
  directoryAsNamespace: true,
  collapseSamePrefixes: true,
  dirs: [
    'src/components/common',
    'src/components/dialogs',
    'src/components/drawers',
    'src/components/layout',
    'src/components/modules',
    'src/components/lib',
  ],
  extensions: 'vue',
};

const fontsOptions: FontsOptions = {
  google: {
    families: [
      {
        name: 'Comfortaa',
        styles: 'wght@100;300;400;500;700;900',
      },
    ],
  },
};

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Smarthome Rules',
    short_name: 'Smarthome Rules',
    description: 'Smarthome Rule Management',
    start_url: '.',
    display: 'standalone',
    background_color: '#4651b1',
    theme_color: '#4651b1',
    icons: [
      {
        src: 'icon/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: 'icon/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: 'icon/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icon/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'icon/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'icon/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    screenshots: [
      //TODO add screenshots
      {
        src: 'icon/android-icon-192x192.png',
        form_factor: 'narrow',
        sizes: '320x320',
      },
      {
        src: 'icon/android-icon-192x192.png',
        form_factor: 'wide',
        sizes: '320x320',
      },
    ],
  },
  workbox: {
    navigateFallback: '/',
    clientsClaim: true,
    skipWaiting: true,
  },
  devOptions: {
    enabled: true,
    type: 'module',
  },
};
//#endregion

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), ''),
  };
  console.log('API_BASE_URL', process.env.API_BASE_URL);

  return defineConfig({
    plugins: [
      importMetaEnv.vite({ env: '.env.local', example: '.env.example.public' }),
      AutoImport(autoImportOptions),
      Components(componentsOptions),
      Vue({
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify({ autoImport: true }),
      ViteFonts(fontsOptions),
      VitePWA(pwaOptions),
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  });
};
