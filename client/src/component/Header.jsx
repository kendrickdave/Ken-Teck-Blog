import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import {Link ,useLocation} from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from  'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
       to-pink-500 rounded-full text-white'>
          Mebo</span> 
       Blog
      </Link>
      {/* search input for desktop view  */}
      <form>
       <TextInput
       type='text'
       placeholder='search...'
       rightIcon={AiOutlineSearch}
       className='hidden lg:inline'
       />
      </form>

      {/* search button for mobile view  */}
      <Button className='w-12 h-10 lg:hidden' color ='gray' pill>
        <AiOutlineSearch />
      </Button>
      
      {/* light and dark mode control */}
      <div className="flex gap-2 md:order-2">
       <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
        <FaMoon/>
       </Button>

       {/* sign in button */}
       <Link to="/SignIn">
       <Button gradientDuoTone='purpleToBlue'> 
        Sign In
         </Button>
       </Link>
       {/* hangbuger button */}
       <Navbar.Toggle/>
      </div>
      


       {/* Menu */}
       <Navbar.Collapse>
        <Navbar.Link active={path === '/Home'} as={'div'}>
          <Link to ="/Home">
          Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/About'} as={'div'}>
          <Link to ="/About">
          About Us
          </Link>
        </Navbar.Link>

        {/* i use project.jsx for job page */}
        <Navbar.Link active={path === '/Projects'} as={'div'}>
          <Link to ="/Projects">
          Jobs
          </Link>
        </Navbar.Link>
       </Navbar.Collapse>
    </Navbar>
  );
}
