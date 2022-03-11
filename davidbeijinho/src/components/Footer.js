import React from "react"

const Footer = () => (
  <footer className="bg-gray-900">
  <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
    <div className="w-full mx-auto flex flex-wrap items-center">
      <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
        <a
          className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
          href="/page-2/"
        >
          <span className="text-base text-gray-200">Ghostwind CSS</span>
        </a>
      </div>
      <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
          <li>
            <a
              className="inline-block py-2 px-3 text-white no-underline"
              href="/page-2/"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
              href="/page-2/"
            >
              link
            </a>
          </li>
          <li>
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
              href="/page-2/"
            >
              link
            </a>
          </li>
          <li>
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
              href="/page-2/"
            >
              link
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
);

export default Footer
