
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

export  const metadata = {
  title: 'Zeeshan Ahmed | Web Developer',
  description: 'Front-End Developer',
};


const Layout = ({ children }) => {
  return (
    <div className={`${sora.variable} ${lobster.variable} `}>
      {children}
    </div>
  )
};

export default Layout;
