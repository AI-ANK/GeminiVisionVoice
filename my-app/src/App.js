import './App.css';
import Webcam from './components/Webcam';
import React, { useState } from 'react';



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N0kuksaFX66
 */
import Button from './components/ui/Button'

export default function Component() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (url && query) {
      fetch(`https://gmm.pzyn1d3.repl.co/?image_url=${encodeURIComponent(url)}&text_query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.log('Both fields are required');
    }
  };

  const handleButtonClick = () => {
    fetch(`https://gmm.pzyn1d3.repl.co/?image_url=https://storage.googleapis.com/generativeai-downloads/data/scene.jpg&text_query=what%20is%20this`)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-[#0f0f0f] p-4">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative">
          <Button className="w-24 h-24 rounded-full bg-blue-500 text-white text-2xl flex items-center justify-center shadow-xl hover:bg-blue-600 focus:bg-blue-700 active:bg-red-500">
            <MicIcon className="w-10 h-10" />
          </Button>
          <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full rounded-full bg-green-500 opacity-0 animate-pulse"
          />
        </div>
        <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-4 p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Enter Query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-4 ml-2 p-2 rounded border border-gray-300"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        <Button onClick={handleButtonClick} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 focus:bg-gray-800">
          Cancel
        </Button>
        <div className="ml-4" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <Webcam />

      </div>
    </div>
  )
}


function MicIcon({ state, ...props }) {
  let color;
  switch (state) {
    case 'idle':
      color = 'blue';
      break;
    case 'recording':
      color = 'red';
      break;
    case 'processing':
      color = 'green';
      break;
    default:
      color = 'blue';
  }
  return (
    <svg
      {...props}
      style={{ color }} // Add color style
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}
