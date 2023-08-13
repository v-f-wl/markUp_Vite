import Button from "./Button"
import { Paragraph, Title } from "./UI/Typography"

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-3xl box-shadow gap-6">
      <div className="flex-1 flex flex-col">
        <Title>
          Let’s try our service now!
        </Title>
        <Paragraph text='Everything you need to accept card payments and grow your business anywhere on the planet' className='mt-4'/>
      </div>
      <Button title='Get Started'/>
    </section>
  )
}

export default CTA