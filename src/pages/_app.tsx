import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import './Menu.scss'
import type { AppProps } from 'next/app'
import Menu from '../components/Block/Menu'

export default function App({ Component, pageProps }: AppProps) {
  return <><Menu /><Component {...pageProps} /></>
}
