import { apple, bill, google } from '../assets'
import {Title, Br, Paragraph} from "./UI/Typography"

const Billing = () => {
  return (
    <section id='product' className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="billing" className="w-full h-full relative z-10" />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className="flex-1 flex justify-center items-start flex-col gap-5">
        <Title>
          Easily control your <Br/>
          billing & invoicing.
        </Title>
        <Paragraph text='Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.' />
        <div className="flex gap-10 flex-wrap sm:mt-10 mt-6">
          <div className="w-[128px] h-[42px] relative">
            <img src={apple} alt="app store icon" className="w-full h-full object-contain cursor-pointer" />
            <a href="#" className="absolute inset-0 z-10"></a>
          </div>
          <div className="w-[128px] h-[42px] relative">
            <img src={google} alt="google store icon" className="w-full h-full object-contain cursor-pointer" />
            <a href="#" className="absolute inset-0 z-10"></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Billing