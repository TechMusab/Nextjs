"use client";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react'

export default function Page() {
    const [number, setNumber] = useState(0);
    const count=useSelector((state) => state.counter);
    const dispatch=useDispatch();
    return (
        <>
        <div className='flex flex-col gap-6 w-[100vw] h-[100vh] justify-center items-center'>
            <h1 className='text-bold text-3xl'>Count:{count}</h1>
            <div className='flex gap-4 justify-center items-center'>
            <button onClick={()=>dispatch({type:"INCREMENT"})} className='bg-green-500 px-6 py-2 text-bold rounded-2xl cursor-pointer'>
                Increment
            </button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}  className='bg-red-500 px-6 py-2 text-bold rounded-2xl cursor-pointer'>
                Decrement
            </button>
            <button onClick={()=>dispatch({type:"RESET"})} className='bg-blue-500 px-6 py-2 text-bold rounded-2xl cursor-pointer'>
                Reset
            </button>
            </div>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="Enter the increment or decrement" className="w-72 p-4 " />
            <div className='flex gap-4 justify-center items-center'>
            <button onClick={()=>dispatch({type:"INCREMENT_BY_NUMBER",
            payload:number})} className='bg-green-500 px-6 py-2 text-bold rounded-2xl cursor-pointer'>
                Increment By Number
            </button>
            <button onClick={()=>dispatch({type:"DECREMENT_BY_NUMBER",payload:number})}  className='bg-red-500 px-6 py-2 text-bold rounded-2xl cursor-pointer'>
                Decrement By Number
            </button>
            </div>
            </div>
        </>
    )
}
