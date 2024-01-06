// section components
import Header from '@/_components/Header'
import Nav from '@/_components/Nav'
import TopLeftImg from '@/_components/TopLeftImg'
import About from '@/_sections/About'
import Contact from '@/_sections/Contact'
import Home from '@/_sections/Home'
import Services from '@/_sections/Services'
import Work from '@/_sections/Work'



const index = () => {

  return (
    <div className='w-full h-full bg-site text-white bg-cover bg-no-repeat fon-sora relative'>
      <TopLeftImg />
      <Nav />
      <Header />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default index;