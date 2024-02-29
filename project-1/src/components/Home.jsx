import React from 'react'

const Home = () => {

    const [nice, setNice] = React.useState('off');



  return (
    <>
        <div className="bg-gray-900 min-h-screen text-white">
      <nav className="bg-gray-800 p-4">
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li className="mr-6">
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li className="mr-6">
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4">This is just a simple example of a homepage using Tailwind CSS.</p>
      </div>
    </div>
    </>
  )
}

export default Home