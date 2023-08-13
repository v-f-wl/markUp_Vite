import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <header className='sm:px-16 px-6 flex justify-center items-center'>
        <div className="xl:max-w-[1280px] w-full">
          <Navbar/>
        </div>
      </header>
      <div className="flex justify-center items-start bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <Hero/>
        </div>
      </div>
      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className="xl:max-w-[1280px] w-full">
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App