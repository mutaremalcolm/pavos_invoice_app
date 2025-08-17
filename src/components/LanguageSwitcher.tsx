'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' 

const locales = ['en', 'es']

export default function LanguageSwitcher() {
    const pathname = usePathname()

    const getCurrentLocale = () => {
        return pathname.split('/')[1] || 'en'
    }

    const getNewPath = (newLocale: string) => {
        const segments = pathname.split('/')
        segments[1] = newLocale
        return segments.join('/')
    }

    return (
        <div>
            {locales.map((locale) => (
                <Link
                    key={locale}
                    href={getNewPath(locale)}
                    style={{
                        margin: '0 10px',
                        fontWeight: locale === getCurrentLocale() ? 'bold' : 'normal'
                    }}
                >
                    {locale.toUpperCase()}
                </Link>
            ))}
        </div>
    )
}