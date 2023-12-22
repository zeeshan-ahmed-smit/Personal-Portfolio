import '../styles/globals.css';
import Layout from './Layout';
import Transition from '@/_components/Transition';

import { useRouter } from 'next/router';
import {  motion ,AnimatePresence} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.dev className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.dev>
      </AnimatePresence>
    </Layout>

  )
}

export default MyApp;
