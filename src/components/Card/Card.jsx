import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, date, description, isShowReadMoreButton = true }) => {
    return (
        <div
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            <p className="text-gray-600 mb-4">{description}</p>
            {
                isShowReadMoreButton ? <Link
                    to={`/blog/${id}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    Read More →
                </Link> : null
            }

        </div>
    )
}

export default Card
