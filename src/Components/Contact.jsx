import React from 'react'

function Contact() {
  return (
   <div className="w-full h-screen bg-[#090c31] flex justify-center items-center">
  <main className="w-[100%] max-w-[600px] h-[80%] bg-white p-8 rounded-xl shadow-lg ">
    <h1 className="text-center text-3xl font-semibold text-[#090c31] mb-8">Contact Us</h1>
    <form className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-xl font-medium text-[#090c31] mb-2" htmlFor="name">Name:</label>
        <input
          id="name"
          className="w-full h-[2.5rem] border-2 border-zinc-300 p-3 rounded-sm text-lg outline-none focus:ring-2 focus:ring-[#5853ff] transition-all"
          type="text"
          required
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-medium text-[#090c31] mb-2" htmlFor="email">Email:</label>
        <input
          id="email"
          className="w-full h-[2.5rem] border-2 border-zinc-300 p-3 rounded-sm text-lg outline-none focus:ring-2 focus:ring-[#5853ff] transition-all"
          type="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-medium text-[#090c31] mb-2" htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="w-full h-[6rem] border-2 border-zinc-300 p-3 rounded-sm text-lg outline-none focus:ring-2 focus:ring-[#5853ff] transition-all"
          required
          placeholder="Tell us about your query..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-6 w-1/2 py-2 text-lg bg-[#5853ff] text-white font-semibold rounded-md hover:bg-[#4a45d3] transition-colors"
      >
      Send
      </button>
    </form>
  </main>
</div>

  )
}

export default Contact
