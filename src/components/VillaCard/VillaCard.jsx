import React from 'react'
import { Link } from 'react-router-dom'

const VillaCard = ({ villaImg, VillaName, VillaText }) => {
    return (
            <Link to="/villa-details" >
                <div className="featureBox flex flex-row items-center justify-start m-4 gap-4">
                    <img src={villaImg} alt={VillaName} className="w-200px] h-[100px] rounded	" />
                    <div className="villaDetails text-start">
                        <h3 className='text-lg font-medium	 text-blue-600'>{VillaName}</h3>
                        <p className='text-white'>{VillaText}</p>
                    </div>

                </div>
            </Link>
    )
}

export default VillaCard
