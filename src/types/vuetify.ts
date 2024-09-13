import { PropType, Component } from 'vue';

export type ChipSize = 'x-small' | 'small' | 'default' | 'large' | 'x-large';

export type Density = null | 'default' | 'comfortable' | 'compact';

export type InputVariant = 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled';

export type IconValue = string | (string | [path: string, opacity: number])[] | Component;
declare const IconValue: PropType<IconValue>;
