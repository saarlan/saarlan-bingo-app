// Plugins
import vuetify from './vuetify';
import pinia from '../store';
import router from '../router';
import Vue3Toastify from 'vue3-toastify';
import mitt from 'mitt';

// Types
import type { App } from 'vue';
import { toastifyOptions } from '../config/toastify';

import { EventBus } from '~/symbols';
import { BusEvents } from '~/events';

const emitter = mitt<BusEvents>();

export function registerPlugins(app: App) {
  app
    .provide(EventBus, emitter) // event bus
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Vue3Toastify, toastifyOptions);
}
