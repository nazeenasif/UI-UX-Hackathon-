import Image from 'next/image';
import Ad  from '../../../assets/Ads 1.png';
import Ads from '../../../assets/Ads 2.png';
import Switch from '../../../assets/Switch.png';
import Catalog1 from '../../../assets/popular car/Catalog 1.png';
import Catalog2 from '../../../assets/popular car/Catalog 2.png';
import Catalog3 from '../../../assets/popular car/Catalog 3.png';
import Catalog4 from '../../../assets/popular car/Catalog 4.png';
import Catalog01 from '../../../assets/recommendation/Catalog 1.png'; 
import Catalog02 from '../../../assets/recommendation/Catalog 2.png'; 
import Catalog03 from '../../../assets/recommendation/Catalog 3.png'; 
import Catalog04 from '../../../assets/recommendation/Catalog 4.png';
import Catalog05 from '../../../assets/recommendation/Catalog 5.png';
import Catalog06 from '../../../assets/recommendation/Catalog 6.png';
import Catalog07 from '../../../assets/recommendation/Catalog 7.png';
import Catalog08 from '../../../assets/recommendation/Catalog 8.png';
import Pickup from '@/app/components/pickup';
import DropOff from '@/app/components/dropoff';

export default function Hero(){
    return(
        <div className='w-[1440px] h-[2120px] top-[124px] bg-[#F6F7F9] '>
            <div className='flex justify-center py-8 gap-[30px]'>
                <Image src={Ad} alt=''/>
                <Image src={Ads} alt=''/>
            </div>
            <div className='flex pl-16'>
                <Pickup/>
                <Image src={Switch} alt=''/>
                <DropOff/>
            </div>
            <div className='w-[1312px] h-[1356px] top-[592px] left-16 gap-8'>
                <div className='w-[1312px] h-[452px] gap-5 '>
                    <div className='w-[1312px] h-11 gap-[1076px] flex justify-between pl-16 pt-11 '>
                        <div className='w-[132px] h-11 px-5 gap-2'>
                            <p className='w-[92px] h-6 font-semibold text-base leading-[20.16px] text-center text-[#90A3BF] '>Popular Car</p>
                        </div>
                        <div className='w-[104px] h-11 rounded-[4px] px-5 gap-2'>
                            <div className='w-[64px] h-6 font-semibold text-base leading-[20.16px] text-center text-[#3563E9] '>View All</div>
                        </div>
                    </div>
                    <div className='w-[1312px] gap-8 flex justify-between pl-16 pt-11 '>
                        <Image src={Catalog1} alt=''/>
                        <Image src={Catalog2} alt=''/>
                        <Image src={Catalog3} alt=''/>
                        <Image src={Catalog4} alt=''/>
                    </div>
                </div>
                <div className='w-[1312px] h-[872px] gap-5 '>
                    <div className= 'rounded-[4px]  gap-2 font-semibold text-base leading-[20.16px] text-[#90A3BF] pt-16 pl-24 '>
                      Recomendation Car
                    </div>
                    <div className='w-[1312px] h-[808px] gap-8 pl-16 py-8'>
                        <div className='w-[1312px] h-[388px] gap-8 flex '>
                            <Image src={Catalog01} alt=''/>
                            <Image src={Catalog02} alt=''/>
                            <Image src={Catalog03} alt=''/>
                            <Image src={Catalog04} alt=''/>
                        </div>
                        <div className='w-[1312px] h-[388px] gap-8 flex pt-8 '>
                            <Image src={Catalog05} alt=''/>
                            <Image src={Catalog06} alt=''/>
                            <Image src={Catalog07} alt=''/>
                            <Image src={Catalog08} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' left-[642px] flex flex-row justify-between pt-14 pl-[645px]'>
                <button className='w-[156px] h-11 rounded-[4px] px-5 gap-2 bg-[#3563E9] font-semibold text-[#FFFFFF] text-base leading-6 tracking-[-0.02em] text-center '>
                    Show more car
                </button>
                <div className='text-[#90A3BF] font-medium text-sm leading-[21px] tracking-[-0.02em] pr-16 '>120 Car</div>
            </div>
        </div>
    );
};