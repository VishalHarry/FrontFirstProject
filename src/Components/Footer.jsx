import React from 'react'

function Footer() {
  return (
    <footer className='bg-white h-[200px] w-full p-[2rem]  grid  grid-cols-[4fr_1fr]'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-3xl uppercase font-semibold text-[#5853ff]'>name</h1>
            <p className='text-base'>@All right reserved</p>
        </div>
        <div className='flex flex-col justify-center '>
            <h5 className='text-2xl font-semibold'>Follow Us</h5>
            <div className='flex flex-col p-2 font-semibold  text-[#5853ff] hover:text-blue-900'>
                <a className='' href="#" target={"_blank"}>Youtube</a>
                <a href="#"  target={"_blank"}>Instagram</a>
                <a href="#"  target={"_blank"}>Facebook</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

