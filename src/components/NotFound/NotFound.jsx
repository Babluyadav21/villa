// src/pages/NotFound.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-10xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 !text-white px-6 py-2 rounded-md text-sm font-medium transition"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound
