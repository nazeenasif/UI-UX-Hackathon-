import Image from 'next/image';
import Frame from '../../../assets/Frame.png';
import PickUp from '../../../assets/Pick - Up.png';

export default function Pickup(){
    return( 
        <div className='w-[582px] h-[136px] bg-[#FFFFFF] rounded-[10px] '>
                    <div className='px-10 py-6'><Image src={PickUp} alt=''/></div>
                    <div className='w-[486px] h-12 left-12 top-[60px] gap-6 flex justify-between'>
                        <div className='w-[126px] h-12 gap-2 px-10'>
                            <b className='w-[77px] h-5 font-bold text-base leading-6 tracking-[-0.02em] text-[#1A202C] '>Locations</b>
                            <div className='flex'>
                              <div className='w-[126px] h-12 gap-2 font-medium text-xs text-[#90A3BF] pt-2 '>Select your city </div>
                              <Image src={Frame} alt=''/>
                            </div>
                        </div>
                        <div className='w-[134px] h-12 gap-2 '>
                            <b className='w-12 h-5 font-bold text-base leading-6 tracking-[-0.02em] text-[#1A202C] '>Date</b>
                            <div className='w-[134px] h-5 gap-2 font-medium text-xs text-[#90A3BF] pt-2'>Select your date</div>
                            <Image src={Frame} alt=''/>
                        </div>
                        <div className='w-[130px] h-12 gap-2'>
                            <b className='w-12 h-5 font-bold text-base leading-6 tracking-[-0.02em] text-[#1A202C]'>Time</b>
                            <div className='flex'>
                             <div className='w-[130px] h-5 gap-2 font-medium text-xs text-[#90A3BF] pt-2'>Select your time</div>
                             <Image src={Frame} alt=''/>
                            </div> 
                        </div>
                    </div>
                </div>

    );
};