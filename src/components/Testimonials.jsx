import { feedback } from "../constants"
import FeedbackCard from './FeedbackCard'
import {Title, Br} from "./UI/Typography"

const Testimonials = () => {
  return (
    <section id='clients' className="sm:py-16 py-6 flex justify-center items-center flex-col relative gap-5">
      <div className="absolute z-0 w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient"/>
      <div className="flex justify-between w-full items-start md:items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <Title>
          What people are <Br/> saying about us
        </Title>
        <div className="md:mt-0 mt-6 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </div>
      </div>
    <div className="flex  gap-5 md:gap-10 flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((item) => (
        <FeedbackCard 
          key={item.id} 
          content={item.content} 
          name={item.name} 
          title={item.title} 
          img={item.img}
        />
      ))}
    </div>
    </section>
  )
}

export default Testimonials