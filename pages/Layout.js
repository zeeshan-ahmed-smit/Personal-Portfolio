import Header from '@/_components/Header';
import Nav from '@/_components/Nav';
import TopLeftImg from '@/_components/TopLeftImg';
import { Lobster,Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})
const lobster = Lobster({
  subsets: ['latin'],
  variable: '--font-lobster',
  weight: ['400'],
})


const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat fon-sora relative  ${sora.variable} ${lobster.variable} `}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
};

export default Layout;
