import { ReactNode } from 'react'
import { notFound } from 'next/navigation'

const locales = ['en', 'es']

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: ReactNode
    params: { locale: string}
}) {
    
    if (!locales.includes(locale)) {
        notFound()
    }

    return children
}