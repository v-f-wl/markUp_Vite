export const Br = () => (
    <br className="sm:block hidden" />
)

export const Title = ({children}) => {
  return ( 
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
      {children}
    </h2>
  );
}

export const Paragraph = ({ text }) => {
  return ( 
    <h2 className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
      {text}
    </h2>
  );
}
 