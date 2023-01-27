import { NextPage } from 'next'
import Head from 'next/head';
import Hero from '../src/components/Hero'

const HomePage : NextPage = () => {
  return (
    <div>
      <Head>
        <title>E-minor</title>
        <meta name='description' content='get ai-generate artwork out of your fav song lyrics'/>
      </Head>
      <Hero/>
    </div>
  );
  
}

export default HomePage;