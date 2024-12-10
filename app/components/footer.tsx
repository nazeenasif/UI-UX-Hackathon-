import Image from 'next/image';
import Logo from '../../../assets/Logo.png'

export default function Footer(){
    return(
    <>
    <div className='w-[1440px] h-[480px] top-[2244px]  bg-[#FFFFFF]'>
      <div className="flex justify-between">
        <div className="w-[292px] h-[108px] top-20 left-[60px] px-16 py-20 gap-4 ">
            <Image src={Logo} alt=''/>
            <div className='w-[292px] h-[48px] font-medium text-base leading-[24px] tracking-[-0.02em] text-[#13131399] mt-7'>
                Our vision is to provide convenience <br/> and help increase your sales business.
            </div>
        </div>
        <div className='flex py-20 gap-16 '>
          <div className='w-[152px] h-56 top-20 left-[804px] '>
            <div className='w-[152px] h-8 left-[804px] font-semibold text-xl leading-[30px] tracking-[-0.02em] text-[#1A202C]'>About</div>
            <div className='w-[152px] h-[188px] top-[136px] left-[804px] font-medium text-base leading-[24px] tracking-[-0.02em] text-[#13131399] py-4'>
               <p className='py-3'>How it works</p>
               <p className='py-3'>Featured</p>            
               <p className='py-3'>Partnership</p>
               <p className='py-3'>Bussiness Relation</p>
            </div>
          </div>
          <div className='w-[152px] h-56 top-20 left-[1016px] '>
            <div className='w-[152px] h-8 top-20 left-[1016px] font-semibold text-xl leading-[30px] tracking-[-0.02em] text-[#1A202C]'>Community</div>
            <div className='w-[152px] h-[188px] top-[136px] left-[1016px] font-medium text-base leading-[24px] tracking-[-0.02em] text-[#13131399] py-4 '>
              <p className='py-3'>Events</p>
              <p className='py-3'>Blog</p>              
              <p className='py-3'>Podcast</p>
              <p className='py-3'>Invite a friend</p>
            </div>
          </div>
          <div className='w-[152px] h-56 top-20 left-[1228px] '>
            <div className='w-[152px] h-8 left-[804px] font-semibold text-xl leading-[30px] tracking-[-0.02em] text-[#1A202C]'>Socials</div>
            <div className='w-[152px] h-[188px] top-[136px] left-[1016px] font-medium text-base leading-[24px] tracking-[-0.02em] text-[#13131399] py-4'>
               <p className='py-3'>Discord</p>
               <p className='py-3'>Instagram</p>
               <p className='py-3'>Twitter</p>            
               <p className='pt-3'>Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center pl-16 '>
        <div  className='w-[1320px] top-[360px] left-[1380px] rotate-180 border-t border-[1px] border-[#13131329]'></div>
      </div>
      <div className='text-[#1A202C] flex justify-between pl-16 pt-8'>
        <div className='w-[292px] h-6 top-[369px] left-[60px] font-semibold text-base leading-6 tracking-[-0.02em]'>©2022 MORENT. All rights reserved</div>
        <div className='flex pr-16'>
          <div className='w-[144px] h-6 top-[396px] left-[1032px] font-semibold text-base leading-6 tracking-[-0.02em] text-right'>Privacy & Policy</div>
          <div className='w-[144px] h-6 top-[396px] left-[1236px] font-semibold text-base leading-6 tracking-[-0.02em] text-right'>Terms & Condition</div>
        </div>
      </div>
      </div>    
      </>
    );
  };








