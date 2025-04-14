import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./store/index";
import en from "./translation/en.json";
import uk from "./translation/uk.json";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <App />
  </Provider>
  </I18nextProvider>
  </StrictMode>,
)