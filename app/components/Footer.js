import ChildFooter from "./ChildFooter"
import Social from "./Social"
function Footer() {
  return (
    <div className="flex justify-around ">
        <div className="w-[604px] h-[112px]">
            <ChildFooter heading="Need Help ?" one="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
Sor kvasikilig i trav. Lan kvasilögisk."/>
            <div className="flex mt-[23px]">
                <Social location="./facebook.svg" address="https://www.facebook.com/"/>
                <Social location="./image2.svg" address="https://fonts.google.com/selection/embed"/>
                <Social location="./image.svg" address="https://fonts.google.com/selection/embed"/>
                <Social location="./image1.svg" address="https://fonts.google.com/selection/embed"/>
                <Social location="./image1.svg" address="https://fonts.google.com/selection/embed"/>
            </div>
        </div>
        <div className="flex justify-between w-[534px] h-[198px]">
            <ChildFooter heading="About" one="para1" two="para2" three="para3" four="para4"/>
            <ChildFooter heading="Services" one="para1" two="para2" three="para3" />
            <ChildFooter heading="Others" one="para1" two="para2"/>

        </div>

    </div>
  )
}

export default Footer