import React from "react"
import Cover from "../images/cover.jpg"

const Heading = () => (
    <div
    className="w-full m-0 p-0 bg-cover bg-bottom"
    style={{
      "background-image": `url(${Cover})`,
      height: "60vh",
      "max-height": "460px",
    }}
  >
    <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      {/* <!--Title--> */}
      <p className="text-white font-extrabold text-3xl md:text-5xl">
        Ghostwind CSS
      </p>
      <p className="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
    </div>
  </div>
);

export default Heading
