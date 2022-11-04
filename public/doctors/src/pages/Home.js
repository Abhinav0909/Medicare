// import React from "react"
// import HeroImg from '../assets/hero.svg'
// import FeatImg from '../assets/feat.svg'
// import { Link } from 'react-router-dom';

// export default function Home() {

//     return (
//         <div className='md:mx-28 mx-4 text-white py-10'>

//             <div className='md:grid md:grid-cols-2 items-center'>
//                 <div className=''>
//                     <h1 className='text-3xl md:text-6xl'>Who we are</h1>
//                     <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>MediCare is a web application where users can take a parkinsons test to check if you have Parkinson or not. We also have a story telling game specially for elderly people to diagnose Alzheimer and improve cognitive skills.</p>

//                     <Link to="/disease">
//                         <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Disease Prediction</button>
//                     </Link>

//                 </div>
//                 <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
//                     <img src={HeroImg} alt="img" width="450" height="450" />
//                 </div>
//             </div>

//             <div className='md:grid md:grid-cols-2 pt-12 items-center'>
//                 <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
//                     <img src={FeatImg} alt="img" width="450" height="450" />
//                 </div>
//                 <div className=''>
//                     <h1 className='text-5xl'>What else do we have</h1>
//                     <p className='text-xl md:text-2xl py-4 tracking-wider'>MediCare is a web app where you can:
//                     </p>
//                     <ul className="text-2xl">
//                         <li className="list-disc">Smart disease prediction.</li>
//                         <li className="list-disc">Contact doctor for any help.</li>
//                         <li className="list-disc">Take a parkinsons test to check if you have Parkinson or not.</li>
//                         <li className="list-disc">A story telling game specially for elderly people to diagnose Alzheimer and improve cognitive skills.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }
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

        </div>
    )
}
