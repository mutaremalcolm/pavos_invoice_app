import i18n from '../../lib/i18n'

export default async function Home({ params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;

  // Initialize i18n on the server size
  await i18n.changeLanguage(locale);

  // Use i18n.t() directly for server-side translations
  const t = (key: string, options?: Record<string, unknown>) => i18n.t(key, { ns: 'common', ...options}) as string;

  return (
    <div>
      <h1>{t('welcome')}</h1>
         <p>{t('hello', { name: 'John'})}</p>
    </div>
  );
}
