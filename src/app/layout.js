import Footer from "components/Footer";
import Header from "components/Header";
import 'styles/globals.css'

export default function Layout({ children }){
  return(

  <html lang="ja">
    <body>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </body>
  </html>
  )
}