import 'globals.css'
import Layout from "@/components/Layout";
// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const { Component } = require("react");

function MyApp({Component,pageProps}){
  return(
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp