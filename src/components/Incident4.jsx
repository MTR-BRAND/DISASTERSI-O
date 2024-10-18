import React from 'react'
import { IoIosSearch } from "react-icons/io";
function Incident4() {
  return (
    <>
        <div className='w-full  flex justify-center items-center'>
            <div className='mt-[40px] w-[752px] h-[589px] flex flex-col  items-start md:pb-2 p-4 md:p-0'>
            <div >
            <h1 className='text-[24px] font-bold pb-2'>Where’s the incident?</h1>
            <p className='text-[14px] text-[#71717A] '>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/> possible, or click:Jurisdiction Wide</p>
            </div>

            <div className='mt-5 relative'>
                <img className='rounded-[10px]' src="\img\map.png" alt="" />
                <div className='absolute top-3 left-3 flex flex-col gap-1'>

                {/* input setion */}
                <div className='relative'>
                    <IoIosSearch className='text-[#71717A] text-[20px] absolute top-[50%] left-[5px] translate-y-[-50%]'/>
                    <input className='w-[224px] h-[42px] bg-[#F4F4F5] text-[12px] text-[#71717A] outline-[#f26722] border-[1px] border-[#e6e6e8] rounded-[6px] py-[12px] pl-[30px]'   type="text" placeholder='Enter incident address or GPS'/>
                </div>

                <div className='relative'>
                    <IoIosSearch className='text-[#71717A] text-[20px] absolute top-[50%] left-[5px] translate-y-[-50%]'/>
                    <input className='w-[224px] h-[42px] bg-[#F4F4F5] text-[12px] text-[#71717A] outline-[#f26722] border-[1px] border-[#e6e6e8] rounded-[6px] py-[12px] pl-[30px]'   type="text" placeholder='Pinpoint damage'/>
                </div>
                {/* input setion */}

                </div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Incident4