import React, { useState } from 'react'
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { HiMiniXMark } from "react-icons/hi2";




const MainCard = (props) =>{
  return(
    <>
      <div className=' relative w-[306px] hover:scale-105 transition-transform'>
            <div className='relative'>
              <img src={props.img} alt="" />
              <p className='absolute top-3 right-3 flex justify-center items-center gap-2 bg-white px-2 py-2 rounded-[50px] text-[12px] text-[#09090B] font-bold'><img className='w-[16px] black' src={props.icon} alt="" />{props.iconText}</p>
            </div>
            <p className='pt-3 text-[16px] text-[#09090B] font-bold'>{props.heading}</p>
            <p className='pt-1 text-[14px] text-[#71717A] font-[400]'>{props.title}</p>
            <p className='pt-1 text-[16px] text-[#09090B] font-bold'>{props.int}</p>
          </div>
    </>
  )
}






function Dashboard() {

  const [hidden , setdisplay] = useState("hidden")
  const [icon ,seticon] = useState("C")
  const [bg, setbg] = useState("#F26922")

  const Cbutton = () => {
    // setdisplay(hidden === "hidden" ? "block" : "hidden")

    if(hidden === "hidden"){
      setdisplay("block")
      seticon(<HiMiniXMark  className='text-black'/>)
      setbg("bg-[#fff]")
    }else{
      setdisplay("hidden")
      seticon("C")
      setbg("bg-[#F26922]")

    }
  };

    return (
      <>
       <div className='h-full px-[80px] py-[20px] flex justify-center gap-[25px] flex-wrap'>
        <div className='w-[1300px] flex justify-center xl:justify-start lg:justify-center sm:justify-center md:justify-center gap-[25px] flex-wrap'>

          <MainCard img="public\img\img1.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Whitechapel Rd." title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>
          <MainCard img="public\img\img2.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Whitechapel Rd." title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>
          <MainCard img="public\img\img3.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Tulare County" title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>
          <MainCard img="public\img\img4.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Tulare County" title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>
          <MainCard img="public\img\img5.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Tulare County" title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>
          <MainCard img="public\img\img6.png" icon="public\img\Blizzard2.png" iconText="Blizzard" heading="Tulare County" title="Tulare County,  Los Angles, CA 23415" int="$1,456,654.00"/>

        </div>

       </div>



       <div className='fixed bottom-20 md:right-20 right-10 Dnone'>
        {/* chat box */}
        <div className={`md:w-[331px] w-[250px] h-[474px] bg-[#F4F4F5] rounded-[12px] overflow-hidden absolute bottom-24 right-4  ${hidden}`}> 
          <h1 className='w-[331px] h-[63px] pl-5 flex justify-start items-center bg-[#F26922] text-[18px] text-white font-bold '>Chat with Cypher</h1>

          <div className='relative px-2'>
            <p className='w-[213px] h-[57px] absolute top-20 rounded-xl border-[1px] p-1 text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werho</p>
            <p className='w-[213px] h-[57px] absolute top-40  rounded-xl border-[1px] p-1 text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werho</p>
            <p className='w-[213px] h-[57px] absolute right-2 top-4 bg-[#3F3F46] border-[1px] p-1 rounded-xl text-white'>Lorem ipsum dolar sit general   sac mascho werho</p>
            <p className='w-[213px] h-[57px] absolute right-2 top-60 bg-[#3F3F46] border-[1px] p-1 rounded-xl text-white'>Lorem ipsum dolar sit general sac   mascho werho</p>
          </div>

          <div className='absolute bottom-14 w-full h-[42px] flex flex-col items-center'>
            <input className='md:w-[301px] w-[230px] rounded-[12px] p-2 border-[1px] outline-[#F26922]' type="text" placeholder='Enter your question...'/>
          </div>

          <div className='w-full absolute bottom-1 items-center flex justify-between '>
            <div className='w-full flex justify-between p-2'>
            <div className='flex gap-2 pl-2'>
               <CiCamera className='text-[20px] text-[#71717A] cursor-pointer hover:scale-105 transition-transform' />
               <IoImageOutline className='text-[20px] text-[#71717A] cursor-pointer hover:scale-105 transition-transform' />
               <GoPaperclip className='text-[20px] text-[#71717A] cursor-pointer hover:scale-105 transition-transform' />
            </div> 
            
               <button className='w-[80px] h-[30px] bg-[#F26922] flex justify-center items-center rounded-full  text-[12px] text-white hover:scale-105 transition-transform'>Send</button>
            </div>
          </div>

        </div>
        {/* chat box */}

        {/* main button */}
       <button onClick={Cbutton} className={`md:w-[77px] md:h-[77px] w-[60px] h-[60px] ${bg} bg-[#F26922] shadow flex justify-center items-center  rounded-full font2 text-[55.2px] text-white hover:scale-105 transition-transform`}>{icon}</button>
      </div>

      </>
      
    )
  }
  export default Dashboard;
  