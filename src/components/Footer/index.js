/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
// import { Routes , Route  } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Content from './Content'

function Footer() {
  return (
  
    <footer className="grid md:grid-cols-2  md:gap-x-12 grid-cols-1 gap-x-1">
      
        <div className="md:flex md:row md:justify-start md:mx-10 items-center grid-cols-1 gap-x-1">
           
        <svg className="" width="55" height="56" strokeWidth="1.5" viewBox=" 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5278 12.5056C17.5278 10.5695 19.0973 9 21.0334 9C22.9695 9 24.5389 10.5695 24.5389 12.5056V12.6944C24.5389 14.6305 22.9695 16.2 21.0334 16.2C19.0973 16.2 17.5278 14.6305 17.5278 12.6944V12.5056Z" fill="#026FC2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5056C0 10.5695 1.56949 9 3.50555 9C5.44162 9 7.01111 10.5695 7.01111 12.5056V12.6944C7.01111 14.6305 5.44162 16.2 3.50555 16.2C1.56949 16.2 0 14.6305 0 12.6944V12.5056Z" fill="#026FC2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.76392 21.5056C8.76392 19.5695 10.3334 18 12.2695 18C14.2055 18 15.775 19.5695 15.775 21.5056V21.6944C15.775 23.6305 14.2055 25.2 12.2695 25.2C10.3334 25.2 8.76392 23.6305 8.76392 21.6944V21.5056Z" fill="#21567E"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.76392 3.50556C8.76392 1.56949 10.3334 0 12.2695 0C14.2055 0 15.775 1.56949 15.775 3.50555V3.69445C15.775 5.63051 14.2055 7.2 12.2695 7.2C10.3334 7.2 8.76392 5.63051 8.76392 3.69445V3.50556Z" fill="#21567E"/>
</svg>

<div className="flex row justify-between  mx-10">
<a  className="text-l mx-5 font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out" href="#Home">
    Home
</a>
<a  className="text-l mx-5 font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out" href="#About">
    About
</a>
<a  className="text-l mx-5 font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out" href="#Content">
    Content
</a>
<a  className="text-l mx-5 font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out" href="#Blog">
    Blog
</a>
</div>
{/* <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Content" element={<Content/>} />
    </Routes>  */}

</div>

<form className="flex row  text-white">
    <button type="button" 
       className="bg-prim  text-whity
       text-sm rounded-3xl  w-64 p-2 mx-5
         ">
        sign up
    </button>
<select className="bg-white border border-prim  text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-64 p-2 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="en">English</option>
    <option value="ar" >Arabic</option>
    <option value="ku">Kurdish</option>

  </select>
    </form>

  </footer>
  )
}

export default Footer
