import React from 'react'

export const SummaryCategories = (props) => {
  return (
    <div className={`flex justify-between p-4 ${props.bgColor} ${props.textColor} rounded-xl`}>
        <div className="flex">
            <img src={props.imageSrc} alt="category logo" />
            <p className="pl-4 font-bold">{props.category}</p>
        </div>
        <div className="flex">
            <p className="text-[hsl(224,_30%,_27%)] font-bold">{props.percent}</p><p className="text-[hsla(224,_30%,_27%,_0.4)] font-bold">&nbsp;&nbsp;/ 100</p>
        </div>
    </div>
  )
}