import { ThemeProvider } from '@/context/themeContext';
import '../styles/globals.css'
import type { AppProps } from "next/app";
import { League_Spartan } from 'next/font/google'
import { Navbar } from '@/components/Navbar';

const leagueSpartan = League_Spartan({
  weight: ['700', '400'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${leagueSpartan.className}  min-h-screen bg-invoice-light dark:bg-invoice-dark flex flex-col lg:flex-row`}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
