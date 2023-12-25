import '../styles/globals.css';
import Layout from './Layout';
import Transition from '@/_components/Transition';


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
        <dev className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </dev>
    </Layout>

  )
}

export default MyApp;
