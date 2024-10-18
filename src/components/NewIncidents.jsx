import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function NewIncidents() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Card component to display each incident step
  const Card = (props) => {
    return (
      <div className='w-[235px] h-[269px] bg-[#E4E4E7] rounded-[10px] p-4 flex flex-col justify-between'>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
        <div>
          <h1 className='text-[20px] font-bold text-[#09090B] pb-1'>{props.title}</h1>
          <p className='text-[14px] text-[#71717A]'>{props.dts}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full h-auto md:min-h-[120vh] min-h-[520vh] flex justify-center pt-[50px] items-start text-[#09090B] my-5 bg-white absolute top-20 z-20'>
      <div className='w-full md:w-[815px] flex flex-col gap-11 justify-center items-center relative'>
        {/* Title Section */}
        <div className='text-center'>
          <h1 className='text-[32px] font-bold'>Let’s get started</h1>
          <p className='text-[16px] text-[#71717A] pt-1'>
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>

        {/* Progress bar section */}
        <div className='relative'>
          <div className='w-full md:w-[598px] h-[3px] mt-3 bg-[#E4E4E7] absolute left-[50%] top-[33.3%] translate-x-[-50%] translate-y-[-33.3%]'></div>
          <div className='w-full md:w-[609px] grid grid-cols-3 gap-[50px] md:gap-[288px] items-center mt-3'>
            <div className='w-[29px] h-[29px] rounded-full bg-[#E4E4E7]'></div>
            <div className='w-[29px] h-[29px] rounded-full bg-[#E4E4E7]'></div>
            <div className='w-[29px] h-[29px] rounded-full bg-[#E4E4E7]'></div>
          </div>
        </div>

        {/* Cards Section */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-14'>
          <Card img="/img/inc1.png" title="What type of incident?" dts="Choose the category that best describes the incident." />
          <Card img="/img/inc2.png" title="Tell us about the incident?" dts="Let’s connect the dots and see where to start." />
          <Card img="/img/inc3.png" title="Where did the incident occur?" dts="Lorem ipsum dolar sit general sac mascho werho" />
        </div>

        {/* Start Button */}
        <button 
          onClick={() => {
              navigate('/Incidents2');
          }}
          className='w-[139px] h-[42px] bg-[#f26722] text-[12px] text-white font-bold rounded-[6px] hover:scale-105 transition-transform'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default NewIncidents;
