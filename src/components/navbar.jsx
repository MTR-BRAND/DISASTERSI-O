import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate , } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { FiPlus, FiMinus } from "react-icons/fi"; // Icons for opening/closing form
import NewIncidents from './NewIncidents';
import { HiMiniXMark } from "react-icons/hi2";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isIncidentFormVisible, setIncidentFormVisible] = useState(false); 
  const [pogresVisible, setPogresVisible] = useState("hidden");
  const [progressWidth, setProgressWidth] = useState("0%");
  const [ButtonH , setButton] = useState(false)
  const [next , setNext] = useState(false)
  const [next2 , setNext2] = useState("hidden")
  const [searchB , setSearchB] = useState(false)
  const navigate = useNavigate();
  // const [das  , setdas] = useState(false)

  // Determine current route and display appropriate page name
  const getRouteName = (path) => {
    switch (path) {
      case '/Dashboard':
        return 'Dashboard';
      case '/Incidents':
        return 'Incidents';
      case '/Locations':
        return (
          <>
          <div className='flex items-center gap-3'>
          <img className='black' src="\img\SevereStorm.png" alt="" /> Incidents - DR-4699 March 2023 Severe Storms 
          </div>
          </>
        );
      case '/Activities':
        return 'Activities';
      case '/Documents':
        return 'Documents';
      case '/Incidents2':
        return 'New Incident';
      case '/Incidents3':
        return 'New Incident';
      case '/Cypher':
        return 'Cypher AI';
      case '/':
        return 'Dashboard';
      case '*':
        return 'page not found';
      default:
        return 'Dashboard';
    }
  };
  
  const getRouteName2 = (path) => {
    switch (path) {
      case '/Dashboard':
        return 'Welcome back';
      case '/Incidents':
        return 'Home - Incidents';
      case '/Incidents2':
        return 'Home - Incidents - New Incidents';
      case '/Incidents3':
        return 'Home - Incidents - New Incidents';
      case '/Incidents4':
        return 'Home - Incidents - New Incidents';
      case '/Locations':
          return 'Incidents - DR-4699 March 2023 Severe Storms ';
      default:
        return 'Welcome back';
    }
  };


  

  // Determine the appropriate button text for each route
  const getRouteButton = (path) => {
    switch (path) {
      case '/Incidents':
        return isIncidentFormVisible ? (
          <>
            <FiMinus className='text-[18px] font-bold pr-[1px]' /> Close Form
          </>
        ) : (
          <>
            <FiPlus className='text-[18px] font-bold pr-[1px]' /> New Incident
          </>
        );
      case '/Locations':
        return (
          <>
            <FiPlus className='text-[18px] font-bold pr-[1px]' /> New Location
          </>
        );
      case '/Incidents2':
        return <>Next step</>;
      case '/Incidents3':
        return <>Next step</>;
      case '/Incidents4':
        return <>Finished</>;

      default:
        return 'Cypher AI';
    }
  };


  const getRouteButton2 = (path) => {
    switch (path) {
      case '/Incidents2':
          return <>Back</>;

      case '/Incidents3':
          return <>Back</>;
      case '/Incidents4':
          return <>Back</>;
    }
  };

  // Current route name and button text based on the route
  const routeName = getRouteName(location.pathname);
  const routeName2 = getRouteName2(location.pathname);
  const routeButton = getRouteButton(location.pathname);
  const routeButton2 = getRouteButton2(location.pathname);

  // Function to toggle form visibility
  const toggleVisibility = () => {
    if (location.pathname === '/Incidents') {
      setIncidentFormVisible(!isIncidentFormVisible);
    }
  };


  ;

  useEffect(() => {
    if (location.pathname !== '/Incidents' && location.pathname !== '/Dashboard' && location.pathname !== '/Locations' && location.pathname !== '/Activities' && location.pathname !== '/Documents' && location.pathname !== '/Cypher' && location.pathname !== '/' && location.pathname !== '*') {
      setIncidentFormVisible(false);
      setPogresVisible("block");
      setProgressWidth("30%");
      setButton("block")
      setSearchB("hidden");
      setNext("block") 
      setNext2("hidden")

    } else {
      setPogresVisible("hidden");
      setProgressWidth("0%");
      setButton("hidden");
      setSearchB("block");    
      setNext("hidden")
      setNext2("block")

    }
  }, [location.pathname]);



const stepRoutes = ['/Incidents', '/Incidents2', '/Incidents3' , '/Incidents4' ,'/Locations'];

const handleBackStep = () => {
  const currentIndex = stepRoutes.indexOf(location.pathname);
  if (currentIndex > 0) {
    navigate(stepRoutes[currentIndex - 1]); // Navigate to the previous step
  }
};

const handleNextStep = () => {
  const currentIndex = stepRoutes.indexOf(location.pathname);
  if (currentIndex < stepRoutes.length - 1) {
    navigate(stepRoutes[currentIndex + 1]); // Navigate to the next step
  }
};


  return (
    <>
      <header className='w-full bg-[#f2f2f2] relative'>
        <nav className='flex justify-between items-center px-4 md:px-[80px] py-[20px] border-b-2 border-[#e6e6e8]'>
          <img src="/img/logo.png" alt="Logo" className='w-[120px] md:w-[140]' />

          {/* Main Navigation Links */}
          <ul className='hidden lg:flex gap-3 lg:gap-8'>
            {['Dashboard', 'Incidents', 'Locations', 'Activities', 'Documents', 'Cypher' ,].map((item) => (
              <li key={item} >
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) => (isActive ? "text-[#09090B] font-bold" : "text-[#A1A1AA]")}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* User and Hamburger Icon for mobile menu */}
          <div className='flex justify-center items-center gap-2 '>
            <div className='relative'>
              <img src="/img/notifIcon.png" alt="Notifications" className='hover:scale-105 transition-transform'/>
              <div className='w-3 h-3 rounded-full bg-green-400 border-[2px] border-[#fff] absolute top-0 right-0 '></div>
            </div>
            <div className='flex items-center'>
              <img src="/img/user.png" alt="User" className='w-[40px] hover:scale-105 transition-transform' />
              <div className='pl-2 hidden md:block'>
                <h1 className='text-[#A1A1AA] text-[16px] font-semibold block md:hidden'>Usman Zafar</h1>
                <p className='text-[#A1A1AA] text-[14px] block md:hidden'>usmanzafar@gmail.com</p>
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="block lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl hover:scale-105 transition-transform" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#fff] px-4 py-4 drop-shadow-md">
            <ul className='flex flex-col gap-4'>
              {['Dashboard', 'Incidents', 'Locations', 'Activities', 'Documents', 'Cypher'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => (isActive ? "text-[#09090B] font-bold" : "text-[#000]")}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search and Sort Section */}
        <div className='flex flex-col md:flex-row justify-between px-4 md:px-[80px] py-[20px] gap-4'>
          <div className='flex flex-col gap-2'>
            {/* xmark */}
            <div onClick={() => {navigate('/Incidents')}} className={`lg:w-[41px] lg:h-[41px] lg:bg-white lg:rounded-full lg:flex lg:justify-center lg:items-center lg:absolute lg:left-5 lg:top-[62%]   lg:hover:scale-105 transition-transform lg:${next} ${next}`}><HiMiniXMark className={`text-[25px] lg:${next}`}/></div>
            {/* xmark */}

            <p className='text-[12px] text-start text-[#71717A]'>{routeName2}</p>
            <h1 className='text-[20px] md:text-[26px] text-start text-[#09090B] font-bold'>{routeName}</h1>
          </div>

          {/* Progress Bar */}
          <div className={`lg:w-[300px] xl:w-[527px]  h-[5px] md:my-0 my-2  bg-[#E5E7EB] absolute left-[50%] top-[74%] translate-y-[-74%] translate-x-[-50%] rounded-full ${pogresVisible}`}>
            <div className='h-[5px] bg-[#F26922] rounded-full' style={{ width: progressWidth }}></div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 items-center'>
            {/* Search Bar */}
            <div className={`flex items-center relative w-full sm:w-auto ${searchB}`}>
              <IoIosSearch className='absolute left-2 text-xl text-[#71717A]' />
              <input
                className='w-full sm:w-[190px] h-[42px] rounded-md text-sm px-8 text-[#71717A]'
                type="text"
                placeholder='Search incident'
              />
            </div>

            {/* Sort by Date */}
            <div className={`flex items-center relative w-full sm:w-auto ${searchB}`}>
              <p className='absolute left-2 text-[12px] text-[#A1A1AA]'>Sort By:</p>
              <div className='w-full sm:w-[190px] h-[42px] rounded-md text-sm px-8 bg-white flex justify-center items-center'>
                <p className='pl-[20px] text-[#71717A]'>Date modified</p>
              </div>
            </div>

            {/* Toggle Visibility Button */}
            <button onClick={handleBackStep} className={`w-full sm:w-[108px] h-[42px] flex justify-center items-center md:my-0 my-3 bg-[#fafafa] text-[12px] text-[#71717A] font-bold rounded-md border-[1px] border-[#D4D4D8] hover:scale-105 transition-transform ${ButtonH}`}>
              {routeButton2}
            </button>
           
            <button onClick={handleNextStep}  className={`w-full sm:w-[108px] h-[42px] flex justify-center items-center bg-[#F26922] text-[12px] text-white font-bold rounded-md hover:scale-105 transition-transform ${next}`}>
              {routeButton}
            </button>

            <button onClick={toggleVisibility}  className={`'w-full sm:w-[108px]  h-[42px] flex justify-center items-center bg-[#F26922] md:text-[12px] lg:text-[12px] text-[12px] p-1 text-white  font-bold rounded-md  hover:scale-105 transition-transform ${next2} '`}>
              {routeButton}
            </button>



          </div>
        </div>
      </header>

      {/* Conditionally render NewIncidents form */}
      {isIncidentFormVisible && <NewIncidents />}

      <Outlet />

      {/* <Dashboard className={das}/> */}
    </>
  );
}

export default Navbar;
