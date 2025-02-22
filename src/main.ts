import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import { captions } from './captions.ts'

i18next.init({
  lng: 'es',
  interpolation: {
    escapeValue: false
  },
  fallbackLng: false,
  resources: {
    es: {
      translation: captions.spa
    },
    en: {
      translation: captions.eng
    }
  }
});

const application = createApp(App)
application.use(I18NextVue, {i18next});

application.mount('#app')
