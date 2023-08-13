import { features } from "../constants"
import Button from './Button'
import {Title, Br, Paragraph} from "./UI/Typography"

const FeatureCard = ({icon, title, content}) => {
  return (
    <div className="flex flex-row gap-8 p-6 rounded-[20px] feature-card">
      <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
        <img src={icon} alt="image" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-white">
        <h3 className="font-poppins font-semibold text-lg leading-6">
          {title}
        </h3>
        <p className="font-poppins font-normal text-dimWhite text-base leading-6">
          {content}
        </p>
      </div>
    </div>
  )
}
const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <Title>
          You do the business, <Br/> we&#8217;ll handle the money.
        </Title>
        <Paragraph text='With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.' />
        <Button styles='mt-10' title='Get Started'/>
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col gap-6">
        {features.map((item) => (
          <FeatureCard key={item.id} icon={item.icon} title={item.title} content={item.content}/>
        ))}
      </div>
    </section>
  )
}

export default Business