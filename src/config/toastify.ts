import { Options } from 'vue3-toastify';

export const toastifyOptions: Options = {
  position: 'bottom-left',
  theme: 'dark',
  transition: 'bounce',
  // autoClose: false,
  autoClose: 2000, // Automatically close after 2 seconds
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: true,
  closeButton: false,
};
