import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@/components/commons/context/context";
import {prefix} from '../../config/config'
import { Global } from "@emotion/react";
import {RecoilRoot} from "recoil";
import Layout from "@/components/commons/layout";
import {globalStyles} from "@/commons/styles/globalStyles";

export default function App({Component, pageProps}: AppProps) {
  return <ThemeProvider value={{prefix}}>
    <RecoilRoot>
      <Global styles={globalStyles}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  </ThemeProvider>
}