'use client'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [images, setImages] = useState(new Map<string, File>())
  async function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const file = e.target.files[0]
    setImages(before => new Map(before.set(e.target.id, file)))
  }
  return (
    <div className="flex  items-center justify-center h-screen w-screen">
      <form className='flex flex-col '>
        <input className=' m-10' id="file" type="file" onChange={(e) => handleUpload(e)}/>
        <button
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          type={'submit'}>アップロード</button>
      </form>
    </div>
  )
}
