import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAE Web|Mul',
  description: 'Site relatant le développment de la bombe atomique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">{children}</body>
    </html>
  )
}
