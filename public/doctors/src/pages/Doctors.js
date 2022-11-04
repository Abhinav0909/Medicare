import React from 'react'
import Doctor1 from "../assets/doctor1.png"
import Doctor2 from "../assets/doctor2.png"
import { Link } from "react-router-dom"

export default function Doctors() {
    return (
        <div className='text-white'>
            <div className='grid place-items-center'>
                <h1 className='text-5xl font-semibold py-2'>Doctors</h1>
                <div className="bg-secondary w-36 h-1 rounded-full"></div>
            </div>

            <div className='flex flex-wrap flex-col-3 justify-around w-full px-16 py-8 gap-4'>

                <div className="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-72">
                    <div className="profile mx-auto rounded-full py-2 w-24">
                        <img src={Doctor2} alt="profile" />
                    </div>
                    <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                        <p>Dr. Adam</p>
                    </div>
                    <div className="work text-gray-700 mt-4">
                        <p>Geriatrician</p>
                    </div>
                    <div className="w-full mt-8">
                        <Link to="/doctors/adam">
                            <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                                Chat now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-72">
                    <div className="profile mx-auto rounded-full py-2 w-24">
                        <img src={Doctor1} alt="profile" />
                    </div>
                    <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                        <p>Dr. Amelia</p>
                    </div>
                    <div className="work text-gray-700 mt-4">
                        <p>Pediatrician</p>
                    </div>
                    <div className="w-full mt-8">
                        <Link to="/doctors/amelia">
                            <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                                Chat now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-72">
                    <div className="profile mx-auto rounded-full py-2 w-24">
                        <img src={Doctor2} alt="profile" />
                    </div>
                    <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                        <p>Dr. Aundrey</p>
                    </div>
                    <div className="work text-gray-700 mt-4">
                        <p>Geriatrician</p>
                    </div>
                    <div className="w-full mt-8">
                        <Link to="/doctors/aundrey">
                            <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                                Chat now
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='grid place-items-center py-8'>
                <h1 className='text-5xl font-semibold py-2'>Nearby Hospitals and Pharmacies</h1>
                <div className="bg-secondary w-96 h-1 rounded-full"></div>
                <iframe src="http://127.0.0.1:5500/public/map/map.html#" title="map" width="1200px" height="600px" className='my-4 border-2 border-secondary bg-white' />
            </div>

        </div>
    )
}
