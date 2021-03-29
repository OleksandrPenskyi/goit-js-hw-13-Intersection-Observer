/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function onSucess() {
  success({
    text: 'Extra pics succesful loaded!',
    hide: true,
    styling: 'brighttheme',
    delay: 1000,
    closer: false,
    sticker: false,
    icon: true,
    animation: 'fade',
  });
}

export default onSucess;
