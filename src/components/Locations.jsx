import React from 'react'
import { GoDotFill } from "react-icons/go";

const MainCard = (props) => {
  return (
    <>
      <div className='relative w-full sm:w-full lg:w-[214px] hover:scale-105 transition-transform'>
        <div className='relative'>
          <img src={props.img} alt="" className='w-full object-cover' />
          <p className='absolute top-3 right-3 flex justify-center items-center gap-2 bg-white px-2 py-2 rounded-full text-[12px] text-[#09090B] font-bold'>
            <img className='w-[16px]' src={props.icon} alt="" />{props.iconText}
          </p>
        </div>
        <p className='pt-3 text-[16px] text-[#09090B] font-bold'>{props.heading}</p>
        <p className='pt-1 text-[12px] text-[#71717A] font-[400]'>{props.title}</p>
        <p className='pt-1 text-[16px] text-[#09090B] font-bold'>{props.int}</p>
      </div>
    </>
  );
};

const LocationCard = (props) => {
  return (
    <>
      <div className='flex items-center gap-5 bg-[#f5f5f5] rounded-[10px] py-[15px] px-[10px] cursor-pointer hover:scale-105 transition-transform'>
        <div><img className='w-[78px] h-[78px] rounded-[10px]' src={props.img} alt="" /></div>
        <div className='flex flex-col'>
          <p className='text-[16px] font-bold'>{props.name}</p>
          <p className='flex items-center gap-3'>
            <span className='text-[14px]  text-[#71717A]'>Location name</span>
            <GoDotFill className='text-[8px] text-[#71717A]' />
            <span className='text-[14px] text-[#A1A1AA]'>16.12212, -122.1424</span>
          </p>
          <p className='text-[16px] font-bold pt-1'>{props.int}</p>
        </div>
      </div>
    </>
  );
};

function Locations() {
  return (
    <>
      <div className='px-5 sm:px-10 lg:px-20 py-5 sm:py-10'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-10'>
          {/* Left Column */}
          <div className='w-full lg:w-[60%]'>
            {/* Location Info */}
            <div className='flex flex-col gap-10'>
              <div className='flex items-center gap-3'>
                <div className='w-[37px] h-[37px] rounded-full bg-[#f5f5f5] flex items-center justify-center'>
                  <img src='public/img/location.png' className='text-[#72727a]' />
                </div>
                <div>
                  <p className='text-[#6B7280] text-[14px] pb-1'>Location</p>
                  <h1 className='text-[20px] font-bold'>Tulare County, Los Angeles, CA 23415</h1>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-[37px] h-[37px] rounded-full bg-[#f5f5f5] flex items-center justify-center'>
                  <img src='public/img/approx.png' className='text-[#72727a]' />
                </div>
                <div>
                  <p className='text-[#6B7280] text-[14px] pb-1'>Approx. Cost:</p>
                  <h1 className='text-[20px] font-bold'>$60,607,456.00</h1>
                </div>
              </div>
            </div>
            <br />
            <hr />
            {/* Description */}
            <div>
              <h1 className='text-[14px] font-bold pb-2 pt-8'>Description</h1>
              <p className='text-[#71717A] text-[16px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <br />
            <hr />
            {/* Locations Section */}
            <div>
              <div className='flex items-center justify-between pb-3 pt-8 '>
                <h1 className='text-[14px] font-bold'>Locations</h1>
                <p className='text-[14px] text-[#A1A1AA] underline cursor-pointer'>See all</p>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                <MainCard img='public/img/location1.png' icon='public/img/building.png' iconText='Building' heading='Whitechapel Rd.' title='Tulare County, Los Angeles, CA 23415' int='$1,456,654.00' />
                <MainCard img='public/img/location2.png' icon='public/img/building.png' iconText='Building' heading='Whitechapel Rd.' title='Tulare County, Los Angeles, CA 23415' int='$1,456,654.00' />
                <MainCard img='public/img/location1.png' icon='public/img/building.png' iconText='Building' heading='Whitechapel Rd.' title='Tulare County, Los Angeles, CA 23415' int='$1,456,654.00' />
                <MainCard img='public/img/location1.png' icon='public/img/building.png' iconText='Building' heading='Whitechapel Rd.' title='Tulare County, Los Angeles, CA 23415' int='$1,456,654.00' />
              </div>
            </div>
            <br />
            <hr />
            {/* Activities */}
            <div>
              <div className='flex items-center justify-between pb-3 pt-8'>
                <h1 className='text-[14px] font-bold'>Activities</h1>
                <p className='text-[14px] text-[#0A0A0A] underline cursor-pointer'>See all</p>
              </div>
              <div className='flex flex-col gap-5'>
                <LocationCard img="public/img/location1.png" name="Activity name" int="$1,456,654.00" />
                <LocationCard img="public/img/location1.png" name="Activity name" int="$1,456,654.00" />
              </div>
            </div>
            <br />
            <hr />
            {/* Documents */}
            <div>
              <div className='flex items-center justify-between pb-3 pt-8'>
                <h1 className='text-[14px] font-bold'>Documents</h1>
                <p className='text-[14px] text-[#0A0A0A] underline cursor-pointer'>See all</p>
              </div>
              <div className='flex flex-col gap-5'>
                <LocationCard img="public/img/location1.png" name="Document name" int="$1,456,654.00" />
                <LocationCard img="public/img/location1.png" name="Document name" int="$1,456,654.00" />
              </div>
            </div>
          </div>
          {/* Incident Map */}
          <div className='w-full lg:w-[50%] lg:flex flex-col items-end'>
            <div className='text-start text-[14px] text-[#71717A]'>
              <p className='pb-3'>Incident Map</p>
              <img className='w-full lg:h-[503px] rounded-[10px] cursor-pointer' src="public/img/map.png" alt="" />
              <p className='pt-3 flex items-center gap-10 lg:gap-20 text-[14px] text-[#71717A]'>
                <span>Start 19.1232, -118.233</span>
                <span>End 19.3245, -119.2323</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locations;
