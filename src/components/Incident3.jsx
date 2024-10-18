import React from 'react'

function Incident3() {
  return (
    <>
        <div className='w-full flex justify-center items-center mt-8 md:p-0 p-5'>
            <div>
                <h1 className='text-[24px] text-[#09090B] font-bold pb-2'>Let’s give the incident a title?</h1>
                <p className='text-[14px] text-[#72727a] pb-4'>Make a title that will easily identify the incidents</p>
                <input className='md:w-[752px] md:h-[50px] w-full h-[50px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]' type="text"  placeholder='Add title here'/>



                <h1 className='text-[24px] text-[#09090B] font-bold pt-8 pb-2'>Describe what happened during the incident?</h1>
                <p className='text-[14px] text-[#72727a] pb-4'>Share some information about the incident. The when, where, how. </p>
                <textarea  className='md:w-[752px] md:h-[127px] w-full h-[127px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]' placeholder='Type here'></textarea>


            </div>

            

            
        </div>
    </>
  )
}

export default Incident3