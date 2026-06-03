import type { Metadata } from 'next'
import './globals.css'
import Navbar from './Navbar'

export const metadata: Metadata = {
  title: 'FoodHub',
  description: 'Online Food Ordering System',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <footer className="text-center text-gray-400 text-sm py-6 mt-10 border-t bg-white">
          &copy; 2025 FoodHub
        </footer>
      </body>
    </html>
  )
}
