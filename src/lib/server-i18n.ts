import i18n from './i18n'

export async function getServerTranslation(locale: string) {
    await i18n.changeLanguage(locale);
    return i18n.t;
}