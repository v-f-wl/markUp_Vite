import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="flex justify-center items-center sm:py-16 py-6 flex-col">
      <div className="flex justify-center items-start flex-col md:flex-row mb-8 w-full gap-10">
        <div className="flex-1 flex flex-col justify-start gap-4">
          <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[370px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(link => (
            <div key={link.footerLinks} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-lg text-white">{link.title}</h4>
              <ul className="flex flex-col gap-4 mt-4">
                {link.links.map((item) => (
                  <li 
                    key={item.name}
                    className="font-poppins font-normal text-base text-dimWhite hover:text-secondary cursor-pointer transition-colors"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 w-full flex-wrap border-t border-gray-300/30">
        <p className="font-poppins  text-lg text-white">Copyright 2021 HooBank. All Rights Reserved.</p>

        <div className="flex gap-2 md:gap-6 md:mt-0 mt-6">
          {socialMedia.map(item => (
            <img 
              key={item.link} 
              src={item.icon} 
              alt={item.id} className="w-[21px] h-[21px] object-contain cursor-pointer" />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer