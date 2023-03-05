import React from 'react';
import {SummaryCategories as SumCat} from "./SummaryCategories";
import memory from "../assets/icon-memory.svg";
import reaction from "../assets/icon-reaction.svg";
import verbal from "../assets/icon-verbal.svg";
import visual from "../assets/icon-visual.svg";

export const Summary = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-[50%] w-full h-full bg-white p-6 font-hanken">
        <h1 className="font-extrabold tracking-wide text-[hsl(224,_30%,_27%)]">Summary</h1>
        <SumCat imageSrc={reaction} category="Reaction" percent="80 " bgColor="bg-[hsla(0,_100%,_67%,_0.1)]" textColor="text-[hsl(0,_100%,_67%)]"/>
        <SumCat imageSrc={memory} category="Memory" percent="92 " bgColor="bg-[hsla(39,_100%,_56%,_0.1)]" textColor="text-[hsl(39,_100%,_56%)]"/>
        <SumCat imageSrc={verbal} category="Verbal" percent="61 " bgColor="bg-[hsla(166,_100%,_37%,_0.1)]" textColor="text-[hsl(166,_100%,_37%)]"/>
        <SumCat imageSrc={visual} category="Visual" percent="72 " bgColor="bg-[hsla(234,_85%,_45%,_0.1)]" textColor="text-[hsl(234,_85%,_45%)]"/>
        <button className="w-full py-4 mt-5 bg-[hsl(224,_30%,_27%)] text-white tracking-wide rounded-full hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,_81%,_54%)] cursor-pointer transition ease-in-out duration-300">Continue</button>
    </div>
  )
}