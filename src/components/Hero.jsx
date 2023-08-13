import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section 
      id='home' 
      className='flex flex-col md:flex-row sm:py-16 py-6'
    > 
      <div 
        className='
          px-6
          sm:px-16 
          xl:px-10 
          flex justify-center items-start
          flex-1 
          flex-col 
        '
      >
        <div className="flex gap-x-3 items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8"/>
          <p className='flex gap-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
            <span className="text-white">20%</span>
            DISCOUNT FOR
            <span className="text-white">1 MONTH</span>
            ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className='sm:block hidden'/>
            <span className="text-gradient">
              Generation
            </span> <br className='sm:block hidden'/>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">Payment Method.</h2>
        <p className="font-poppins font-normal text-dimWhite text-lg leading-[30.8px] max-w-[470px] mt-5">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img src={robot} alt="billing" className='w-full h-full relative z-10'/>

        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-[80%] h-[80%] founded-full bottom-40 white__gradient "></div>
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient "></div>
      </div>
      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero