import { ReactNode } from 'react'
import { notFound } from 'next/navigation'

const locales = ['en', 'es']

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode
    params: Promise<{ locale: string}>
}) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound()
    }

    return children
}