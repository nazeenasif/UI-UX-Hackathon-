import Image from 'next/image';
import Logo from '../../../assets/Logo.png'
import search from '../../../assets/Search.png'
import Profile from '../../../assets/Profile.png'

export default function Navabr(){
    return(
      <div className="w-[1440px] h-[124px] border-[1px] bg-[#FFFFFF] border-[#C3D4E966] flex ">
        <div className='px-16 py-10 '>
          <Image src={Logo} alt=''/>
        </div>
        <div className='px-7 py-9'>
           <Image src={search} alt=''/>
        </div>
        <div className='pl-[369px] py-9'>
          <Image src={Profile} alt=''/>
        </div>
      </div>
    );
  };