import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '../locales/en/common.json'
import esCommon from '../locales/es/common.json'

i18next
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                common: enCommon
            },
            es: {
                common: esCommon
            }
        }
    })

    export default i18next