import { clients } from "../constants"


const Client = () => {
  return (
    <section className="my-4">
      <div className="flex justify-center md:justify-between items-center flex-wrap w-full gap-5">
        {clients.map(item => (
          <div key={item.id} className="md:w-[190px] w-[100px]">
            <img src={item.logo} alt="client" className="w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client