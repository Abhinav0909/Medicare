import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Disease() {

  const { t } = useTranslation()

  return (
    <div className='text-white'>

      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold">{t('navLinkDisease')}</h1>
        <div className='bg-blue-500 h-1 w-96 my-2 rounded-lg'></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-16 pb-24">

        <Link to="/skinCancer">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">{t('diseasePredSkinCancer')}</div>
          </div>
        </Link>

        <Link to="/covid">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">{t('diseasePredCOVID')}</div>
          </div>
        </Link>

        <Link to="/brainTumor">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">{t('diseasePredBrainTumor')}</div>
          </div>
        </Link>

      </div>
    </div>
  )
}
