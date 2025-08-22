import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
    title: 'Pavos Invoice App',
    description: 'Invoice application with i18n support',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <html>
            <body>{children}</body>
        </html>
    ) 
}