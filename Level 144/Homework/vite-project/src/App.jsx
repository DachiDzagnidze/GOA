// App.jsx
import React from "react";

function App() {
  return (
    <div className="p-6 space-y-8 font-sans">
      <nav className="flex justify-between items-center bg-gray-200 p-4">
        <div className="font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
      </nav>

      <div className="flex flex-wrap gap-4">
        <div className="bg-red-300 w-32 h-32">Box 1</div>
        <div className="bg-green-300 w-32 h-32">Box 2</div>
        <div className="bg-blue-300 w-32 h-32">Box 3</div>
        <div className="bg-yellow-300 w-32 h-32">Box 4</div>
      </div>

      <div className="flex gap-4">
        <div className="bg-purple-300 flex-[2] h-24">Flex 2</div>
        <div className="bg-pink-300 flex-[1] h-24">Flex 1</div>
        <div className="bg-indigo-300 flex-[1] h-24">Flex 1</div>
      </div>

      <div className="flex justify-end gap-4 bg-gray-100 p-4">
        <div className="bg-red-400 h-12 w-12"></div>
        <div className="bg-green-400 h-12 w-12"></div>
        <div className="bg-blue-400 h-12 w-12 self-start"></div>
      </div>

      <div className="flex flex-col h-48 gap-4 bg-gray-50 p-4">
        <div className="bg-red-300 self-end w-16 h-16"></div>
        <div className="bg-green-300 w-16 h-16 mx-auto"></div>
        <div className="bg-blue-300 self-start w-16 h-16"></div>
      </div>

      <div className="border-b-4 border-red-500 w-32">Bottom border</div>

      <div className="border-8 border-double border-green-500 w-32 h-16"></div>

      <div className="rounded-full bg-purple-500 w-16 h-16"></div>

      <h2 className="text-4xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
        Gradient Text
      </h2>

      <p className="sm:text-sm md:text-lg lg:text-2xl">Responsive Text</p>

      <p className="indent-8">
        This paragraph has a first line indentation using TailwindCSS.
      </p>

      <div className="w-1/2 h-1/3 bg-blue-200"></div>

      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        className="w-40 h-40 object-cover"
      />

      <button className="px-10 py-3 font-bold bg-green-400 rounded">Click Me</button>

      <div className="p-12 bg-gray-100">
        <h2 className="text-center mx-auto text-xl font-bold">Centered Title</h2>
      </div>

      <div className="flex space-x-6">
        <div className="w-16 h-16 bg-red-300"></div>
        <div className="w-16 h-16 bg-green-300"></div>
      </div>

      <div className="bg-white text-black dark:bg-black dark:text-white p-4">
        Dark Mode Example
      </div>

      <button className="bg-red-400 hover:bg-red-600 px-4 py-2 rounded text-white">
        Hover Me
      </button>
    </div>
  );
}

export default App;
