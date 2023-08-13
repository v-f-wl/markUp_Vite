import { stats } from '../constants/index'

const Stats = () => {
  return (
    <section className='flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6'>
      {stats.map(item => (
        <div key={item.id} className="flex justify-start flex-row m-3 flex-1  items-center gap-3">
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {item.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats