import { Emitter } from 'mitt';
import { InjectionKey } from 'vue';
import { BusEvents } from './events';

export const EventBus: InjectionKey<Emitter<BusEvents>> = Symbol('bus');
