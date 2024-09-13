import { defineStore } from 'pinia';
import pjson from '~/../package.json';

export const useAppStore = defineStore('app', () => {
  const version = `v${pjson.version}`;

  return { version };
});
