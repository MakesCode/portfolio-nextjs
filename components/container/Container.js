/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Navbar from '../navbar/Navbar'

export default function Container(props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Fredericka+the+Great&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      {props.children}
      {/* <Footer /> */}
    </div>
  )
}