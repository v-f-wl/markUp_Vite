import { quotes } from "../assets"
const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] feedback-card border text-white'>
      <img src={quotes} alt="image" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-lg leading-8 text-white my-10">
        {content}
      </p>

      <div className="flex flex-row gap-4">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col">
          <h4 className="font-poppins font-normal text-[20px] leading-8">{name}</h4>
          <p className="font-poppins font-normal text-base  text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard