import React from 'react'
import ParaImg from './ParaImg';
import image1 from "../../public/image.svg" 
import image2 from "../../public/image1.svg" 
import image3 from "../../public/image2.svg" 
import ParaContent from './ParaContent.js';
const CenterContent = () => {
  return (
    <div className='text-white'>
        <div>
            <div className="flex justify-around items-center ">
                <ParaImg img2dis={image1} />
                <ParaContent heading="Blue Crystal Ice " content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
                Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede. 
                Fibes fydogt fide men låren. Episkap preskapet synlogi " />
            </div>

            <div className="flex justify-around items-center">
                <ParaContent heading="MAGICAL TONIC" content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
                Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede. 
                "/> 
                <ParaImg img2dis={image2} />
            </div>

            <div className="flex justify-around items-center  mb-20">
            <ParaImg img2dis={image3} />
            <ParaContent heading="IPSUM ISLAND" content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
            Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede. 
            "/>
            </div>
        </div>
    </div>
  )
}

export default CenterContent