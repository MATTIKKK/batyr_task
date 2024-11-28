import React from 'react'
import boy1 from "../../static/img/boy1.png"

const Card = () => {
  return (
    <div className="rounded-lg m-5 p-5 flex items-center justify-center flex-col max-w-fit border border-light-gray-500 gap-8">
      <p className="text-gray-500 font-bold text-[14px]">Последний преподаватель</p>
      <div className="flex gap-2 ">
        <img src={boy1} alt="" className="w-[40px] h-[40px]" />
        <div className="">
          <p className="text-sm text-gray-500 font-bold">Байрамов Б.O.</p>
          <p className="text-sm text-gray-400">08.07.2024 10:00-11:00</p>
        </div>
      </div>
    </div>
  )
}

export default Card