import React from 'react'

export const Result = () => {
  return (
    <div className="flex flex-col items-center lg:w-[50%] w-full lg:h-full h-[20rem] bg-gradient-to-b from-[hsl(252,100%,67%)] via-[hsl(241,_81%,_54%)] to-[hsl(241,_81%,_54%)] lg:rounded-3xl rounded-b-3xl">
        <h1 className="lg:py-8 py-4 font-hanken text-[18px] font-bold text-[hsl(241,_100%,_89%)] tracking-wide">Your Result</h1>
        <div className="flex flex-col justify-center items-center rounded-full lg:w-48 lg:h-48 w-32 h-32 bg-gradient-to-b from-[hsla(256,_72%,_46%,_0.9)] to-[hsla(241,_72%,_46%,_0.1)]">
            <p className="lg:text-6xl text-5xl font-hanken font-extrabold text-white">76</p>
            <h2 className="font-hanken font-md text-[hsla(241,_100%,_89%,0.5)]">of 100</h2>
        </div>
        <div className="py-4 w-full flex flex-col items-center text-center text-[hsl(241,_100%,_89%)] font-hanken text-md">
            <h1 className='w-full text-2xl font-extrabold tracking-wide text-white'>Great</h1>
            <h2 className="lg:py-4 py-2 lg:px-16 px-10 w-full">You scored higher than 65% of the people who have taken these tests.</h2>
        </div>
    </div>
  );
};