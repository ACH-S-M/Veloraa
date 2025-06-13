import React from "react"
interface Name{
    title:string
}
export function ButtonKategori({title}:Name){
    return <>
           <button className="rounded-full bg-teal-700 px-6 py-2 text-white hover:bg-teal-800" >{title}</button>
    </>
}
