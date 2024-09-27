// Styles
// import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/styles';
import '~/styles/lib/vuetify/main.scss';

// Composables
import { createVuetify } from 'vuetify';
import { COLORS } from '../config/colors';

// components
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { VTimePicker } from 'vuetify/labs/VTimePicker';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VNumberInput,
    VTimePicker,
  },

  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: COLORS.background,
          surface: COLORS.backgroundDarken1,
          'surface-light': COLORS.background,
          primary: '#bcc956',
          secondary: COLORS.purple,
          error: '#c15b56',
          warning: COLORS.yellow,
          success: COLORS.green,
          info: '#6196d1',
          'on-background': COLORS.text,
          'on-surface': COLORS.textLight,
        },
      },
      table: {
        dark: true,
        colors: {
          background: COLORS.backgroundDarken1,
          surface: COLORS.background,
          'surface-light': COLORS.backgroundDarken1,
          primary: '#bcc956',
          secondary: COLORS.purple,
          error: '#c15b56',
          warning: COLORS.yellow,
          success: COLORS.green,
          info: '#6196d1',
          'on-background': COLORS.text,
          'on-surface': COLORS.textLight,
        },
      },
    },
  },
  defaults: {
    VAutocomplete: {
      color: 'primary',
      density: 'comfortable',
      variant: 'filled',
      hideDetails: 'auto',
    },
    VCheckbox: {
      color: 'primary',
      density: 'comfortable',
      hideDetails: 'auto',
    },
    VTextField: {
      color: 'primary',
      density: 'comfortable',
      variant: 'filled',
      hideDetails: 'auto',
    },
    VTextarea: {
      color: 'primary',
      density: 'comfortable',
      variant: 'filled',
      hideDetails: 'auto',
    },
    VNumberInput: {
      color: 'primary',
      density: 'comfortable',
      variant: 'filled',
      hideDetails: 'auto',
      controlVariant: 'split',
    },
    VBtnToggle: {
      color: 'primary',
      density: 'compact',
      variant: 'flat',
    },
    VSelect: {
      color: 'primary',
      density: 'comfortable',
      variant: 'filled',
      hideDetails: 'auto',
    },
    VDataTableServer: {
      color: 'primary',
      fixedHeader: true,
      fixedFooter: true,
    },
    VTooltip: {
      openDelay: 500,
      activator: 'parent',
    },
    VDialog: {
      maxWidth: 640,
    },
  },
});
