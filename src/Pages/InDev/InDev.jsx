import React from 'react'

const InDev = () => {
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-start pt-32 md:pt-52 h-full    ">
        <h2 className="text-green-400 text-2xl md:text-4xl  font-bold">
          Page In Development.
        </h2>
        <p className="text-white  text-base md:text-xl text-center font-medium">
          The page you are looking for is in development. Check back again soon.{" "}
          <br />
          Please go back to the{" "}
          <a
            href="/"
            className="text-yellow-00 hover:text-yellow-300 underline decoration-slate-300"
          >
            Homepage
          </a>
        </p>
      </div>
    </div>
  )
}

export default InDev
