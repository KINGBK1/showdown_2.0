import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { whyUs } from '../../utils/helpers'

function WhyThisHackathon() {
  return (
    <div className=" flex flex-col gap-4 w-[90vw]  mx-auto  py-10 rounded-xl relative my-5">
    <div className="">
      <p className=" text-5xl text-center font-bold">
        Why <span className=" text-primaryPink">Showdown 1.0 ?</span>
      </p>
      <p className=" text-white/70 text-xl text-center">
        Explore the reasons why Showdown 1.0 is the perfect platform for
        you
      </p>
    </div>
    <div className=" w-full md:w-4/5 mx-auto">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          750: 1,
          950: 2,
        //   1500: 3,
        }}
      >
        <Masonry gutter="30px">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col glass-card  py-5 px-4"
            >
              <div
                className={` w-4/5  mx-auto my-4 rounded-xl shadow-xl flex justify-center items-center ${
                  index % 2 === 0
                    ? " h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : index % 3 === 0
                    ? " h-52 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                    : " h-48 bg-gradient-to-r from-indigo-500 to-yellow-400"
                }`}
              >
                <img src={item.image} className=" h-64 w-64" alt="" />
              </div>
              <p className=" text-secondaryPink text-center text-3xl">
                {item.title}
              </p>
              <p className=" text-white/80 text-center text-md my-2">
                {item.subtitle}
              </p>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  </div>
  )
}

export default WhyThisHackathon