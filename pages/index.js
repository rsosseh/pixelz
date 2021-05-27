import Head from 'next/head';
import PixelzBody from '../components/PixelzBody';
import React from 'react';

class Home extends React.Component{
  static async getInitialProps(ctx) {
    const res = await fetch('https://m4dv5tc2t8.execute-api.us-east-1.amazonaws.com/Prod/helloWorld')
    const json = await res.json()
    return { 
            title: json.title, 
            desc: json.desc,
            sprite_1: json.sprite_1,
            sprite_2: json.sprite_2,
            sprite_3: json.sprite_3,
            body_image: json.body_image
          }
  }
  render(){
    const { title, desc, sprite_1, sprite_2, sprite_3, body_image } = this.props;
    return(
      <div>
        <Head>
          <title>pixelz</title>
          <meta name="description" content="page about pixels" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        </Head>
        <PixelzBody title={title} 
          desc={desc} 
          sprite_1={sprite_1}
          sprite_2={sprite_2}
          sprite_3={sprite_3}
          body_image={body_image}
        />
      </div>
    )
  }
}

export default Home;
