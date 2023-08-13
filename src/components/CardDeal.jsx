import { card } from "../assets"
import Button from "./Button"
import {Title, Br, Paragraph} from "./UI/Typography"

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col gap-5">
        <Title>
          Find a better card deal <Br/> in few easy steps.
        </Title>
        <Paragraph text='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'/>
       <Button styles='mt-5 ' title='Get Started'/>
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={card} alt="image of Card" className="w-full h-full" />
      </div>
    </section>
  )
}

export default CardDeal