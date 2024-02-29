import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen bg-blend-saturation brightness-50"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/6285271/pexels-photo-6285271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-slate-900 via-transparent to-slate-900   ">
        <h1 className="text-4xl md:text-7xl  font-bold">404 Error</h1>
        <h2 className="text-2xl md:text-4xl  font-bold">Page Not Found</h2>
        <p className=" text-base md:text-xl text-center font-medium">
          The page you are looking for does not exist. <br />
          Go back to the{" "}
          <a
            href="/"
            className="text-yellow-00 hover:text-yellow-300 underline decoration-slate-300"
          >
            Homepage
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
