import Head from 'next/head';
import PixelzBody from '../components/PixelzBody';

export default function Home() {
  return (
    <div>
      <Head>
        <title>pixelz</title>
        <meta name="description" content="page about pixels" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>
      <PixelzBody />
    </div>
  )
}
