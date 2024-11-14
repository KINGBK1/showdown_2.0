import React from 'react'
import '../App.css'
import LoaderVideo from "./loader.gif"

function HomeLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black"> 
    <img src={LoaderVideo} alt="loader" className=" w-96 h-96 object-cover" />
    </div> 
  )
}

export default HomeLoader