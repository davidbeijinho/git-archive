import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import Navigation from "../components/Navigation"
// import Heading from "../components/Heading"
// import Footer from "../components/Footer"
// import LeadCard from "../components/LeadCard"
// import Author from "../components/Author"
// import Subscribe from "../components/Subscribe"
// import Post from "../components/Post"
import me from "../images/david_square.jpeg";
import "./index.css"

const IndexPage = () => (
  <div
    style={{ height: "min-content" }}
    className="w-full flex items-center justify-center my-auto"
  >
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <div className="flex justify-center m-8">
        <img
          src={me}
          className="rounded-full border-solid border-white border-2 -mt-3"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-sm bold font-sans">Hi there im David Beijinho</h3>
        <p className="mt-2 font-sans font-light text-grey-dark">
        Hello, I am a Web developer, and I like to develop for different media and interactivity experiences. Recently i have been working for a big company running a lot of AB testing, in an agile environment, i also have experience developing a lot of API's and create Web apps using micro-services, but I also enjoy digital fabrication, especially 3D printing, and I have some small projects for the IOT. using physical computing.
        </p>
      </div>
      {/* <div className="flex justify-center pb-3 text-grey-dark">
        <div className="text-center mr-3 border-r pr-3">
          <h2>34</h2>
          <span>Photos</span>
        </div>
        <div className="text-center">
          <h2>42</h2>
          <span>Friends</span>
        </div>
      </div> */}
    </div>
  </div>
)

export default IndexPage
